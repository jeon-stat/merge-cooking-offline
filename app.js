/* Personal, offline-only implementation. No account, purchase, ad, or server calls. */
const DATA = window.MERGE_COOKING_DATA;
const COLS = 7;
const ROWS = 9;
const KEY = "merge-cooking-offline-public-ledger-v1";
const boardNode = document.querySelector("#board");
const storageNode = document.querySelector("#storage");
const ordersNode = document.querySelector("#orders");
const statusNode = document.querySelector("#status");
let selected = null;

const nextItem = Object.fromEntries(Object.values(DATA.chains).flatMap(chain =>
  chain.slice(0, -1).map((id, index) => [id, chain[index + 1]])
));
const customerFaces = ["👩🏻", "👨🏽", "👩🏾", "🧑🏻", "👵🏼", "🧔🏾"];
const generatorSlots = {
  "drink-generator": { name: "음료 생성기", art: "🥤", level: 6 },
  "fruit-nut-generator": { name: "과일 & 견과 생성기", art: "🍓", level: 6 },
  "protein-generator": { name: "프로틴 생성기", art: "🍗", level: 6 },
  "vegetable-generator": { name: "채소 생성기", art: "🥬", level: 6 },
  "grain-generator": { name: "곡물 생성기", art: "🌾", level: 6 },
  "alcohol-generator": { name: "알코올 생성기", art: "🍷", level: 6 },
  ship: { name: "배", art: "🚢", level: 6 }
};
const stations = {
  juicer: { name: "주서기", art: "🍹" },
  "chef-counter": { name: "셰프 카운터", art: "👨🏻‍🍳" },
  pan: { name: "프라이팬", art: "🍳" },
  grill: { name: "그릴 머신", art: "🔥" },
  oven: { name: "오븐", art: "♨️" },
  shaker: { name: "셰이커", art: "🍸" },
  pot: { name: "조리 냄비", art: "🍲" }
};
let stageIndexForOrders = 0;
let dragStart = null;
let suppressNextClick = false;

function emptyBoard() {
  const board = Array(COLS * ROWS).fill(null);
  board[1] = { kind: "generator", id: "fruit-nut-generator" };
  board[4] = { kind: "generator", id: "drink-generator" };
  board[44] = { kind: "station", id: "juicer", ingredients: [] };
  board[46] = { kind: "station", id: "chef-counter", ingredients: [] };
  board[31] = { kind: "locked", level: 3 };
  board[38] = { kind: "locked", level: 4 };
  [[8, "cherry"], [9, "cherry"], [16, "water"], [17, "water"], [23, "strawberry"], [29, "sesame"]]
    .forEach(([index, item]) => { board[index] = { kind: "item", id: item }; });
  return board;
}
function id() { return crypto.randomUUID?.() || `${Date.now()}-${Math.random()}`; }
function freshOrder() {
  const stage = DATA.stages?.[stageIndexForOrders] || DATA.firstStage;
  const pool = DATA.stageOrders?.[stage.id] || DATA.stageOrders?.[DATA.firstStage.id] || ["cola", "cherry-juice"];
  const item = pool[Math.floor(Math.random() * pool.length)];
  return { id: id(), item, reward: 5 + Math.max(1, chainRank(item)) * 2, face: customerFaces[Math.floor(Math.random() * customerFaces.length)] };
}
function initialState() {
  return { version: 5, level: 35, coins: 101, gems: 20, stars: 0, stageIndex: 0, board: emptyBoard(), storage: [], orders: [freshOrder(), freshOrder(), freshOrder()] };
}
function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (saved?.version === 5 && saved.board?.length === COLS * ROWS) return saved;
  } catch { /* start with a clean offline state */ }
  return initialState();
}
let state = load();
stageIndexForOrders = state.stageIndex || 0;
unlockStageContents(state.stageIndex);
function save() { localStorage.setItem(KEY, JSON.stringify(state)); }
function unlockStageContents(stageIndex) {
  const stage = DATA.stages?.[stageIndex];
  if (!stage?.unlocks) return;
  const present = new Set(state.board.filter(Boolean).map(slot => slot.id));
  for (const unlock of stage.unlocks) {
    if (present.has(unlock)) continue;
    const isGenerator = Boolean(DATA.generators?.[unlock]);
    const isStation = Boolean(stations[unlock]);
    if (!isGenerator && !isStation) continue;
    const target = emptyIndex();
    if (target < 0) break;
    state.board[target] = isGenerator
      ? { kind: "generator", id: unlock }
      : { kind: "station", id: unlock, ingredients: [] };
    present.add(unlock);
  }
}
function dataItem(item) { return DATA.items[item] || [item, "❔"]; }
function name(item) { return dataItem(item)[0]; }
function art(item) { return dataItem(item)[1]; }
function chainRank(item) { return Object.values(DATA.chains).find(chain => chain.includes(item))?.indexOf(item) + 1 || 1; }
function setStatus(message) { statusNode.textContent = message; }
function emptyIndex() { return state.board.findIndex(slot => slot === null); }
function setSelected(index) { selected = index; }
function isItem(slot) { return slot?.kind === "item"; }
function sameItems(left, right) {
  return left.length === right.length && [...left].sort().every((value, index) => value === [...right].sort()[index]);
}
function containsIngredients(recipe, candidate) {
  return candidate.every(value => candidate.filter(id => id === value).length <= recipe.filter(id => id === value).length);
}

function tileLabel(slot) {
  if (!slot) return "빈 칸";
  if (slot.kind === "item") return name(slot.id);
  if (slot.kind === "generator") return generatorSlots[slot.id].name;
  if (slot.kind === "locked") return `레벨 ${slot.level}에서 잠금 해제`;
  return stations[slot.id].name;
}
function renderSlot(slot, index, inStorage = false) {
  const node = document.querySelector("#itemTemplate").content.firstElementChild.cloneNode(true);
  node.dataset.index = index;
  if (!slot) { node.classList.add("empty"); node.disabled = true; node.setAttribute("aria-label", "빈 칸"); return node; }
  node.setAttribute("aria-label", tileLabel(slot));
  if (slot.kind === "item") {
    node.classList.add("item");
    node.innerHTML = `<span class="item-art">${art(slot.id)}</span><span class="item-name">${name(slot.id)}</span><span class="item-level">Lv.${chainRank(slot.id)}</span>`;
  } else if (slot.kind === "generator") {
    const generator = generatorSlots[slot.id];
    node.classList.add("generator-tile", slot.id);
    node.innerHTML = `<span class="station-art">${generator.art}</span><span class="item-name">${generator.name}</span><span class="item-level">Lv.${generator.level}</span>`;
  } else if (slot.kind === "locked") {
    node.classList.add("locked-tile");
    node.innerHTML = `<span class="lock-art">☁️</span><span class="locked-level">LV.${slot.level}</span>`;
  } else {
    const station = stations[slot.id];
    const ingredientText = slot.ingredients.length ? slot.ingredients.map(art).join("") : "탭해 사용";
    node.classList.add("station-tile");
    node.innerHTML = `<span class="station-art">${station.art}</span><span class="item-name">${station.name}</span><span class="station-contents">${ingredientText}</span>`;
  }
  node.addEventListener("pointerdown", event => {
    if (inStorage || !slot || slot.kind !== "item") return;
    dragStart = { index, x: event.clientX, y: event.clientY };
    node.setPointerCapture?.(event.pointerId);
  });
  node.addEventListener("pointerup", event => {
    if (inStorage || !dragStart) return;
    const moved = Math.hypot(event.clientX - dragStart.x, event.clientY - dragStart.y) > 10;
    const from = dragStart.index;
    dragStart = null;
    if (moved && from !== index) {
      suppressNextClick = true;
      moveOrMerge(from, index);
      render();
    }
  });
  node.addEventListener("pointercancel", () => { dragStart = null; });
  node.addEventListener("click", () => {
    if (suppressNextClick) { suppressNextClick = false; return; }
    inStorage ? restoreFromStorage(index) : tapSlot(index);
  });
  return node;
}
function renderOrders() {
  ordersNode.replaceChildren(...state.orders.map(order => {
    const ready = state.board.some(slot => slot?.kind === "item" && slot.id === order.item) || state.storage.some(slot => slot.id === order.item);
    const node = document.createElement("button");
    node.type = "button";
    node.className = `order${ready ? " ready" : ""}`;
    node.innerHTML = `<span class="order-art">${art(order.item)}</span><span class="order-name">${name(order.item)}</span><span class="order-reward">+${order.reward} 🪙</span><span class="customer">${order.face}</span>`;
    node.addEventListener("click", () => fulfillOrder(order.id));
    return node;
  }));
}
function render() {
  document.querySelector("#level").textContent = state.level;
  document.querySelector("#coins").textContent = state.coins;
  document.querySelector("#gems").textContent = state.gems;
  const stage = DATA.stages?.[state.stageIndex] || DATA.firstStage;
  document.querySelector("#stageName")?.replaceChildren(document.createTextNode(stage.name));
  document.querySelector("#stageCountry")?.replaceChildren(document.createTextNode(stage.country || ""));
  document.querySelector("#stageStars")?.replaceChildren(document.createTextNode(`${state.stars}/20`));
  const renovateButton = document.querySelector("#renovateButton");
  if (renovateButton) {
    const cost = 50 + state.stageIndex * 10;
    renovateButton.textContent = state.stageIndex >= (DATA.stages?.length || 1) - 1 ? "최종 식당" : `개조 ${cost} 🪙`;
    renovateButton.disabled = state.stageIndex >= (DATA.stages?.length || 1) - 1;
  }
  document.querySelector("#storageCount").textContent = state.storage.length;
  boardNode.replaceChildren(...state.board.map((slot, index) => renderSlot(slot, index)));
  boardNode.querySelector(`[data-index="${selected}"]`)?.classList.add("selected");
  storageNode.replaceChildren(...state.storage.map((slot, index) => renderSlot(slot, index, true)));
  renderOrders();
  save();
}
function tapSlot(index) {
  const slot = state.board[index];
  if (!slot) return;
  if (slot.kind === "generator") return produce(slot.id);
  if (slot.kind === "locked") return setStatus(`이 칸은 레벨 ${slot.level}에서 열립니다.`);
  if (slot.kind === "station") return useStation(index);
  if (selected === null) {
    setSelected(index);
    setStatus(`${name(slot.id)} 선택됨 — 같은 재료를 탭해 병합하거나 주서기를 탭하세요.`);
  } else if (selected === index) {
    selected = null;
    setStatus("선택을 해제했습니다.");
  } else {
    moveOrMerge(selected, index);
  }
  render();
}
function moveOrMerge(from, to) {
  const source = state.board[from];
  const target = state.board[to];
  if (!isItem(source) || from === to) return;
  if (!target) {
    state.board[to] = source;
    state.board[from] = null;
    setStatus(`${name(source.id)}을(를) 옮겼습니다.`);
  } else if (isItem(target) && source.id === target.id && nextItem[source.id]) {
    const result = nextItem[source.id];
    state.board[to] = { kind: "item", id: result };
    state.board[from] = null;
    setStatus(`${name(source.id)} + ${name(source.id)} → ${name(result)}!`);
    navigator.vibrate?.(15);
  } else {
    setStatus("같은 아이템끼리만 병합할 수 있습니다.");
  }
  selected = null;
}
function produce(generatorId) {
  const target = emptyIndex();
  if (target < 0) return setStatus("보드가 가득 찼습니다. 아이템을 병합하거나 보관하세요.");
  const generator = DATA.generators[generatorId];
  const level = generatorSlots[generatorId].level;
  const output = generator.outputs[level];
  const item = output[Math.floor(Math.random() * output.length)];
  state.board[target] = { kind: "item", id: item };
  selected = null;
  setStatus(`${generator.title}에서 ${name(item)}이(가) 나왔습니다.`);
  navigator.vibrate?.(10);
  render();
}
function useStation(index) {
  const station = state.board[index];
  if (selected === null || !isItem(state.board[selected])) return setStatus(`${stations[station.id].name}에 넣을 재료를 먼저 선택하세요.`);
  const ingredient = state.board[selected].id;
  const candidate = [...station.ingredients, ingredient];
  const recipes = DATA.recipes[station.id] || [];
  const isPossible = recipes.some(([, ingredients]) => candidate.length <= ingredients.length && containsIngredients(ingredients, candidate));
  if (!isPossible) return setStatus(`${name(ingredient)}은(는) ${stations[station.id].name}의 현재 레시피와 맞지 않습니다.`);
  const outputIndex = emptyIndex();
  if (outputIndex < 0) return setStatus("완성 아이템을 놓을 빈 칸이 필요합니다.");
  state.board[selected] = null;
  station.ingredients = candidate;
  selected = null;
  const completed = recipes.find(([, ingredients]) => sameItems(ingredients, candidate));
  if (completed) {
    state.board[outputIndex] = { kind: "item", id: completed[0] };
    station.ingredients = [];
    setStatus(`${name(completed[0])} 완성!`);
    navigator.vibrate?.([15, 30, 15]);
  } else {
    setStatus(`${name(ingredient)}을(를) 넣었습니다. 재료를 더 넣으세요.`);
  }
  render();
}
function fulfillOrder(orderId) {
  const index = state.orders.findIndex(order => order.id === orderId);
  const order = state.orders[index];
  const boardIndex = state.board.findIndex(slot => slot?.kind === "item" && slot.id === order.item);
  const storageIndex = state.storage.findIndex(slot => slot.id === order.item);
  if (boardIndex >= 0) state.board[boardIndex] = null;
  else if (storageIndex >= 0) state.storage.splice(storageIndex, 1);
  else return setStatus(`${name(order.item)}이(가) 아직 준비되지 않았습니다.`);
  state.coins += order.reward;
  state.orders[index] = freshOrder();
  setStatus(`주문 완료! 코인 ${order.reward}개를 받았습니다.`);
  navigator.vibrate?.([15, 35, 15]);
  render();
}
function renovateStage() {
  if (state.stageIndex >= (DATA.stages?.length || 1) - 1) return setStatus("모든 공개 스테이지를 개조했습니다.");
  const cost = 50 + state.stageIndex * 10;
  if (state.coins < cost) return setStatus(`개조에는 코인 ${cost}개가 필요합니다.`);
  state.coins -= cost;
  state.stars += 5;
  if (state.stars >= 20) {
    state.stageIndex += 1;
    stageIndexForOrders = state.stageIndex;
    state.stars = 0;
    unlockStageContents(state.stageIndex);
    setStatus(`${DATA.stages[state.stageIndex].name} 해금! 식당을 개조했습니다.`);
  } else {
    setStatus(`식당을 개조했습니다. 다음 개조까지 ${20 - state.stars}포인트 남았습니다.`);
  }
  render();
}
function storeSelected() {
  if (selected === null || !isItem(state.board[selected])) return setStatus("보관할 아이템을 먼저 선택하세요.");
  if (state.storage.length >= 8) return setStatus("보관함이 가득 찼습니다.");
  state.storage.push(state.board[selected]);
  state.board[selected] = null;
  selected = null;
  setStatus("보관함에 넣었습니다.");
  render();
}
function restoreFromStorage(index) {
  const target = emptyIndex();
  if (target < 0) return setStatus("보드에 빈 칸이 필요합니다.");
  state.board[target] = state.storage[index];
  state.storage.splice(index, 1);
  setStatus("보드로 되돌렸습니다.");
  render();
}

document.querySelector("#storageButton").addEventListener("click", () => {
  if (selected !== null) storeSelected();
  else document.querySelector("#storagePanel").hidden = false;
});
document.querySelector("#renovateButton")?.addEventListener("click", renovateStage);
document.querySelector("#closeStorage").addEventListener("click", () => { document.querySelector("#storagePanel").hidden = true; });
document.querySelector("#resetButton").addEventListener("click", () => {
  if (confirm("이 기기의 오프라인 진행도를 초기화할까요?")) {
    state = initialState();
    selected = null;
    setStatus("첫 번째 레스토랑을 다시 시작합니다.");
    render();
  }
});
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("sw.js"));
render();

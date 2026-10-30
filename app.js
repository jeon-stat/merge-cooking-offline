/* Personal, offline-only implementation. No account, purchase, ad, or server calls. */
const DATA = window.MERGE_COOKING_DATA;
const COLS = 7;
const ROWS = 9;
const KEY = "merge-cooking-offline-public-ledger-v1";
const STATE_VERSION = 6;
const boardNode = document.querySelector("#board");
const storageNode = document.querySelector("#storage");
const ordersNode = document.querySelector("#orders");
const statusNode = document.querySelector("#status");
const journalStagesNode = document.querySelector("#journalStages");
const catalogContentNode = document.querySelector("#catalogContent");
let selected = null;
let catalogMode = "chains";

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
const contentUnlockLabels = {
  "tourist-bag": "관광객 가방",
  "french-recipe-book": "프랑스 레시피 북",
  "collection-catalog": "컬렉션 카탈로그",
  "japanese-attractions": "일본 명소",
  "japanese-recipe-book": "일본 레시피 북"
};
const chainLabels = { fruit: "과일", nut: "견과", softDrink: "소프트 드링크", coffee: "커피", fish: "어류", shellfish: "패류" };
let stageIndexForOrders = 0;
let dragStart = null;
let suppressNextClick = false;

function finishDrag(clientX, clientY) {
  if (!dragStart) return;
  const from = dragStart.index;
  const moved = Math.hypot(clientX - dragStart.x, clientY - dragStart.y) > 10;
  dragStart = null;
  if (!moved) return;
  const target = document.elementFromPoint(clientX, clientY)?.closest?.(".tile");
  const to = target ? Number(target.dataset.index) : -1;
  if (Number.isInteger(to) && to >= 0 && from !== to) {
    suppressNextClick = true;
    moveOrMerge(from, to);
    render();
  }
}
document.addEventListener("pointerup", event => finishDrag(event.clientX, event.clientY), true);
document.addEventListener("mouseup", event => finishDrag(event.clientX, event.clientY), true);

function emptyBoard() {
  const board = Array(COLS * ROWS).fill(null);
  board[1] = { kind: "generator", id: "fruit-nut-generator", level: 6 };
  board[4] = { kind: "generator", id: "drink-generator", level: 6 };
  board[44] = { kind: "station", id: "juicer", ingredients: [] };
  board[46] = { kind: "station", id: "chef-counter", ingredients: [] };
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
  return { version: STATE_VERSION, level: 35, coins: 101, gems: 20, stars: 0, completedOrders: 0, stageIndex: 0, board: emptyBoard(), storage: [], pendingUnlocks: [], unlockedContent: [], orders: [freshOrder(), freshOrder(), freshOrder()] };
}
function migrateState(saved) {
  if (!saved || !Array.isArray(saved.board) || saved.board.length !== COLS * ROWS) return null;
  const migrated = { ...saved, version: STATE_VERSION, completedOrders: Number.isFinite(saved.completedOrders) ? saved.completedOrders : 0, storage: Array.isArray(saved.storage) ? saved.storage : [], pendingUnlocks: Array.isArray(saved.pendingUnlocks) ? saved.pendingUnlocks : [], unlockedContent: Array.isArray(saved.unlockedContent) ? saved.unlockedContent : [], orders: Array.isArray(saved.orders) ? saved.orders : [] };
  if (!migrated.orders.length) {
    const previousStage = stageIndexForOrders;
    stageIndexForOrders = Number.isInteger(migrated.stageIndex) ? migrated.stageIndex : 0;
    migrated.orders = [freshOrder(), freshOrder(), freshOrder()];
    stageIndexForOrders = previousStage;
  }
  if (migrated.level >= 3) migrated.board = migrated.board.map(slot => slot?.kind === "locked" && slot.level <= 3 ? null : slot);
  if (migrated.level >= 4) migrated.board = migrated.board.map(slot => slot?.kind === "locked" && slot.level <= 4 ? null : slot);
  return migrated;
}
function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    const migrated = migrateState(saved);
    if (migrated) return migrated;
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
  const present = new Set([...state.board, ...state.storage].filter(Boolean).map(slot => slot.id));
  const queue = [...(state.pendingUnlocks || []), ...stage.unlocks];
  state.pendingUnlocks = [];
  for (const unlock of [...new Set(queue)]) {
    if (!state.unlockedContent.includes(unlock)) state.unlockedContent.push(unlock);
    if (present.has(unlock)) continue;
    const isGenerator = Boolean(DATA.generators?.[unlock]);
    const isStation = Boolean(stations[unlock]);
    if (!isGenerator && !isStation) continue;
    const slot = makeUnlockSlot(unlock);
    const target = emptyIndex();
    if (target >= 0) state.board[target] = slot;
    else if (state.storage.length < 8) state.storage.push(slot);
    else state.pendingUnlocks.push(unlock);
    present.add(unlock);
  }
}
function makeUnlockSlot(unlock) {
  if (DATA.generators?.[unlock]) return { kind: "generator", id: unlock, level: generatorSlots[unlock].level };
  if (stations[unlock]) return { kind: "station", id: unlock, ingredients: [] };
  return null;
}
function drainPendingUnlocks() {
  if (!state.pendingUnlocks?.length) return;
  const remaining = [];
  for (const unlock of state.pendingUnlocks) {
    const present = [...state.board, ...state.storage].some(slot => slot?.id === unlock);
    if (present) continue;
    const slot = makeUnlockSlot(unlock);
    if (!slot) continue;
    const target = emptyIndex();
    if (target >= 0) state.board[target] = slot;
    else if (state.storage.length < 8) state.storage.push(slot);
    else remaining.push(unlock);
  }
  state.pendingUnlocks = remaining;
}
function dataItem(item) { return DATA.items[item] || [item, "❔"]; }
function name(item) { return dataItem(item)[0]; }
function art(item) { return dataItem(item)[1]; }
function chainRank(item) { return Object.values(DATA.chains).find(chain => chain.includes(item))?.indexOf(item) + 1 || 1; }
function recipeHint(item) {
  for (const [stationId, recipes] of Object.entries(DATA.recipes || {})) {
    const recipe = recipes.find(([output]) => output === item);
    if (recipe) {
      const ingredients = recipe[1].map(ingredient => name(ingredient)).join(" + ");
      return `${stations[stationId]?.name || stationId}: ${ingredients} 필요`;
    }
  }
  for (const chain of Object.values(DATA.chains || {})) {
    const position = chain.indexOf(item);
    if (position > 0) return `${name(chain[position - 1])} 2개를 병합하세요`;
  }
  const source = Object.values(DATA.generators || []).find(generator => Object.values(generator.outputs || {}).some(output => output.includes(item)));
  return source ? `${source.title}에서 생성됩니다` : "도감에서 조합법을 확인하세요";
}
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
  if (slot.kind === "generator") return `${generatorSlots[slot.id].name} Lv.${slot.level || generatorSlots[slot.id].level}`;
  if (slot.kind === "locked") return `레벨 ${slot.level}에서 잠금 해제`;
  return stations[slot.id].name;
}
function renderSlot(slot, index, inStorage = false) {
  const node = document.querySelector("#itemTemplate").content.firstElementChild.cloneNode(true);
  node.dataset.index = index;
  if (!slot) {
    node.classList.add("empty");
    node.setAttribute("aria-label", "빈 칸");
    node.addEventListener("click", () => {
      if (!inStorage && selected !== null && state.board[selected]) {
        moveOrMerge(selected, index);
        render();
      }
    });
    return node;
  }
  node.setAttribute("aria-label", tileLabel(slot));
  if (slot.kind === "item") {
    node.classList.add("item");
    node.innerHTML = `<span class="item-art">${art(slot.id)}</span><span class="item-name">${name(slot.id)}</span><span class="item-level">Lv.${chainRank(slot.id)}</span>`;
  } else if (slot.kind === "generator") {
    const generator = generatorSlots[slot.id];
    node.classList.add("generator-tile", slot.id);
    node.innerHTML = `<span class="station-art">${generator.art}</span><span class="item-name">${generator.name}</span><span class="item-level">Lv.${slot.level || generator.level}</span>`;
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
    if (inStorage || !slot || !["item", "generator"].includes(slot.kind)) return;
    dragStart = { index, x: event.clientX, y: event.clientY };
  });
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
    node.title = ready ? `${name(order.item)} 납품` : `${name(order.item)} · ${recipeHint(order.item)}`;
    node.setAttribute("aria-label", node.title);
    node.innerHTML = `<span class="order-art">${art(order.item)}</span><span class="order-name">${name(order.item)}</span><span class="order-reward">+${order.reward} 🪙</span><span class="customer">${order.face}</span>`;
    node.addEventListener("click", () => fulfillOrder(order.id));
    return node;
  }));
}
function renderJournal() {
  const stages = DATA.stages || [];
  const current = stages[state.stageIndex] || DATA.firstStage;
  document.querySelector("#journalCount")?.replaceChildren(document.createTextNode(`${Math.min(state.completedOrders || 0, 35)}/35`));
  const pending = state.pendingUnlocks?.length ? ` · 대기 해금 ${state.pendingUnlocks.length}` : "";
  document.querySelector("#journalSummary")?.replaceChildren(document.createTextNode(`${current.name} · ${current.country || ""} · ${current.focus || ""}${pending}`));
  const unlocked = (state.unlockedContent || []).map(key => contentUnlockLabels[key] || generatorSlots[key]?.name || stations[key]?.name || key);
  document.querySelector("#journalUnlocks")?.replaceChildren(document.createTextNode(unlocked.length ? `해금 내용: ${unlocked.join(" · ")}` : "해금 내용 없음"));
  if (!journalStagesNode) return;
  journalStagesNode.replaceChildren(...stages.map((stage, index) => {
    const node = document.createElement("div");
    node.className = `journal-stage${index === state.stageIndex ? " current" : ""}${index < state.stageIndex ? " complete" : ""}`;
    const stateLabel = index < state.stageIndex ? "완료" : index === state.stageIndex ? "진행 중" : "잠김";
    node.innerHTML = `<strong>${index + 1}. ${stage.name}</strong><span>${stage.country || ""} · ${stage.focus || ""}</span><b>${stateLabel}</b>`;
    return node;
  }));
}
function renderCatalog() {
  if (!catalogContentNode) return;
  if (catalogMode === "chains") {
    catalogContentNode.replaceChildren(...Object.entries(DATA.chains).map(([key, chain]) => {
      const card = document.createElement("article");
      card.className = "catalog-card";
      const source = Object.entries(DATA.generators).find(([, generator]) => Object.values(generator.outputs).some(output => output.some(item => chain.includes(item))));
      card.innerHTML = `<strong>${chainLabels[key] || key}</strong><span class="catalog-source">${source ? source[1].title : "병합 체인"}</span><p>${chain.map(item => `${art(item)} ${name(item)}`).join(" → ")}</p>`;
      return card;
    }));
    return;
  }
  catalogContentNode.replaceChildren(...Object.entries(DATA.recipes).map(([stationId, recipes]) => {
    const unlocked = state.unlockedContent?.includes(stationId) || state.board.some(slot => slot?.id === stationId) || state.storage.some(slot => slot?.id === stationId);
    const card = document.createElement("article");
    card.className = `catalog-card recipe-card${unlocked ? "" : " locked"}`;
    const stationName = stations[stationId]?.name || stationId;
    const rows = recipes.map(([output, ingredients]) => `<li><strong>${art(output)} ${name(output)}</strong><span>${ingredients.map(item => `${art(item)} ${name(item)}`).join(" + ")}</span></li>`).join("");
    card.innerHTML = `<strong>${unlocked ? "🍳" : "🔒"} ${stationName}</strong>${unlocked ? `<ul>${rows}</ul>` : "<p>현재 스테이지에서 잠긴 조리기구입니다.</p>"}`;
    return card;
  }));
}
function render() {
  drainPendingUnlocks();
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
  renderJournal();
  if (!document.querySelector("#catalogPanel")?.hidden) renderCatalog();
  save();
}
function tapSlot(index) {
  const slot = state.board[index];
  if (!slot) {
    if (selected !== null && state.board[selected]) {
      moveOrMerge(selected, index);
      render();
    }
    return;
  }
  if (slot.kind === "generator") return produce(slot.id, index);
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
  if (from === to || !source) return;
  if (!target) {
    state.board[to] = source;
    state.board[from] = null;
    setStatus(`${source.kind === "item" ? name(source.id) : generatorSlots[source.id].name}을(를) 옮겼습니다.`);
  } else if (source.kind === "generator" && target.kind === "generator" && source.id === target.id && (source.level || 1) === (target.level || 1)) {
    const nextLevel = (source.level || 1) + 1;
    state.board[to] = { kind: "generator", id: source.id, level: nextLevel };
    state.board[from] = null;
    setStatus(`${generatorSlots[source.id].name} Lv.${source.level} + Lv.${target.level} → Lv.${nextLevel}!`);
    navigator.vibrate?.(20);
  } else if (!isItem(source)) {
    setStatus("같은 생성기 두 개를 드래그하면 레벨이 올라갑니다.");
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
function produce(generatorId, sourceIndex) {
  const target = emptyIndex();
  if (target < 0) return setStatus("보드가 가득 찼습니다. 아이템을 병합하거나 보관하세요.");
  const generator = DATA.generators[generatorId];
  const level = state.board[sourceIndex]?.level || generatorSlots[generatorId].level;
  const availableLevels = Object.keys(generator.outputs).map(Number).filter(value => value <= level).sort((a, b) => b - a);
  const output = generator.outputs[level] || generator.outputs[availableLevels[0]];
  if (!output?.length) return setStatus(`${generator.title}의 공개 출력 데이터가 없습니다.`);
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
  const outputIndex = emptyIndex() >= 0 ? emptyIndex() : selected;
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
  if (!order) return setStatus("해당 주문을 찾을 수 없습니다. 주문 목록을 새로 고쳤습니다.");
  const boardIndex = state.board.findIndex(slot => slot?.kind === "item" && slot.id === order.item);
  const storageIndex = state.storage.findIndex(slot => slot.id === order.item);
  if (boardIndex >= 0) state.board[boardIndex] = null;
  else if (storageIndex >= 0) state.storage.splice(storageIndex, 1);
  else return setStatus(`${name(order.item)}이(가) 아직 준비되지 않았습니다. ${recipeHint(order.item)}`);
  state.coins += order.reward;
  state.completedOrders = Math.min(35, (state.completedOrders || 0) + 1);
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
document.querySelector("#journalButton")?.addEventListener("click", () => {
  const panel = document.querySelector("#journalPanel");
  if (panel) panel.hidden = false;
  renderJournal();
});
document.querySelector("#closeJournal")?.addEventListener("click", () => { document.querySelector("#journalPanel").hidden = true; });
document.querySelector("#openCatalog")?.addEventListener("click", () => {
  document.querySelector("#journalPanel").hidden = true;
  document.querySelector("#catalogPanel").hidden = false;
  renderCatalog();
});
document.querySelector("#closeCatalog")?.addEventListener("click", () => { document.querySelector("#catalogPanel").hidden = true; });
document.querySelector("#catalogChains")?.addEventListener("click", () => {
  catalogMode = "chains";
  document.querySelector("#catalogChains").classList.add("active");
  document.querySelector("#catalogRecipes").classList.remove("active");
  renderCatalog();
});
document.querySelector("#catalogRecipes")?.addEventListener("click", () => {
  catalogMode = "recipes";
  document.querySelector("#catalogRecipes").classList.add("active");
  document.querySelector("#catalogChains").classList.remove("active");
  renderCatalog();
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

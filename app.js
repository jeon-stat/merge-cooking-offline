/* Personal offline build. Game state stays only in this browser's localStorage. */
const WIDTH = 7;
const HEIGHT = 6;
const KEY = "chefs-table-offline-v1";

const ITEMS = {
  berry: ["🍒", "체리"], berry2: ["🍓", "베리 접시"], berry3: ["🍰", "베리 타르트"], berry4: ["🥞", "브런치 팬케이크"],
  egg: ["🥚", "달걀"], egg2: ["🧈", "버터 달걀"], egg3: ["🍳", "계란 프라이"], egg4: ["🥚", "에그 베네딕트"],
  leaf: ["🥬", "채소"], leaf2: ["🥗", "샐러드"], leaf3: ["🥪", "클럽 샌드위치"],
  coffee: ["☕", "커피콩"], coffee2: ["🫘", "갈아낸 원두"], coffee3: ["☕", "라테"],
  toast: ["🍞", "식빵"], toast2: ["🥐", "구운 빵"], toast3: ["🍞", "브런치 토스트"]
};
const NEXT = { berry: "berry2", berry2: "berry3", berry3: "berry4", egg: "egg2", egg2: "egg3", egg3: "egg4", leaf: "leaf2", leaf2: "leaf3", coffee: "coffee2", coffee2: "coffee3", toast: "toast2", toast2: "toast3" };
const GENERATORS = { fruit: ["berry", "berry", "leaf"], pantry: ["egg", "egg", "toast"], kitchen: ["coffee", "egg", "toast"] };
const ORDER_POOL = [
  { item: "berry3", reward: 12, face: "👩🏻" }, { item: "egg3", reward: 13, face: "👨🏽" }, { item: "leaf2", reward: 11, face: "👩🏼" },
  { item: "coffee3", reward: 16, face: "👨🏻" }, { item: "toast2", reward: 10, face: "👵🏻" }, { item: "berry4", reward: 30, face: "🧑🏾" },
  { item: "egg4", reward: 32, face: "👩🏾" }, { item: "leaf3", reward: 25, face: "🧔🏻" }, { item: "toast3", reward: 20, face: "👩🏽" }
];

const boardNode = document.querySelector("#board");
const storageNode = document.querySelector("#storage");
const ordersNode = document.querySelector("#orders");
const statusNode = document.querySelector("#status");
let selected = null;
let dragIndex = null;

function emptyState() {
  const board = Array(WIDTH * HEIGHT).fill(null);
  ["berry", "berry", "egg", "egg", "leaf", "toast", "coffee"].forEach((item, i) => board[[9, 10, 15, 16, 22, 28, 30][i]] = item);
  return { board, storage: [], coins: 0, renovation: 0, orders: [newOrder(), newOrder(), newOrder()] };
}
function load() { try { const parsed = JSON.parse(localStorage.getItem(KEY)); return parsed?.board?.length === WIDTH * HEIGHT ? parsed : emptyState(); } catch { return emptyState(); } }
let state = load();
function save() { localStorage.setItem(KEY, JSON.stringify(state)); }
function random(list) { return list[Math.floor(Math.random() * list.length)]; }
function newOrder() { return { ...random(ORDER_POOL), id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}` }; }
function setStatus(message) { statusNode.textContent = message; }
function art(item) { return ITEMS[item]?.[0] ?? "❔"; }
function label(item) { return ITEMS[item]?.[1] ?? "알 수 없는 재료"; }

function makeTile(item, index, storage = false) {
  const node = document.querySelector("#itemTemplate").content.firstElementChild.cloneNode(true);
  if (!item) { node.classList.add("empty"); node.disabled = true; node.setAttribute("aria-label", "빈 칸"); return node; }
  node.dataset.item = item;
  node.dataset.index = index;
  node.innerHTML = `<span class="item-art">${art(item)}</span><span class="item-name">${label(item)}</span>`;
  node.setAttribute("aria-label", `${label(item)}${storage ? ", 보관함" : ""}`);
  node.addEventListener("click", () => storage ? restoreFromStorage(index) : selectTile(index));
  if (!storage) {
    node.draggable = true;
    node.addEventListener("dragstart", event => { dragIndex = index; event.dataTransfer?.setData("text/plain", String(index)); });
    node.addEventListener("dragover", event => event.preventDefault());
    node.addEventListener("drop", event => { event.preventDefault(); const from = dragIndex ?? Number(event.dataTransfer?.getData("text/plain")); if (Number.isInteger(from)) moveOrMerge(from, index); });
    let start = null;
    node.addEventListener("pointerdown", event => { start = { x: event.clientX, y: event.clientY }; });
    node.addEventListener("pointerup", event => {
      if (!start) return;
      const element = document.elementFromPoint(event.clientX, event.clientY)?.closest(".tile[data-index]");
      if (element && Math.hypot(event.clientX - start.x, event.clientY - start.y) > 18) moveOrMerge(index, Number(element.dataset.index));
      start = null;
    });
  }
  return node;
}
function render() {
  document.querySelector("#coins").value = state.coins;
  document.querySelector("#coins").textContent = state.coins;
  document.querySelector("#storageCount").textContent = state.storage.length;
  document.querySelector("#renovationCost").textContent = 50 + state.renovation * 25;
  boardNode.replaceChildren(...state.board.map((item, index) => makeTile(item, index)));
  boardNode.querySelector(`[data-index="${selected}"]`)?.classList.add("selected");
  storageNode.replaceChildren(...state.storage.map((item, index) => makeTile(item, index, true)));
  ordersNode.replaceChildren(...state.orders.map(order => {
    const ready = state.board.includes(order.item) || state.storage.includes(order.item);
    const node = document.createElement("button");
    node.type = "button"; node.className = `order${ready ? " ready" : ""}`;
    node.innerHTML = `<span class="order-art">${art(order.item)}</span><span class="order-name">${label(order.item)}</span><span class="order-reward">+${order.reward} 🪙</span><span class="customer">${order.face}</span>`;
    node.addEventListener("click", () => fulfillOrder(order.id));
    return node;
  }));
  save();
}
function selectTile(index) {
  if (selected === null) { selected = index; setStatus(`${label(state.board[index])} 선택됨 — 같은 아이템을 탭하세요.`); }
  else if (selected === index) { selected = null; setStatus("선택을 해제했습니다."); }
  else { moveOrMerge(selected, index); selected = null; }
  render();
}
function moveOrMerge(from, to) {
  if (from === to || !state.board[from]) return;
  const a = state.board[from], b = state.board[to];
  if (!b) { state.board[to] = a; state.board[from] = null; setStatus(`${label(a)}을(를) 옮겼습니다.`); }
  else if (a === b && NEXT[a]) { state.board[to] = NEXT[a]; state.board[from] = null; setStatus(`${label(a)} + ${label(b)} → ${label(NEXT[a])}!`); navigator.vibrate?.(15); }
  else setStatus("같은 아이템끼리만 병합할 수 있습니다.");
  selected = null; render();
}
function produce(type) {
  const index = state.board.findIndex(item => item === null);
  if (index < 0) return setStatus("보드가 가득 찼습니다. 아이템을 병합하거나 냉장 보관하세요.");
  const item = random(GENERATORS[type]); state.board[index] = item; setStatus(`${label(item)}이(가) 나왔습니다.`); render();
}
function fulfillOrder(id) {
  const orderIndex = state.orders.findIndex(order => order.id === id);
  const order = state.orders[orderIndex];
  const boardIndex = state.board.findIndex(item => item === order.item);
  const storageIndex = state.storage.findIndex(item => item === order.item);
  if (boardIndex >= 0) state.board[boardIndex] = null;
  else if (storageIndex >= 0) state.storage.splice(storageIndex, 1);
  else return setStatus(`${label(order.item)}이(가) 아직 준비되지 않았습니다.`);
  state.coins += order.reward; state.orders[orderIndex] = newOrder();
  setStatus(`주문 완료! 코인 ${order.reward}개를 받았습니다.`); navigator.vibrate?.([15, 35, 15]); render();
}
function storeSelected() {
  if (selected === null || !state.board[selected]) return setStatus("보관할 아이템을 먼저 선택하세요.");
  if (state.storage.length >= 8) return setStatus("냉장 보관함이 가득 찼습니다.");
  state.storage.push(state.board[selected]); state.board[selected] = null; selected = null; setStatus("냉장 보관함에 넣었습니다."); render();
}
function restoreFromStorage(index) {
  const target = state.board.findIndex(item => item === null);
  if (target < 0) return setStatus("보드에 빈 칸이 필요합니다.");
  state.board[target] = state.storage[index]; state.storage.splice(index, 1); setStatus("보드로 되돌렸습니다."); render();
}
function renovate() {
  const cost = 50 + state.renovation * 25;
  if (state.coins < cost) return setStatus(`개조에는 코인 ${cost}개가 필요합니다.`);
  state.coins -= cost; state.renovation += 1; setStatus(`식당을 ${state.renovation}단계 개조했습니다!`); render();
}
document.querySelectorAll("[data-generator]").forEach(button => button.addEventListener("click", () => produce(button.dataset.generator)));
document.querySelector("#storageButton").addEventListener("click", () => { if (selected !== null) storeSelected(); else document.querySelector("#storagePanel").hidden = false; });
document.querySelector("#closeStorage").addEventListener("click", () => document.querySelector("#storagePanel").hidden = true);
document.querySelector("#renovateButton").addEventListener("click", renovate);
document.querySelector("#resetButton").addEventListener("click", () => { if (confirm("모든 오프라인 진행도를 초기화할까요?")) { state = emptyState(); selected = null; setStatus("새 게임을 시작했습니다."); render(); } });
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("sw.js"));
render();

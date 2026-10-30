/*
 * Public-source game data ledger.
 * `source` is deliberately retained beside every table so a value can be
 * audited and replaced rather than silently guessed.
 *
 * Confirmed source pages:
 * - https://w.atwiki.jp/mergecooking/pages/17.html (fruit & nut chains)
 * - https://w.atwiki.jp/mergecooking/pages/32.html (juicer recipes)
 * - https://w.atwiki.jp/merge_cooking/pages/16.html (drink generator outputs)
 * - https://w.atwiki.jp/mergecooking/pages/30.html (fruit & nut generator outputs)
 */
window.MERGE_COOKING_DATA = Object.freeze({
  target: Object.freeze({
    name: "Merge Cooking: Theme Restaurant",
    baseline: "iPad public build observed 2026-10-30",
    intentionalDifferences: Object.freeze(["infinite energy", "no generator cooldown", "no ads", "no purchases", "no account or live events"])
  }),
  sources: Object.freeze({
    fruitNut: "https://w.atwiki.jp/mergecooking/pages/17.html",
    juicer: "https://w.atwiki.jp/mergecooking/pages/32.html",
    drinkGenerator: "https://w.atwiki.jp/merge_cooking/pages/16.html",
    fruitGenerator: "https://w.atwiki.jp/merge_cooking/pages/30.html",
    stage: "https://w.atwiki.jp/mergecooking/pages/37.html",
    video: "https://www.youtube.com/watch?v=YCke1icPTKU"
  }),
  firstStage: Object.freeze({
    id: "fruit-juice-bar",
    name: "Fruit Juice Bar",
    unlocks: Object.freeze(["drink-generator", "fruit-nut-generator", "juicer", "chef-counter"]),
    source: "https://w.atwiki.jp/mergecooking/pages/37.html"
  }),
  chains: Object.freeze({
    fruit: Object.freeze(["cherry", "strawberry", "apple", "banana", "lemon", "coconut", "orange", "pomegranate", "pear", "mango", "pineapple", "watermelon"]),
    nut: Object.freeze(["sesame", "peanut", "pistachio", "cacao-bean", "almond", "pecan", "walnut", "cashew", "date", "pine-nut"]),
    softDrink: Object.freeze(["water", "sparkling-water", "cola", "soda", "orange-soda", "grape-soda", "black-tea", "green-tea", "herbal-tea", "yogurt-drink", "bubble-tea", "energy-drink"]),
    coffee: Object.freeze(["coffee-bean", "ground-coffee", "cup-coffee", "mug-coffee", "takeaway-coffee", "cold-brew", "drip-coffee", "french-press", "moka-pot", "siphon-coffee"])
  }),
  items: Object.freeze({
    cherry: ["체리", "🍒"], strawberry: ["딸기", "🍓"], apple: ["사과", "🍎"], banana: ["바나나", "🍌"], lemon: ["레몬", "🍋"], coconut: ["코코넛", "🥥"], orange: ["오렌지", "🍊"], pomegranate: ["석류", "🫐"], pear: ["배", "🍐"], mango: ["망고", "🥭"], pineapple: ["파인애플", "🍍"], watermelon: ["수박", "🍉"],
    sesame: ["참깨", "🫘"], peanut: ["땅콩", "🥜"], pistachio: ["피스타치오", "🫛"], "cacao-bean": ["카카오콩", "🫘"], almond: ["아몬드", "🥜"], pecan: ["피칸", "🌰"], walnut: ["호두", "🌰"], cashew: ["캐슈넛", "🥜"], date: ["대추야자", "🫒"], "pine-nut": ["잣", "🫘"],
    water: ["물", "💧"], "sparkling-water": ["탄산수", "🫧"], cola: ["콜라", "🥤"], soda: ["소다", "🥤"], "orange-soda": ["오렌지 소다", "🥤"], "grape-soda": ["포도 소다", "🥤"], "black-tea": ["홍차", "🫖"], "green-tea": ["녹차", "🍵"], "herbal-tea": ["허브티", "🫖"], "yogurt-drink": ["유산균 음료", "🧃"], "bubble-tea": ["버블티", "🧋"], "energy-drink": ["에너지 드링크", "⚡"],
    "coffee-bean": ["커피콩", "🫘"], "ground-coffee": ["분쇄 커피", "☕"], "cup-coffee": ["컵 커피", "☕"], "mug-coffee": ["머그 커피", "☕"], "takeaway-coffee": ["테이크아웃 커피", "🥤"], "cold-brew": ["콜드브루", "🧊"], "drip-coffee": ["핸드드립 커피", "☕"], "french-press": ["프렌치프레스 커피", "☕"], "moka-pot": ["모카포트 커피", "☕"], "siphon-coffee": ["사이펀 커피", "☕"],
    "cherry-juice": ["체리 주스", "🧃"], "strawberry-juice": ["딸기 주스", "🧃"], "apple-juice": ["사과 주스", "🧃"], "banana-juice": ["바나나 주스", "🧃"], "lemon-juice": ["레몬 주스", "🧃"], "orange-juice": ["오렌지 주스", "🧃"], "pomegranate-juice": ["석류 주스", "🧃"], "pear-juice": ["배 주스", "🧃"], "mango-juice": ["망고 주스", "🧃"], "pineapple-juice": ["파인애플 주스", "🧃"], "watermelon-juice": ["수박 주스", "🧃"],
    "strawberry-apple-juice": ["딸기 사과 주스", "🧃"], "strawberry-lemon-juice": ["딸기 레몬 주스", "🧃"], "banana-orange-juice": ["바나나 오렌지 주스", "🧃"], "apple-lemon-juice": ["사과 레몬 주스", "🧃"], "pear-apple-banana-juice": ["배 사과 바나나 주스", "🧃"]
  }),
  generators: Object.freeze({
    "drink-generator": Object.freeze({
      title: "음료 생성기", artwork: "🥤", source: "https://w.atwiki.jp/merge_cooking/pages/16.html",
      outputs: Object.freeze({ 4: ["water", "coffee-bean", "ice-cube"], 5: ["water", "sparkling-water", "coffee-bean", "ice-cube"], 6: ["water", "sparkling-water", "cola", "coffee-bean", "ice-cube"] })
    }),
    "fruit-nut-generator": Object.freeze({
      title: "과일 & 견과 생성기", artwork: "🍓", source: "https://w.atwiki.jp/merge_cooking/pages/30.html",
      outputs: Object.freeze({ 4: ["cherry", "sesame"], 5: ["cherry", "strawberry", "sesame"], 6: ["cherry", "strawberry", "apple", "sesame"] })
    })
  }),
  recipes: Object.freeze({
    juicer: Object.freeze([
      ["cherry-juice", ["cherry"]], ["strawberry-juice", ["strawberry"]], ["apple-juice", ["apple"]], ["banana-juice", ["banana"]], ["lemon-juice", ["lemon"]], ["orange-juice", ["orange"]], ["pomegranate-juice", ["pomegranate"]], ["pear-juice", ["pear"]], ["mango-juice", ["mango"]], ["pineapple-juice", ["pineapple"]], ["watermelon-juice", ["watermelon"]],
      ["strawberry-apple-juice", ["strawberry", "apple"]], ["strawberry-lemon-juice", ["strawberry", "lemon"]], ["banana-orange-juice", ["banana", "orange"]], ["apple-lemon-juice", ["apple", "lemon"]], ["pear-apple-banana-juice", ["pear", "apple", "banana"]]
    ])
  })
});

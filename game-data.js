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
 * - https://w.atwiki.jp/mergecooking/pages/33.html (oven recipes)
 * - https://w.atwiki.jp/mergecooking/pages/35.html (shaker recipes)
 * - https://w.atwiki.jp/mergecooking/pages/30.html (cooking pot recipes)
 */
/* Confirmed chain extensions are kept beside their public-source links below. */
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
    oven: "https://w.atwiki.jp/mergecooking/pages/33.html",
    shaker: "https://w.atwiki.jp/mergecooking/pages/35.html",
    pot: "https://w.atwiki.jp/mergecooking/pages/30.html",
    ship: "https://w.atwiki.jp/mergecooking/pages/34.html",
    proteinGenerator: "https://w.atwiki.jp/merge_cooking/pages/21.html",
    poultry: "https://w.atwiki.jp/merge_cooking/pages/22.html",
    vegetableGenerator: "https://w.atwiki.jp/merge_cooking/pages/27.html",
    vegetables: "https://w.atwiki.jp/mergecooking/pages/24.html",
    video: "https://www.youtube.com/watch?v=YCke1icPTKU"
  }),
  firstStage: Object.freeze({
    id: "fruit-juice-bar",
    name: "Fruit Juice Bar",
    unlocks: Object.freeze(["drink-generator", "fruit-nut-generator", "juicer", "chef-counter"]),
    source: "https://w.atwiki.jp/mergecooking/pages/37.html"
  }),
  stages: Object.freeze([
    Object.freeze({ id: "fruit-juice-bar", name: "Fruity Juice Bar", country: "미국", unlocks: Object.freeze(["drink-generator", "fruit-nut-generator", "juicer", "chef-counter"]), focus: "fruit juice, coffee", source: "https://w.atwiki.jp/mergecooking/pages/37.html" }),
    Object.freeze({ id: "takeout-paradise", name: "Takeout Paradise", country: "미국", unlocks: Object.freeze(["protein-generator", "vegetable-generator", "ship", "pan", "grill", "bbq-recipe-book", "glass-bowl"]), focus: "grilled vegetables, meat, seafood, salads" }),
    Object.freeze({ id: "incrabible-grill", name: "inCRABible Grill", country: "미국", unlocks: Object.freeze(["grain-generator", "oven", "tourist-bag"]), focus: "burgers, hot dogs, tarts" }),
    Object.freeze({ id: "food-express", name: "Food Express", country: "미국", unlocks: Object.freeze([]), focus: "burgers, hot dogs, salads, fried food" }),
    Object.freeze({ id: "epic-chicken", name: "Epic Chicken", country: "미국", unlocks: Object.freeze([]), focus: "fried chicken, beef" }),
    Object.freeze({ id: "taste-of-aloha", name: "Taste of Aloha", country: "미국", unlocks: Object.freeze(["alcohol-generator", "shaker"]), focus: "mixed drinks, tropical fruit" }),
    Object.freeze({ id: "wild-west-saloon", name: "Wild West Saloon", country: "미국", unlocks: Object.freeze([]), focus: "greens, mushrooms, wine" }),
    Object.freeze({ id: "bon-appetit", name: "Bon Appétit Restaurant", country: "프랑스", unlocks: Object.freeze(["french-recipe-book", "collection-catalog", "pot"]), focus: "French recipes" }),
    Object.freeze({ id: "dreaming-macaron", name: "Dreaming Macaron", country: "프랑스", unlocks: Object.freeze(["french-recipe-book"]), focus: "French desserts" }),
    Object.freeze({ id: "little-marseille", name: "Little Marseille", country: "프랑스", unlocks: Object.freeze([]), focus: "French seafood" }),
    Object.freeze({ id: "izakaya", name: "Izakaya", country: "일본", unlocks: Object.freeze(["japanese-attractions", "japanese-recipe-book"]), focus: "Japanese dishes" }),
    Object.freeze({ id: "sakura-wagashi", name: "Sakura & Wagashi", country: "일본", unlocks: Object.freeze([]), focus: "Japanese sweets" })
  ]),
  chains: Object.freeze({
    fruit: Object.freeze(["cherry", "strawberry", "apple", "banana", "lemon", "coconut", "orange", "pomegranate", "pear", "mango", "pineapple", "watermelon"]),
    nut: Object.freeze(["sesame", "peanut", "pistachio", "cacao-bean", "almond", "pecan", "walnut", "cashew", "date", "pine-nut"]),
    softDrink: Object.freeze(["water", "sparkling-water", "cola", "soda", "orange-soda", "grape-soda", "black-tea", "green-tea", "herbal-tea", "yogurt-drink", "bubble-tea", "energy-drink"]),
    coffee: Object.freeze(["coffee-bean", "ground-coffee", "cup-coffee", "mug-coffee", "takeaway-coffee", "cold-brew", "drip-coffee", "french-press", "moka-pot", "siphon-coffee"]),
    poultry: Object.freeze(["egg", "chicken-wing", "chicken-drumstick", "chicken-breast", "whole-chicken", "duck-breast", "whole-duck", "goose", "quail", "turkey"]),
    vegetable: Object.freeze(["tomato", "cucumber", "asparagus", "carrot", "onion", "bell-pepper", "eggplant", "potato", "okra", "corn", "pea", "cherry-tomato"]),
    leafy: Object.freeze(["lettuce", "cabbage", "broccoli", "red-cabbage", "cauliflower", "arugula", "spinach", "beet", "mushroom"]),
    fish: Object.freeze(["mackerel", "squid", "tilapia", "eel", "cod", "salmon", "flounder", "tuna", "mullet", "bass", "sea-bream"]),
    shellfish: Object.freeze(["clam", "mussel", "oyster", "shrimp", "crab", "scallop", "escargot", "lobster", "king-crab", "abalone"])
  }),
  items: Object.freeze(Object.assign({
    cherry: ["체리", "🍒"], strawberry: ["딸기", "🍓"], apple: ["사과", "🍎"], banana: ["바나나", "🍌"], lemon: ["레몬", "🍋"], coconut: ["코코넛", "🥥"], orange: ["오렌지", "🍊"], pomegranate: ["석류", "🫐"], pear: ["배", "🍐"], mango: ["망고", "🥭"], pineapple: ["파인애플", "🍍"], watermelon: ["수박", "🍉"],
    sesame: ["참깨", "🫘"], peanut: ["땅콩", "🥜"], pistachio: ["피스타치오", "🫛"], "cacao-bean": ["카카오콩", "🫘"], almond: ["아몬드", "🥜"], pecan: ["피칸", "🌰"], walnut: ["호두", "🌰"], cashew: ["캐슈넛", "🥜"], date: ["대추야자", "🫒"], "pine-nut": ["잣", "🫘"],
    water: ["물", "💧"], "sparkling-water": ["탄산수", "🫧"], cola: ["콜라", "🥤"], soda: ["소다", "🥤"], "orange-soda": ["오렌지 소다", "🥤"], "grape-soda": ["포도 소다", "🥤"], "black-tea": ["홍차", "🫖"], "green-tea": ["녹차", "🍵"], "herbal-tea": ["허브티", "🫖"], "yogurt-drink": ["유산균 음료", "🧃"], "bubble-tea": ["버블티", "🧋"], "energy-drink": ["에너지 드링크", "⚡"], "ice-cube": ["얼음", "🧊"],
    "coffee-bean": ["커피콩", "🫘"], "ground-coffee": ["분쇄 커피", "☕"], "cup-coffee": ["컵 커피", "☕"], "mug-coffee": ["머그 커피", "☕"], "takeaway-coffee": ["테이크아웃 커피", "🥤"], "cold-brew": ["콜드브루", "🧊"], "drip-coffee": ["핸드드립 커피", "☕"], "french-press": ["프렌치프레스 커피", "☕"], "moka-pot": ["모카포트 커피", "☕"], "siphon-coffee": ["사이펀 커피", "☕"],
    "cherry-juice": ["체리 주스", "🧃"], "strawberry-juice": ["딸기 주스", "🧃"], "apple-juice": ["사과 주스", "🧃"], "banana-juice": ["바나나 주스", "🧃"], "lemon-juice": ["레몬 주스", "🧃"], "orange-juice": ["오렌지 주스", "🧃"], "pomegranate-juice": ["석류 주스", "🧃"], "pear-juice": ["배 주스", "🧃"], "mango-juice": ["망고 주스", "🧃"], "pineapple-juice": ["파인애플 주스", "🧃"], "watermelon-juice": ["수박 주스", "🧃"],
    "strawberry-apple-juice": ["딸기 사과 주스", "🧃"], "strawberry-lemon-juice": ["딸기 레몬 주스", "🧃"], "banana-orange-juice": ["바나나 오렌지 주스", "🧃"], "apple-lemon-juice": ["사과 레몬 주스", "🧃"], "pear-apple-banana-juice": ["배 사과 바나나 주스", "🧃"],
    "chicken-wing": ["닭날개", "🍗"], "chicken-drumstick": ["닭다리", "🍗"], "chicken-breast": ["닭가슴살", "🍗"], "pork-chop": ["돼지 갈비", "🥩"], "beef-cube": ["소고기 큐브", "🥩"], "spinach": ["시금치", "🥬"], "broccoli": ["브로콜리", "🥦"], "carrot": ["당근", "🥕"], "potato": ["감자", "🥔"], "wheat-flour": ["밀가루", "🌾"], "bread-dough": ["빵 반죽", "🍞"], "toast-dough": ["토스트 반죽", "🍞"], "pie-crust": ["파이 크러스트", "🥧"], "grape": ["포도", "🍇"], "wine": ["와인", "🍷"], "tangerine-wine": ["귤 와인", "🍷"], "rum": ["럼", "🍹"], "brandy": ["브랜디", "🥃"], "gin": ["진", "🍸"], "champagne": ["샴페인", "🍾"], "vodka": ["보드카", "🍸"], "absinthe": ["압생트", "🥃"], "whiskey": ["위스키", "🥃"], "mackerel": ["고등어", "🐟"], "squid": ["오징어", "🦑"], "tilapia": ["틸라피아", "🐟"], "eel": ["장어", "🐟"], "cod": ["대구", "🐟"], "salmon": ["연어", "🐟"], "flounder": ["광어", "🐟"], "fish": ["생선", "🐟"], "mullet": ["숭어", "🐟"], "bass": ["농어", "🐟"], "sea-bream": ["도미", "🐟"], "clam": ["조개", "🦪"], "mussel": ["홍합", "🦪"], "oyster": ["굴", "🦪"], "shrimp": ["새우", "🦐"], "crab": ["게", "🦀"], "scallop": ["가리비", "🦪"], "escargot": ["달팽이", "🐌"], "lobster": ["랍스터", "🦞"], "king-crab": ["킹크랩", "🦀"], "abalone": ["전복", "🐚"], "tuna": ["참치", "🐟"], "shellfish": ["조개류", "🦪"], "asparagus": ["아스파라거스", "🥬"], "ham": ["햄", "🍖"], "patty": ["패티", "🍔"], "beef-rib": ["소갈비", "🥩"], "burger-bun": ["버거 번", "🍔"], "hot-dog-bun": ["핫도그 번", "🌭"], "tomato": ["토마토", "🍅"], "cucumber": ["오이", "🥒"], "lettuce": ["양상추", "🥬"], "banana-split": ["바나나 스플릿", "🍨"], "fried-chicken": ["프라이드 치킨", "🍗"], "potato-salad": ["감자 샐러드", "🥗"], "fried-asparagus": ["구운 아스파라거스", "🥬"], "fried-broccoli": ["구운 브로콜리", "🥦"], "fried-ham": ["구운 햄", "🍖"], "potato-strips": ["감자 스트립", "🍟"], "grilled-chicken-wing": ["구운 닭날개", "🍗"], "grilled-chicken-breast": ["구운 닭가슴살", "🍗"], "grilled-patty": ["구운 패티", "🍔"], "grilled-beef-ribs": ["구운 소갈비", "🥩"], "baked-burger-bun": ["구운 버거 번", "🍔"], "baked-hot-dog-bun": ["구운 핫도그 번", "🌭"], "apple-pie": ["사과 파이", "🥧"], "banana-pie": ["바나나 파이", "🥧"], "toast": ["토스트", "🍞"], "tomato-slice": ["토마토 슬라이스", "🍅"], "cucumber-slice": ["오이 슬라이스", "🥒"], "pork-burger": ["포크 버거", "🍔"], "pot-au-feu": ["포토푀", "🍲"], "bouillabaisse": ["부야베스", "🍲"], "mimosa": ["미모사", "🍹"], "pina-colada": ["피냐 콜라다", "🍹"], "gin-rickey": ["진 리키", "🍸"], "bloody-mary": ["블러디 메리", "🍹"], "carimocho": ["칼리모초", "🍷"]
  }, {
    egg: ["달걀", "🥚"], "whole-chicken": ["통닭", "🍗"], "duck-breast": ["오리 가슴살", "🍗"], "whole-duck": ["통오리", "🦆"], goose: ["거위", "🪿"], quail: ["메추리", "🐦"], turkey: ["칠면조", "🦃"],
    onion: ["양파", "🧅"], "bell-pepper": ["피망", "🫑"], eggplant: ["가지", "🍆"], okra: ["오크라", "🌿"], corn: ["옥수수", "🌽"], pea: ["완두콩", "🫛"], "cherry-tomato": ["방울토마토", "🍅"], cabbage: ["양배추", "🥬"], "red-cabbage": ["적양배추", "🥬"], cauliflower: ["콜리플라워", "🥦"], arugula: ["루꼴라", "🥬"], beet: ["비트", "🫜"], mushroom: ["버섯", "🍄"]
  })),
  generators: Object.freeze({
    "drink-generator": Object.freeze({
      title: "음료 생성기", artwork: "🥤", source: "https://w.atwiki.jp/merge_cooking/pages/16.html",
      outputs: Object.freeze({ 4: ["water", "coffee-bean", "ice-cube"], 5: ["water", "sparkling-water", "coffee-bean", "ice-cube"], 6: ["water", "sparkling-water", "cola", "coffee-bean", "ice-cube"] })
    }),
    "fruit-nut-generator": Object.freeze({
      title: "과일 & 견과 생성기", artwork: "🍓", source: "https://w.atwiki.jp/merge_cooking/pages/30.html",
      outputs: Object.freeze({ 4: ["cherry", "sesame"], 5: ["cherry", "strawberry", "sesame"], 6: ["cherry", "strawberry", "apple", "sesame"] })
    }),
    "protein-generator": Object.freeze({ title: "프로틴 생성기", artwork: "🍗", source: "https://w.atwiki.jp/merge_cooking/pages/106.html", outputs: Object.freeze({ 4: ["chicken-wing", "pork-chop"], 5: ["chicken-wing", "chicken-drumstick", "pork-chop"], 6: ["chicken-wing", "chicken-breast", "beef-cube", "patty", "ham", "beef-rib"] }) }),
    "vegetable-generator": Object.freeze({ title: "채소 생성기", artwork: "🥬", source: "https://w.atwiki.jp/merge_cooking/pages/118.html", outputs: Object.freeze({ 4: ["spinach", "potato"], 5: ["spinach", "broccoli", "potato"], 6: ["spinach", "broccoli", "carrot", "potato", "asparagus", "tomato", "cucumber", "lettuce"] }) }),
    "grain-generator": Object.freeze({ title: "곡물 생성기", artwork: "🌾", source: "https://w.atwiki.jp/merge_cooking/pages/53.html", outputs: Object.freeze({ 4: ["wheat-flour", "bread-dough"], 5: ["wheat-flour", "bread-dough", "toast-dough"], 6: ["wheat-flour", "bread-dough", "toast-dough", "pie-crust", "burger-bun", "hot-dog-bun"] }) }),
    "alcohol-generator": Object.freeze({ title: "알코올 생성기", artwork: "🍷", source: "https://w.atwiki.jp/merge_cooking/pages/55.html", outputs: Object.freeze({ 4: ["grape", "wine", "rum"], 5: ["grape", "wine", "brandy", "gin"], 6: ["grape", "wine", "tangerine-wine", "rum", "brandy", "gin", "champagne", "vodka", "absinthe", "whiskey"] }) }),
    ship: Object.freeze({ title: "배", artwork: "🚢", source: "https://w.atwiki.jp/mergecooking/pages/34.html", outputs: Object.freeze({ 4: ["mackerel", "clam"], 5: ["mackerel", "squid", "clam", "mussel"], 6: ["mackerel", "squid", "tilapia", "clam", "mussel", "oyster"] }) })
  }),
  recipes: Object.freeze({
    juicer: Object.freeze([
      ["cherry-juice", ["cherry"]], ["strawberry-juice", ["strawberry"]], ["apple-juice", ["apple"]], ["banana-juice", ["banana"]], ["lemon-juice", ["lemon"]], ["orange-juice", ["orange"]], ["pomegranate-juice", ["pomegranate"]], ["pear-juice", ["pear"]], ["mango-juice", ["mango"]], ["pineapple-juice", ["pineapple"]], ["watermelon-juice", ["watermelon"]],
      ["strawberry-apple-juice", ["strawberry", "apple"]], ["strawberry-lemon-juice", ["strawberry", "lemon"]], ["banana-orange-juice", ["banana", "orange"]], ["apple-lemon-juice", ["apple", "lemon"]], ["pear-apple-banana-juice", ["pear", "apple", "banana"]]
    ]),
    pan: Object.freeze([["fried-asparagus", ["asparagus"]], ["fried-broccoli", ["broccoli"]], ["fried-ham", ["ham"]], ["potato-strips", ["potato"]], ["fried-chicken", ["chicken-wing", "wheat-flour"]]]),
    grill: Object.freeze([["grilled-chicken-wing", ["chicken-wing"]], ["grilled-chicken-breast", ["chicken-breast"]], ["grilled-patty", ["patty"]], ["grilled-beef-ribs", ["beef-rib"]]]),
    oven: Object.freeze([["baked-burger-bun", ["burger-bun"]], ["baked-hot-dog-bun", ["hot-dog-bun"]], ["apple-pie", ["pie-crust", "apple"]], ["banana-pie", ["pie-crust", "banana"]], ["toast", ["toast-dough"]]]),
    "chef-counter": Object.freeze([["tomato-slice", ["tomato"]], ["cucumber-slice", ["cucumber"]], ["potato-strips", ["potato"]], ["banana-split", ["banana", "ice-cube"]], ["potato-salad", ["potato", "tomato-slice", "cucumber-slice"]], ["pork-burger", ["baked-burger-bun", "grilled-patty", "lettuce", "tomato-slice"]]]),
    pot: Object.freeze([["pot-au-feu", ["beef-cube", "carrot", "potato"]], ["bouillabaisse", ["mackerel", "shrimp", "water"]]]),
    shaker: Object.freeze([["mimosa", ["champagne", "orange-juice"]], ["pina-colada", ["rum", "coconut", "pineapple-juice"]], ["gin-rickey", ["gin", "sparkling-water", "lemon-juice"]], ["bloody-mary", ["vodka", "tomato"]], ["carimocho", ["wine", "cola", "lemon"]]])
  }),
  stageOrders: Object.freeze({
    "fruit-juice-bar": Object.freeze(["cola", "cherry-juice", "strawberry-juice", "apple-juice", "lemon-juice", "orange-juice", "strawberry-apple-juice", "mug-coffee", "cold-brew", "french-press"]),
    "takeout-paradise": Object.freeze(["grilled-chicken-wing", "fried-broccoli", "potato-strips", "banana-split", "mackerel", "shrimp"]),
    "incrabible-grill": Object.freeze(["baked-burger-bun", "baked-hot-dog-bun", "apple-pie", "banana-pie"]),
    "food-express": Object.freeze(["pork-burger", "potato-salad", "fried-chicken"]),
    "epic-chicken": Object.freeze(["fried-chicken", "grilled-chicken-breast", "grilled-beef-ribs", "fried-ham"]),
    "taste-of-aloha": Object.freeze(["banana-split", "wine", "tangerine-wine", "pineapple-juice", "mimosa", "pina-colada", "bouillabaisse"]),
    "wild-west-saloon": Object.freeze(["wine", "mullet", "fried-broccoli", "potato-salad", "apple-juice"]),
    "bon-appetit": Object.freeze(["apple-pie", "banana-pie", "toast", "pot-au-feu", "bouillabaisse"]),
    "dreaming-macaron": Object.freeze(["apple-pie", "banana-pie", "mango-juice", "pineapple-juice"]),
    "little-marseille": Object.freeze(["grilled-beef-ribs", "fried-broccoli", "pineapple-juice", "potato-salad"]),
    "izakaya": Object.freeze(["apple-juice", "fried-ham", "grilled-chicken-breast", "wine"]),
    "sakura-wagashi": Object.freeze(["strawberry-juice", "banana-pie", "apple-pie", "toast"])
  })
});

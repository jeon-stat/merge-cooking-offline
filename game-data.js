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
    grainGenerator: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Grain_Generator",
    bigDough: "https://w.atwiki.jp/merge_cooking/pages/43.html",
    touristBaggage: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Tourist_Baggage",
    standardRecipes: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Standard_Recipes",
    frenchRecipes: "https://merge-cooking-theme-restaurant.fandom.com/wiki/French_Recipes",
    japaneseRecipes: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Japanese_Recipes",
    japaneseAttraction: "https://w.atwiki.jp/merge_cooking/pages/147.html",
    cookingTools: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Cooking_Tools",
    chineseRecipes: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Chinese_Recipes",
    spanishRecipes: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Spanish_Recipes",
    italianVehicle: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Italian_Themed_Vehicle",
    italianRecipes: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Italian_Recipes",
    stageList: "https://w.atwiki.jp/merge_cooking/pages/186.html",
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
    Object.freeze({ id: "takeout-paradise", name: "Takeout Paradise", country: "미국", unlocks: Object.freeze(["protein-generator", "vegetable-generator", "ship", "pan", "grill", "bbq-recipe-book", "glass-bowl"]), focus: "grilled vegetables, meat, seafood, salads", source: "https://w.atwiki.jp/mergecooking/pages/37.html" }),
    Object.freeze({ id: "incrabible-grill", name: "inCRABible Grill", country: "미국", unlocks: Object.freeze(["grain-generator", "oven", "tourist-bag"]), focus: "burgers, hot dogs, tarts", source: "https://w.atwiki.jp/mergecooking/pages/37.html" }),
    Object.freeze({ id: "food-express", name: "Food Express", country: "미국", unlocks: Object.freeze([]), focus: "burgers, hot dogs, salads, fried food", source: "https://w.atwiki.jp/mergecooking/pages/37.html" }),
    Object.freeze({ id: "epic-chicken", name: "Epic Chicken", country: "미국", unlocks: Object.freeze([]), focus: "fried chicken, beef", source: "https://w.atwiki.jp/mergecooking/pages/37.html" }),
    Object.freeze({ id: "taste-of-aloha", name: "Taste of Aloha", country: "미국", unlocks: Object.freeze(["alcohol-generator", "shaker"]), focus: "mixed drinks, tropical fruit", source: "https://w.atwiki.jp/mergecooking/pages/37.html" }),
    Object.freeze({ id: "wild-west-saloon", name: "Wild West Saloon", country: "미국", unlocks: Object.freeze([]), focus: "greens, mushrooms, wine", source: "https://w.atwiki.jp/mergecooking/pages/37.html" }),
    Object.freeze({ id: "bon-appetit", name: "Bon Appétit Restaurant", country: "프랑스", unlocks: Object.freeze(["french-recipe-book", "collection-catalog", "pot"]), focus: "French recipes", source: "https://w.atwiki.jp/mergecooking/pages/37.html" }),
    Object.freeze({ id: "dreaming-macaron", name: "Dreaming Macaron", country: "프랑스", unlocks: Object.freeze(["french-recipe-book"]), focus: "French desserts", source: "https://w.atwiki.jp/mergecooking/pages/37.html" }),
    Object.freeze({ id: "little-marseille", name: "Little Marseille", country: "프랑스", unlocks: Object.freeze([]), focus: "French seafood", source: "https://w.atwiki.jp/mergecooking/pages/37.html" }),
    Object.freeze({ id: "izakaya", name: "Izakaya", country: "일본", unlocks: Object.freeze(["japanese-attractions", "japanese-recipe-book"]), focus: "Japanese dishes", source: "https://w.atwiki.jp/mergecooking/pages/37.html" }),
    Object.freeze({ id: "sakura-wagashi", name: "Sakura & Wagashi", country: "일본", unlocks: Object.freeze([]), focus: "Japanese sweets", source: "https://w.atwiki.jp/mergecooking/pages/37.html" }),
    Object.freeze({ id: "noodle-bar", name: "Noodle Bar", country: "일본", unlocks: Object.freeze(["noodle-maker"]), focus: "noodles and Japanese dishes", source: "https://w.atwiki.jp/merge_cooking/pages/186.html" }),
    Object.freeze({ id: "ryotei", name: "Ryotei", country: "일본", unlocks: Object.freeze([]), focus: "Japanese fine dining", source: "https://w.atwiki.jp/merge_cooking/pages/186.html" }),
    Object.freeze({ id: "dragon-castle", name: "Dragon Castle", country: "중국", unlocks: Object.freeze(["steamer"]), focus: "Chinese dishes", source: "https://w.atwiki.jp/merge_cooking/pages/186.html" }),
    Object.freeze({ id: "riverside-diner", name: "Riverside Diner", country: "중국", unlocks: Object.freeze([]), focus: "Chinese comfort food", source: "https://w.atwiki.jp/merge_cooking/pages/186.html" }),
    Object.freeze({ id: "everything-spicy", name: "Everything Spicy", country: "중국", unlocks: Object.freeze([]), focus: "spicy Chinese dishes", source: "https://w.atwiki.jp/merge_cooking/pages/186.html" }),
    Object.freeze({ id: "cantonese-snack-bar", name: "Cantonese Snack Bar", country: "중국", unlocks: Object.freeze([]), focus: "Cantonese snacks", source: "https://w.atwiki.jp/merge_cooking/pages/186.html" }),
    Object.freeze({ id: "delicious-spanish-cuisine", name: "Food Delicioso", country: "스페인", unlocks: Object.freeze(["paella-pan"]), focus: "Spanish cuisine", source: "https://w.atwiki.jp/merge_cooking/pages/186.html" }),
    Object.freeze({ id: "el-puerto", name: "El Puerto", country: "스페인", unlocks: Object.freeze([]), focus: "Spanish seafood", source: "https://w.atwiki.jp/merge_cooking/pages/186.html" }),
    Object.freeze({ id: "tapas-bar", name: "Tapas Bar", country: "스페인", unlocks: Object.freeze([]), focus: "tapas", source: "https://w.atwiki.jp/merge_cooking/pages/186.html" }),
    Object.freeze({ id: "prickly-palate", name: "Prickly Palate", country: "스페인", unlocks: Object.freeze([]), focus: "Spanish specialties", source: "https://w.atwiki.jp/merge_cooking/pages/186.html" }),
    Object.freeze({ id: "deathly-tasty-tacos", name: "Deathly Tasty Tacos", country: "멕시코", unlocks: Object.freeze([]), focus: "tacos and Mexican dishes", source: "https://w.atwiki.jp/merge_cooking/pages/186.html" }),
    Object.freeze({ id: "mayan-delights", name: "Mayan Delights", country: "멕시코", unlocks: Object.freeze([]), focus: "Mayan cuisine", source: "https://w.atwiki.jp/merge_cooking/pages/186.html" }),
    Object.freeze({ id: "venice-vibes", name: "Venice Vibes", country: "이탈리아", unlocks: Object.freeze(["italian-themed-vehicle", "italian-recipe-book", "pizza-oven"]), focus: "Italian cuisine and handcrafts", source: "https://w.atwiki.jp/merge_cooking/pages/186.html" }),
    Object.freeze({ id: "tuscan-terrace", name: "Tuscan Terrace", country: "이탈리아", unlocks: Object.freeze([]), focus: "Tuscan cuisine", source: "https://w.atwiki.jp/merge_cooking/pages/186.html" }),
    Object.freeze({ id: "caesars-kitchen", name: "Caesar's Kitchen", country: "이탈리아", unlocks: Object.freeze([]), focus: "Roman cuisine", source: "https://w.atwiki.jp/merge_cooking/pages/186.html" }),
    Object.freeze({ id: "neapolitan-feast", name: "Neapolitan Feast", country: "이탈리아", unlocks: Object.freeze([]), focus: "Neapolitan cuisine", source: "https://w.atwiki.jp/merge_cooking/pages/186.html" })
  ]),
  chains: Object.freeze({
    fruit: Object.freeze(["cherry", "strawberry", "apple", "banana", "lemon", "coconut", "orange", "pomegranate", "pear", "mango", "pineapple", "watermelon"]),
    nut: Object.freeze(["sesame", "peanut", "pistachio", "cacao-bean", "almond", "pecan", "walnut", "cashew", "date", "pine-nut"]),
    softDrink: Object.freeze(["water", "sparkling-water", "cola", "soda", "orange-soda", "grape-soda", "black-tea", "green-tea", "herbal-tea", "yogurt-drink", "bubble-tea", "energy-drink"]),
    coffee: Object.freeze(["coffee-bean", "ground-coffee", "cup-coffee", "mug-coffee", "takeaway-coffee", "cold-brew", "drip-coffee", "french-press", "moka-pot", "siphon-coffee"]),
    poultry: Object.freeze(["egg", "chicken-wing", "chicken-drumstick", "chicken-breast", "whole-chicken", "duck-breast", "duck", "goose", "quail", "turkey"]),
    pork: Object.freeze(["bacon", "sausage", "ham", "patty", "pork-ribs", "pork-knuckle", "lamb-cube", "lamb-chop", "leg-of-lamb", "beef-cube"]),
    beef: Object.freeze(["beef-cube", "beef-steak", "beef-rib"]),
    vegetable: Object.freeze(["tomato", "cucumber", "asparagus", "carrot", "onion", "bell-pepper", "eggplant", "potato", "okra", "corn", "pea", "cherry-tomato"]),
    leafy: Object.freeze(["lettuce", "cabbage", "broccoli", "red-cabbage", "cauliflower", "arugula", "spinach", "beet", "mushroom", "artichoke"]),
    grain: Object.freeze(["red-bean", "soybean", "common-bean", "wheat-flour", "corn-flour", "breadcrumb", "rice", "rice-flour", "buckwheat-flour", "chickpea", "ube", "yam"]),
    dough: Object.freeze(["small-dough", "burger-bun", "hot-dog-bun", "pie-crust", "donut-dough", "toast-dough"]),
    baggage: Object.freeze(["bald-eagle-stamp", "hollywood-postcard", "cowboy-hat", "american-football", "i-love-mc-mug", "fridge-magnet", "las-vegas-badge", "dream-catcher", "hawaiian-tikis", "desk-decoration"]),
    italianHandcraft: Object.freeze(["italian-horn-pendant", "espresso-cup", "venetian-glass", "pasta-mold-set", "roman-soldier-helmet", "venetian-mask", "sicilian-pine-cone", "pinocchio-toy", "mosaic-painting", "michelangelo-david"]),
    bamboo: Object.freeze(["bamboo-shoot", "fresh-bamboo", "bamboo-stalks", "bamboo-sword", "matcha-tea-set", "kendama", "kokeshi-doll", "bamboo-hand-fan", "oil-paper-umbrella", "lucky-paddle"]),
    fox: Object.freeze(["fox-mask", "fox-wishing-plates", "fox-amulet", "fox-hand-towel", "fox-coin-purse", "fox-wind-bell", "fox-statue"]),
    musselProducts: Object.freeze(["green-laver", "nori", "kelp", "wakame", "sea-grapes"]),
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
    egg: ["달걀", "🥚"], bacon: ["베이컨", "🥓"], sausage: ["소시지", "🌭"], "whole-chicken": ["통닭", "🍗"], "duck-breast": ["오리 가슴살", "🍗"], duck: ["오리", "🦆"], "whole-duck": ["통오리", "🦆"], goose: ["거위", "🪿"], quail: ["메추리", "🐦"], turkey: ["칠면조", "🦃"],
    onion: ["양파", "🧅"], "bell-pepper": ["피망", "🫑"], eggplant: ["가지", "🍆"], okra: ["오크라", "🌿"], corn: ["옥수수", "🌽"], pea: ["완두콩", "🫛"], "cherry-tomato": ["방울토마토", "🍅"], cabbage: ["양배추", "🥬"], "red-cabbage": ["적양배추", "🥬"], cauliflower: ["콜리플라워", "🥦"], arugula: ["루꼴라", "🥬"], beet: ["비트", "🫜"], mushroom: ["버섯", "🍄"], "red-bean": ["팥", "🫘"], soybean: ["대두", "🫘"], "common-bean": ["강낭콩", "🫘"], "corn-flour": ["옥수수 가루", "🌽"], breadcrumb: ["빵가루", "🍞"], rice: ["쌀", "🍚"], "rice-flour": ["쌀가루", "🌾"], "buckwheat-flour": ["메밀가루", "🌾"], chickpea: ["병아리콩", "🫘"], ube: ["자색고구마", "🍠"], yam: ["얌", "🍠"], "small-dough": ["작은 반죽", "🥣"], "donut-dough": ["도넛 반죽", "🍩"], "big-dough": ["큰 반죽", "🍞"], "pork-ribs": ["돼지 갈비", "🥩"], "pork-knuckle": ["족발", "🍖"], "lamb-cube": ["양고기 큐브", "🥩"], "lamb-chop": ["양갈비", "🥩"], "leg-of-lamb": ["양다리", "🍖"], "beef-steak": ["소고기 스테이크", "🥩"], "raw-goose-liver": ["생 거위 간", "🍖"], artichoke: ["아티초크", "🌿"],
    "fried-egg": ["프라이드 에그", "🍳"], "fried-bacon": ["튀긴 베이컨", "🥓"], "fried-sausage": ["프라이드 소시지", "🌭"], "fried-red-cabbage": ["적양배추 볶음", "🥬"], "fried-salmon": ["연어 구이", "🐟"], "pan-fried-cod": ["대구 구이", "🐟"], "peas-pine-nut": ["잣과 완두콩", "🥗"], "duck-cherries": ["오리와 체리", "🍒"], "stuffed-mushroom": ["속을 채운 버섯", "🍄"], "stir-fried-arugula": ["루꼴라 볶음", "🥬"], "pan-fried-mullet": ["숭어 구이", "🐟"], "fried-chicken-wing": ["프라이드 닭날개", "🍗"], "fried-chicken-drumstick": ["프라이드 닭다리", "🍗"], "fried-chicken-breast": ["프라이드 닭가슴살", "🍗"], "fried-pork-chop": ["프라이드 돼지갈비", "🥩"],
    "grilled-carrot": ["구운 당근", "🥕"], "grilled-onion": ["구운 양파", "🧅"], "grilled-bell-pepper": ["구운 피망", "🫑"], "grilled-eggplant": ["구운 가지", "🍆"], "grilled-potato": ["구운 감자", "🥔"], "grilled-okra": ["구운 오크라", "🌿"], "grilled-corn": ["구운 옥수수", "🌽"], "grilled-peas": ["구운 완두콩", "🫛"], "grilled-cherry-tomato": ["구운 방울토마토", "🍅"], "grilled-cauliflower": ["구운 콜리플라워", "🥦"], "grilled-chicken-drumstick": ["구운 닭다리", "🍗"], "grilled-whole-chicken": ["구운 통닭", "🍗"], "grilled-pork-ribs": ["구운 돼지 갈비", "🥩"], "grilled-pork-knuckle": ["구운 족발", "🍖"], "grilled-lamb-cube": ["양고기 케밥", "🥩"], "grilled-lamb-chop": ["구운 양갈비", "🥩"], "grilled-leg-of-lamb": ["구운 양다리", "🍖"], "grilled-beef-steak": ["델모니코 스테이크", "🥩"], "grilled-squid": ["구운 오징어", "🦑"], "grilled-tilapia": ["구운 틸라피아", "🐟"], "grilled-flounder": ["구운 광어", "🐟"], "grilled-tuna": ["구운 참치", "🐟"], "grilled-bass": ["구운 농어", "🐟"], "grilled-mussel": ["구운 홍합", "🦪"], "grilled-shrimp": ["구운 새우", "🦐"], "grilled-crab": ["구운 게", "🦀"], "grilled-scallop": ["구운 가리비", "🦪"], "grilled-lobster": ["구운 랍스터", "🦞"], "grilled-king-crab": ["구운 킹크랩", "🦀"],
    "coleslaw": ["코울슬로", "🥗"], "waldorf-salad": ["월도프 샐러드", "🥗"], "shrimp-cocktail": ["새우 칵테일", "🍤"], "arugula-tomato-salad": ["루꼴라 토마토 샐러드", "🥗"], "hawaiian-poke-bowl": ["하와이안 포케", "🍚"], "crab-louie-salad": ["크랩 루이 샐러드", "🥗"], "mango-pie": ["망고 파이", "🥧"], "pecan-pie": ["피칸 파이", "🥧"], "pineapple-pie": ["파인애플 파이", "🥧"], "honey-roasted-cashews": ["허니 캐슈넛", "🥜"], "boiled-yam": ["삶은 얌", "🍠"],
    baguette: ["바게트", "🥖"], "smoked-salmon": ["훈제 연어", "🐟"], "cured-duck": ["숙성 오리", "🦆"], "duck-confit": ["오리 콩피", "🍗"], "natto": ["낫토", "🫘"], "japanese-rolled-omelette": ["일본식 계란말이", "🍳"], "chicken-breast-yakitori": ["닭가슴살 야키토리", "🍢"], "chicken-wing-yakitori": ["닭날개 야키토리", "🍢"], "mackerel-sashimi": ["고등어 사시미", "🐟"], "squid-sashimi": ["오징어 사시미", "🦑"], "shrimp-sashimi": ["새우 사시미", "🦐"], "crab-sashimi": ["게 사시미", "🦀"], "scallop-sashimi": ["가리비 사시미", "🦪"], "salmon-sashimi": ["연어 사시미", "🐟"], "tuna-sashimi": ["참치 사시미", "🐟"], "abalone-sashimi": ["전복 사시미", "🐚"], "bass-sashimi": ["농어 사시미", "🐟"],
    "bamboo-shoot": ["죽순", "🎋"], "fresh-bamboo": ["신선한 대나무", "🎋"], "bamboo-stalks": ["대나무 장대", "🎋"], "bamboo-sword": ["죽도", "🗡️"], "matcha-tea-set": ["다도 세트", "🍵"], kendama: ["켄다마", "🪀"], "kokeshi-doll": ["코케시 인형", "🪆"], "bamboo-hand-fan": ["대나무 부채", "🪭"], "oil-paper-umbrella": ["종이 우산", "☂️"], "lucky-paddle": ["복 패들", "🏓"], "fox-mask": ["여우 가면", "🦊"], "fox-wishing-plates": ["여우 소원 접시", "🍽️"], "fox-amulet": ["여우 부적", "🧿"], "fox-hand-towel": ["여우 손수건", "🧣"], "fox-coin-purse": ["여우 동전지갑", "👛"], "fox-wind-bell": ["여우 풍경", "🔔"], "fox-statue": ["여우 장식상", "🦊"],
    "green-laver": ["파래", "🌿"], nori: ["김", "🍙"], kelp: ["다시마", "🌿"], wakame: ["미역", "🌿"], "sea-grapes": ["바다 포도", "🫧"], "bucket-of-rice": ["밥 양동이", "🍚"], "bowl-of-rice": ["밥공기", "🍚"], "sushi-rolling-mat": ["초밥용 발", "🍣"], "cucumber-sushi-roll": ["오이 초밥말이", "🍣"], "tuna-sushi-roll": ["참치 초밥말이", "🍣"], "california-sushi-roll": ["캘리포니아 롤", "🍣"], "duck-breast-sushi": ["오리 가슴살 초밥", "🍣"], "cup-of-matcha": ["말차 한 잔", "🍵"], "matcha-powder": ["말차 가루", "🍵"], "fox-pancake": ["여우 팬케이크", "🥞"],
    "bald-eagle-stamp": ["대머리독수리 우표", "🦅"], "hollywood-postcard": ["할리우드 엽서", "📮"], "cowboy-hat": ["카우보이 모자", "🤠"], "american-football": ["미식축구공", "🏈"], "i-love-mc-mug": ["I Love MC 머그", "☕"], "fridge-magnet": ["냉장고 자석", "🧲"], "las-vegas-badge": ["라스베이거스 배지", "🎰"], "dream-catcher": ["드림캐처", "🪶"], "hawaiian-tikis": ["하와이 티키", "🗿"], "desk-decoration": ["책상 장식", "🪴"],
    "italian-horn-pendant": ["이탈리아 뿔 펜던트", "📿"], "espresso-cup": ["에스프레소 잔", "☕"], "venetian-glass": ["베네치아 유리", "🍷"], "pasta-mold-set": ["파스타 몰드 세트", "🧰"], "roman-soldier-helmet": ["로마 병사 투구", "🪖"], "venetian-mask": ["베네치아 가면", "🎭"], "sicilian-pine-cone": ["시칠리아 솔방울", "🌲"], "pinocchio-toy": ["피노키오 인형", "🪆"], "mosaic-painting": ["모자이크 그림", "🖼️"], "michelangelo-david": ["미켈란젤로의 다비드", "🗿"], "pizza-dough": ["피자 도우", "🍞"], "valencian-paella": ["발렌시아 파에야", "🥘"], "marinara-pizza": ["마리나라 피자", "🍕"], "steamed-pork-rice": ["쌀가루 찐 돼지고기", "🥟"], "shrimp-steamed-dumpling": ["새우 찐만두", "🥟"], "ramen-noodles": ["라멘 면", "🍜"], "soba-noodles": ["소바 면", "🍜"], "udon-noodles": ["우동 면", "🍜"], "kitakata-ramen": ["기타카타 라멘", "🍜"], "nabeyaki-ramen": ["나베야키 라멘", "🍜"],
    "pasta-mold-ravioli": ["라비올리 몰드", "🧰"], "pasta-mold-bigoli": ["비골리 몰드", "🧰"], "pasta-mold-fusilli": ["푸실리 몰드", "🧰"], "pasta-mold-farfalle": ["파르팔레 몰드", "🧰"], "pasta-mold-tagliatelle": ["탈리아텔레 몰드", "🧰"], "pasta-mold-spaghetti": ["스파게티 몰드", "🧰"], "pasta-mold-rigatoni": ["리가토니 몰드", "🧰"], "pasta-mold-penne": ["펜네 몰드", "🧰"], "pasta-mold-orecchiette": ["오레키에테 몰드", "🧰"], "pasta-mold-conchiglie": ["콘킬리에 몰드", "🧰"], ravioli: ["라비올리", "🥟"], bigoli: ["비골리", "🍝"], fusilli: ["푸실리", "🍝"], farfalle: ["파르팔레", "🍝"], tagliatelle: ["탈리아텔레", "🍝"], spaghetti: ["스파게티", "🍝"], rigatoni: ["리가토니", "🍝"], penne: ["펜네", "🍝"], orecchiette: ["오레키에테", "🍝"], conchiglie: ["콘킬리에", "🍝"],
    "gazpacho": ["가스파초", "🥣"], "yangzhou-fried-rice": ["양저우 볶음밥", "🍚"], "mexican-red-rice": ["멕시칸 레드 라이스", "🍚"]
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
    "protein-generator": Object.freeze({ title: "프로틴 생성기", artwork: "🍗", source: "https://w.atwiki.jp/merge_cooking/pages/21.html", outputs: Object.freeze({ 4: ["bacon", "egg"], 5: ["bacon", "sausage", "egg"], 6: ["bacon", "sausage", "ham", "egg"] }) }),
    "vegetable-generator": Object.freeze({ title: "채소 생성기", artwork: "🥬", source: "https://w.atwiki.jp/merge_cooking/pages/27.html", outputs: Object.freeze({ 4: ["tomato", "lettuce"], 5: ["tomato", "cucumber", "lettuce"], 6: ["tomato", "cucumber", "asparagus", "lettuce"] }) }),
    "grain-generator": Object.freeze({ title: "곡물 생성기", artwork: "🌾", source: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Grain_Generator", outputs: Object.freeze({ 4: ["red-bean"], 5: ["red-bean", "soybean"], 6: ["red-bean", "soybean", "common-bean"], 7: ["red-bean", "soybean", "common-bean", "wheat-flour"], 8: ["red-bean", "soybean", "common-bean", "wheat-flour", "corn-flour"], 9: ["red-bean", "soybean", "common-bean", "wheat-flour", "corn-flour", "breadcrumb"], 10: ["red-bean", "soybean", "common-bean", "wheat-flour", "corn-flour", "breadcrumb", "rice"], 11: ["red-bean", "soybean", "common-bean", "wheat-flour", "corn-flour", "breadcrumb", "rice", "rice-flour"], 12: ["red-bean", "soybean", "common-bean", "wheat-flour", "corn-flour", "breadcrumb", "rice", "rice-flour", "buckwheat-flour", "chickpea", "ube", "yam"] }) }),
    "big-dough": Object.freeze({ title: "큰 반죽", artwork: "🍞", source: "https://w.atwiki.jp/merge_cooking/pages/43.html", outputs: Object.freeze({ 1: ["small-dough"], 2: ["small-dough", "burger-bun"], 3: ["small-dough", "burger-bun", "hot-dog-bun"], 4: ["small-dough", "burger-bun", "hot-dog-bun", "pie-crust"], 5: ["small-dough", "burger-bun", "hot-dog-bun", "pie-crust", "donut-dough"], 6: ["small-dough", "burger-bun", "hot-dog-bun", "pie-crust", "donut-dough", "toast-dough"] }) }),
    "alcohol-generator": Object.freeze({ title: "알코올 생성기", artwork: "🍷", source: "https://w.atwiki.jp/merge_cooking/pages/55.html", outputs: Object.freeze({ 4: ["grape", "wine", "rum"], 5: ["grape", "wine", "brandy", "gin"], 6: ["grape", "wine", "tangerine-wine", "rum", "brandy", "gin", "champagne", "vodka", "absinthe", "whiskey"] }) }),
    "tourist-bag": Object.freeze({ title: "관광객 가방", artwork: "🧳", source: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Tourist_Baggage", outputs: Object.freeze({ 4: ["bald-eagle-stamp"], 5: ["bald-eagle-stamp", "hollywood-postcard"], 6: ["bald-eagle-stamp", "hollywood-postcard"], 7: ["bald-eagle-stamp", "hollywood-postcard", "cowboy-hat"] }) }),
    "italian-themed-vehicle": Object.freeze({ title: "이탈리아 테마 차량", artwork: "🚗", source: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Italian_Themed_Vehicle", outputs: Object.freeze({ 4: ["italian-horn-pendant"], 5: ["italian-horn-pendant", "espresso-cup"], 6: ["italian-horn-pendant", "espresso-cup", "venetian-glass"], 7: ["italian-horn-pendant", "espresso-cup", "venetian-glass", "pasta-mold-set"] }) }),
    "pasta-mold-set": Object.freeze({ title: "파스타 몰드 세트", artwork: "🧰", source: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Italian_Themed_Vehicle", outputs: Object.freeze({ 1: ["pasta-mold-ravioli", "pasta-mold-bigoli", "pasta-mold-fusilli", "pasta-mold-farfalle", "pasta-mold-tagliatelle", "pasta-mold-spaghetti", "pasta-mold-rigatoni", "pasta-mold-penne", "pasta-mold-orecchiette", "pasta-mold-conchiglie"] }) }),
    "japanese-attractions": Object.freeze({ title: "일본의 매력", artwork: "⛩️", source: "https://w.atwiki.jp/merge_cooking/pages/147.html", outputs: Object.freeze({ 4: ["bamboo-shoot", "fox-mask"], 5: ["bamboo-shoot", "fresh-bamboo", "fox-mask"], 6: ["bamboo-shoot", "fresh-bamboo", "bamboo-stalks", "fox-mask"] }) }),
    mussel: Object.freeze({ title: "홍합 파생기", artwork: "🦪", source: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Ship", outputs: Object.freeze({ 1: ["green-laver"] }) }),
    "bamboo-stalks": Object.freeze({ title: "대나무 장대", artwork: "🎋", source: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Japanese_Attraction", outputs: Object.freeze({ 1: ["sushi-rolling-mat"] }) }),
    "matcha-tea-set": Object.freeze({ title: "다도 세트", artwork: "🍵", source: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Japanese_Attraction", outputs: Object.freeze({ 1: ["cup-of-matcha", "matcha-powder"] }) }),
    "fox-statue": Object.freeze({ title: "여우 장식상", artwork: "🦊", source: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Japanese_Attraction", outputs: Object.freeze({ 1: ["fox-pancake"] }) }),
    "bucket-of-rice": Object.freeze({ title: "밥 양동이", artwork: "🍚", source: "https://merge-cooking-theme-restaurant.fandom.com/wiki/Grain_Generator", outputs: Object.freeze({ 1: ["bowl-of-rice"] }) }),
    ship: Object.freeze({ title: "배", artwork: "🚢", source: "https://w.atwiki.jp/mergecooking/pages/34.html", outputs: Object.freeze({ 4: ["mackerel", "clam"], 5: ["mackerel", "squid", "clam", "mussel"], 6: ["mackerel", "squid", "tilapia", "clam", "mussel", "oyster"] }) })
  }),
  recipes: Object.freeze({
    juicer: Object.freeze([
      ["cherry-juice", ["cherry"]], ["strawberry-juice", ["strawberry"]], ["apple-juice", ["apple"]], ["banana-juice", ["banana"]], ["lemon-juice", ["lemon"]], ["orange-juice", ["orange"]], ["pomegranate-juice", ["pomegranate"]], ["pear-juice", ["pear"]], ["mango-juice", ["mango"]], ["pineapple-juice", ["pineapple"]], ["watermelon-juice", ["watermelon"]],
      ["strawberry-apple-juice", ["strawberry", "apple"]], ["strawberry-lemon-juice", ["strawberry", "lemon"]], ["banana-orange-juice", ["banana", "orange"]], ["apple-lemon-juice", ["apple", "lemon"]], ["pear-apple-banana-juice", ["pear", "apple", "banana"]], ["gazpacho", ["tomato", "cucumber", "onion", "bell-pepper"]]
    ]),
    pan: Object.freeze([["fried-egg", ["egg"]], ["fried-bacon", ["bacon"]], ["fried-sausage", ["sausage"]], ["fried-asparagus", ["asparagus"]], ["fried-broccoli", ["broccoli"]], ["fried-red-cabbage", ["red-cabbage"]], ["fried-ham", ["ham"]], ["fried-salmon", ["salmon"]], ["pan-fried-cod", ["cod"]], ["peas-pine-nut", ["pine-nut", "pea"]], ["duck-cherries", ["duck", "cherry"]], ["stuffed-mushroom", ["mushroom", "onion"]], ["stir-fried-arugula", ["arugula", "peanut"]], ["pan-fried-mullet", ["mullet"]], ["potato-strips", ["potato"]], ["fried-chicken", ["chicken-wing", "wheat-flour"]], ["fried-chicken-wing", ["breadcrumb", "chicken-wing"]], ["fried-chicken-drumstick", ["breadcrumb", "chicken-drumstick"]], ["fried-chicken-breast", ["breadcrumb", "chicken-breast"]], ["fried-pork-chop", ["breadcrumb", "pork-chop"]], ["japanese-rolled-omelette", ["egg"]], ["duck-confit", ["cured-duck", "potato"]], ["yangzhou-fried-rice", ["bowl-of-rice", "egg", "cucumber", "shrimp"]], ["mexican-red-rice", ["rice", "onion", "pea", "tomato"]]]),
    grill: Object.freeze([["grilled-carrot", ["carrot"]], ["grilled-onion", ["onion"]], ["grilled-bell-pepper", ["bell-pepper"]], ["grilled-eggplant", ["eggplant"]], ["grilled-potato", ["potato"]], ["grilled-okra", ["okra"]], ["grilled-corn", ["corn"]], ["grilled-peas", ["pea"]], ["grilled-cherry-tomato", ["cherry-tomato"]], ["grilled-cauliflower", ["cauliflower"]], ["grilled-chicken-wing", ["chicken-wing"]], ["grilled-chicken-drumstick", ["chicken-drumstick"]], ["grilled-chicken-breast", ["chicken-breast"]], ["grilled-whole-chicken", ["whole-chicken"]], ["grilled-patty", ["patty"]], ["grilled-pork-ribs", ["pork-ribs"]], ["grilled-pork-knuckle", ["pork-knuckle"]], ["grilled-lamb-cube", ["lamb-cube"]], ["grilled-lamb-chop", ["lamb-chop"]], ["grilled-leg-of-lamb", ["leg-of-lamb"]], ["grilled-beef-steak", ["beef-steak"]], ["grilled-beef-ribs", ["beef-rib"]], ["grilled-squid", ["squid"]], ["grilled-tilapia", ["tilapia"]], ["grilled-flounder", ["flounder"]], ["grilled-tuna", ["tuna"]], ["grilled-bass", ["bass"]], ["grilled-mussel", ["mussel"]], ["grilled-shrimp", ["shrimp"]], ["grilled-crab", ["crab"]], ["grilled-scallop", ["scallop"]], ["grilled-lobster", ["lobster"]], ["grilled-king-crab", ["king-crab"]], ["chicken-breast-yakitori", ["chicken-breast"]], ["chicken-wing-yakitori", ["chicken-wing"]]]),
    oven: Object.freeze([["baked-burger-bun", ["burger-bun"]], ["baked-hot-dog-bun", ["hot-dog-bun"]], ["apple-pie", ["pie-crust", "apple"]], ["banana-pie", ["pie-crust", "banana"]], ["mango-pie", ["pie-crust", "mango"]], ["pecan-pie", ["pie-crust", "pecan"]], ["pineapple-pie", ["pie-crust", "pineapple"]], ["toast", ["toast-dough"]], ["baguette", ["big-dough"]]]),
    "chef-counter": Object.freeze([["tomato-slice", ["tomato"]], ["cucumber-slice", ["cucumber"]], ["potato-strips", ["potato"]], ["banana-split", ["banana", "ice-cube"]], ["coleslaw", ["cabbage", "carrot"]], ["waldorf-salad", ["lettuce", "apple", "walnut"]], ["shrimp-cocktail", ["shrimp"]], ["arugula-tomato-salad", ["arugula", "tomato"]], ["hawaiian-poke-bowl", ["tuna"]], ["crab-louie-salad", ["crab", "egg", "lettuce", "tomato"]], ["potato-salad", ["potato", "tomato-slice", "cucumber-slice"]], ["pork-burger", ["baked-burger-bun", "grilled-patty", "lettuce", "tomato-slice"]], ["smoked-salmon", ["salmon", "lemon"]], ["cured-duck", ["duck"]], ["natto", ["soybean"]], ["mackerel-sashimi", ["mackerel"]], ["squid-sashimi", ["squid"]], ["shrimp-sashimi", ["shrimp"]], ["crab-sashimi", ["crab"]], ["scallop-sashimi", ["scallop"]], ["salmon-sashimi", ["salmon"]], ["tuna-sashimi", ["tuna"]], ["abalone-sashimi", ["abalone"]], ["bass-sashimi", ["bass"]], ["orecchiette", ["wheat-flour", "egg", "water", "pasta-mold-orecchiette"]], ["ravioli", ["beef-cube", "wheat-flour", "egg", "pasta-mold-ravioli"]], ["pizza-dough", ["wheat-flour", "water"]]]),
    pot: Object.freeze([["pot-au-feu", ["beef-cube", "carrot", "potato"]], ["bouillabaisse", ["mackerel", "shrimp", "water"]], ["boiled-yam", ["yam"]], ["bucket-of-rice", ["rice", "water"]], ["kitakata-ramen", ["ramen-noodles", "patty", "bamboo-shoot"]], ["nabeyaki-ramen", ["ramen-noodles", "egg", "bamboo-shoot"]]]),
    "glass-bowl": Object.freeze([["big-dough", ["water", "wheat-flour"]]]),
    "sushi-rolling-mat": Object.freeze([["cucumber-sushi-roll", ["bowl-of-rice", "nori", "cucumber"]], ["tuna-sushi-roll", ["bowl-of-rice", "nori", "tuna"]], ["california-sushi-roll", ["bowl-of-rice", "sesame", "cucumber", "crab"]], ["duck-breast-sushi", ["bowl-of-rice", "duck-breast"]]]),
    shaker: Object.freeze([["mimosa", ["champagne", "orange-juice"]], ["pina-colada", ["rum", "coconut", "pineapple-juice"]], ["gin-rickey", ["gin", "sparkling-water", "lemon-juice"]], ["bloody-mary", ["vodka", "tomato"]], ["carimocho", ["wine", "cola", "lemon"]]]),
    "noodle-maker": Object.freeze([["spaghetti", ["wheat-flour", "egg", "water", "pasta-mold-spaghetti"]], ["tagliatelle", ["wheat-flour", "egg", "water", "pasta-mold-tagliatelle"]], ["bigoli", ["wheat-flour", "egg", "water", "pasta-mold-bigoli"]], ["penne", ["wheat-flour", "egg", "water", "pasta-mold-penne"]], ["rigatoni", ["wheat-flour", "egg", "water", "pasta-mold-rigatoni"]], ["farfalle", ["wheat-flour", "egg", "water", "pasta-mold-farfalle"]], ["fusilli", ["wheat-flour", "egg", "water", "pasta-mold-fusilli"]], ["conchiglie", ["wheat-flour", "egg", "water", "pasta-mold-conchiglie"]], ["ramen-noodles", ["wheat-flour", "water"]], ["soba-noodles", ["buckwheat-flour", "water"]], ["udon-noodles", ["wheat-flour", "rice-flour", "water"]]]),
    "paella-pan": Object.freeze([["valencian-paella", ["rice", "escargot", "chicken-drumstick", "tomato"]]]),
    "pizza-oven": Object.freeze([["marinara-pizza", ["pizza-dough", "tomato"]]]),
    steamer: Object.freeze([["steamed-pork-rice", ["patty", "rice"]], ["shrimp-steamed-dumpling", ["small-dough", "shrimp"]]])
  }),
  stageOrders: Object.freeze({
    "fruit-juice-bar": Object.freeze(["cola", "cherry-juice", "strawberry-juice", "apple-juice", "lemon-juice", "orange-juice", "strawberry-apple-juice", "mug-coffee", "cold-brew", "french-press"]),
    "takeout-paradise": Object.freeze(["grilled-chicken-wing", "fried-broccoli", "potato-strips", "banana-split", "mackerel", "shrimp"]),
    "incrabible-grill": Object.freeze(["baked-burger-bun", "baked-hot-dog-bun", "apple-pie", "banana-pie", "bald-eagle-stamp", "hollywood-postcard", "cowboy-hat"]),
    "food-express": Object.freeze(["pork-burger", "potato-salad", "fried-chicken", "american-football", "i-love-mc-mug"]),
    "epic-chicken": Object.freeze(["fried-chicken", "grilled-chicken-breast", "grilled-beef-ribs", "fried-ham", "fridge-magnet", "las-vegas-badge"]),
    "taste-of-aloha": Object.freeze(["banana-split", "wine", "tangerine-wine", "pineapple-juice", "mimosa", "pina-colada", "gin-rickey", "dream-catcher", "hawaiian-tikis"]),
    "wild-west-saloon": Object.freeze(["wine", "mullet", "fried-broccoli", "potato-salad", "apple-juice"]),
    "bon-appetit": Object.freeze(["apple-pie", "banana-pie", "toast", "pot-au-feu", "bouillabaisse", "baguette", "smoked-salmon", "cured-duck"]),
    "dreaming-macaron": Object.freeze(["apple-pie", "banana-pie", "mango-juice", "pineapple-juice", "baguette", "duck-confit"]),
    "little-marseille": Object.freeze(["grilled-beef-ribs", "fried-broccoli", "pineapple-juice", "potato-salad", "smoked-salmon", "mackerel-sashimi", "shrimp-sashimi"]),
    "izakaya": Object.freeze(["apple-juice", "fried-ham", "grilled-chicken-breast", "wine", "natto", "japanese-rolled-omelette", "chicken-breast-yakitori", "mackerel-sashimi", "squid-sashimi", "shrimp-sashimi", "bamboo-hand-fan", "fox-statue", "cucumber-sushi-roll", "tuna-sushi-roll", "fox-pancake"]),
    "sakura-wagashi": Object.freeze(["strawberry-juice", "banana-pie", "apple-pie", "toast", "salmon-sashimi", "tuna-sashimi", "bamboo-hand-fan", "fox-wind-bell", "california-sushi-roll", "duck-breast-sushi", "cup-of-matcha"]),
    "noodle-bar": Object.freeze(["tuna-sushi-roll", "cucumber-sushi-roll", "mackerel-sashimi", "shrimp-sashimi", "natto", "ramen-noodles", "soba-noodles", "udon-noodles", "kitakata-ramen", "nabeyaki-ramen"]),
    "ryotei": Object.freeze(["salmon-sashimi", "california-sushi-roll", "duck-breast-sushi", "cup-of-matcha", "fox-wind-bell"]),
    "dragon-castle": Object.freeze(["fried-chicken", "grilled-chicken-breast", "potato-salad", "apple-juice", "steamed-pork-rice", "shrimp-steamed-dumpling"]),
    "riverside-diner": Object.freeze(["grilled-squid", "grilled-shrimp", "pork-burger", "banana-split", "yangzhou-fried-rice"]),
    "everything-spicy": Object.freeze(["grilled-beef-ribs", "fried-ham", "gin-rickey", "pina-colada"]),
    "cantonese-snack-bar": Object.freeze(["fried-bacon", "fried-egg", "toast", "mango-pie"]),
    "delicious-spanish-cuisine": Object.freeze(["pot-au-feu", "grilled-tuna", "mimosa", "apple-pie", "valencian-paella"]),
    "el-puerto": Object.freeze(["grilled-mussel", "grilled-crab", "shrimp-cocktail", "pineapple-juice", "gazpacho"]),
    "tapas-bar": Object.freeze(["fried-ham", "grilled-bell-pepper", "coleslaw", "wine"]),
    "prickly-palate": Object.freeze(["banana-split", "mango-pie", "carimocho", "grilled-chicken-wing"]),
    "deathly-tasty-tacos": Object.freeze(["pork-burger", "grilled-corn", "potato-strips", "bloody-mary", "mexican-red-rice"]),
    "mayan-delights": Object.freeze(["grilled-beef-steak", "hawaiian-poke-bowl", "pina-colada", "banana-pie"]),
    "venice-vibes": Object.freeze(["italian-horn-pendant", "espresso-cup", "venetian-glass", "pasta-mold-set"]),
    "tuscan-terrace": Object.freeze(["roman-soldier-helmet", "venetian-mask", "sicilian-pine-cone", "spaghetti"]),
    "caesars-kitchen": Object.freeze(["pinocchio-toy", "mosaic-painting", "tagliatelle", "ravioli"]),
    "neapolitan-feast": Object.freeze(["michelangelo-david", "penne", "rigatoni", "conchiglie", "marinara-pizza"])
  })
});

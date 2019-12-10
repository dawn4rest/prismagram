const adjs = [
  "abounding",
  "brief",
  "different",
  "boorish",
  "illustrious",
  "wiry",
  "dark",
  "violent",
  "fair",
  "dreary",
  "lavish",
  "proud",
  "assorted",
  "jealous",
  "glib",
  "longing",
  "accidental",
  "lopsided",
  "foolish",
  "wiggly",
  "quickest",
  "thundering",
  "steep",
  "thoughtful",
  "instinctive",
  "better",
  "ajar",
  "unkempt",
  "spiteful",
  "abhorrent",
  "future",
  "horrible",
  "needy",
  "ratty",
  "overjoyed",
  "separate",
  "absurd",
  "safe",
  "high",
  "homeless",
  "six",
  "wide",
  "tiresome",
  "optimal",
  "fluttering",
  "bright",
  "extra-small",
  "sordid",
  "delicious",
  "perfect",
  "shivering",
  "decisive",
  "aggressive",
  "cloudy",
  "maddening",
  "frail",
  "blue-eyed",
  "tricky",
  "irritating",
  "shiny",
  "receptive",
  "untidy",
  "scientific",
  "near",
  "colorful",
  "dizzy",
  "coherent",
  "righteous",
  "luxuriant",
  "important",
  "divergent",
  "gratis",
  "husky",
  "simple",
  "great",
  "maniacal",
  "exuberant",
  "knowledgeable",
  "decorous",
  "towering",
  "alive",
  "rabid",
  "scintillating",
  "unsuitable",
  "panicky",
  "silky",
  "threatening",
  "raspy",
  "empty",
  "gaping",
  "enchanted",
  "vast",
  "new",
  "unwieldy",
  "abashed",
  "ruddy",
  "endurable",
  "historical",
  "acceptable",
  "smooth",
  "opposite",
  "erratic",
  "wary",
  "well-off",
  "glorious",
  "breakable",
  "smoggy",
  "berserk",
  "impossible",
  "round",
  "best",
  "anxious",
  "swift",
  "shallow",
  "ill",
  "obedient",
  "delicate",
  "stiff",
  "voiceless",
  "ancient",
  "keen",
  "tremendous",
  "telling",
  "abrasive",
  "daffy",
  "craven",
  "physical",
  "fallacious",
  "crazy",
  "wonderful",
  "imported",
  "teeny-tiny",
  "busy",
  "dysfunctional",
  "mixed",
  "whole",
  "amuck",
  "toothsome",
  "funny",
  "understood",
  "strange",
  "invincible",
  "scandalous",
  "sore",
  "adorable",
  "boundless",
  "shut",
  "green",
  "gainful",
  "narrow",
  "quixotic",
  "afraid",
  "condemned",
  "plausible",
  "grieving",
  "debonair",
  "agonizing",
  "sparkling",
  "wealthy",
  "abusive",
  "clear",
  "superficial",
  "guttural",
  "feeble",
  "salty",
  "tart",
  "oafish",
  "roomy",
  "well-made",
  "overt",
  "damaged",
  "hollow",
  "troubled",
  "lyrical",
  "cold",
  "cultured",
  "tested",
  "pathetic",
  "smart",
  "cruel",
  "magical",
  "recondite",
  "aware",
  "aromatic",
  "spiritual",
  "giddy",
  "childlike",
  "fertile",
  "hot",
  "big",
  "impartial",
  "old",
  "tacky",
  "long",
  "earthy",
  "splendid",
  "profuse",
  "garrulous",
  "wet",
  "wandering",
  "tidy",
  "tearful",
  "abrupt",
  "sedate",
  "wretched",
  "uninterested",
  "mountainous",
  "thirsty",
  "left",
  "distinct",
  "deep",
  "trashy",
  "delirious",
  "didactic",
  "obtainable",
  "petite",
  "rainy",
  "steady",
  "humdrum",
  "wrong",
  "numerous",
  "unused",
  "rebel",
  "same",
  "red",
  "striped",
  "miniature",
  "lucky",
  "guarded",
  "weary",
  "cuddly",
  "sweet",
  "protective",
  "spotty",
  "magenta",
  "elegant",
  "useful",
  "frequent",
  "vague",
  "melodic",
  "apathetic",
  "stupid",
  "eager",
  "puffy",
  "staking",
  "flagrant",
  "private",
  "chubby",
  "industrious",
  "dry",
  "psychotic",
  "good",
  "godly",
  "terrific",
  "abiding",
  "uttermost",
  "lumpy",
  "belligerent",
  "marked",
  "easy",
  "uneven",
  "famous",
  "merciful",
  "spotted",
  "jittery",
  "learned",
  "incredible",
  "coordinated",
  "married",
  "icy",
  "three",
  "peaceful",
  "resonant",
  "flat",
  "barbarous",
  "imperfect",
  "bouncy",
  "handy",
  "bite-sized",
  "cumbersome",
  "whimsical",
  "ahead",
  "evasive",
  "elderly",
  "abject",
  "absorbing",
  "careful",
  "dangerous",
  "kindhearted",
  "black",
  "low",
  "cheerful",
  "discreet",
  "bad",
  "rustic",
  "macabre",
  "rich",
  "observant",
  "madly",
  "volatile",
  "well-to-do",
  "tightfisted",
  "classy",
  "abaft",
  "ad hoc",
  "gruesome",
  "nasty",
  "kaput",
  "wide-eyed",
  "screeching",
  "utter",
  "alcoholic",
  "nifty",
  "nebulous",
  "temporary",
  "yummy",
  "furtive",
  "exotic",
  "drab",
  "amused",
  "far-flung",
  "numberless",
  "dirty",
  "wooden",
  "overwrought",
  "obeisant",
  "harsh",
  "lovely",
  "nimble",
  "aberrant",
  "immense",
  "energetic",
  "heartbreaking",
  "lively",
  "waiting",
  "awake",
  "friendly",
  "puny",
  "elfin",
  "literate",
  "faithful",
  "sudden",
  "nonchalant",
  "broken",
  "spectacular",
  "calculating",
  "noxious",
  "two",
  "flashy",
  "succinct",
  "hellish",
  "incompetent",
  "earsplitting",
  "breezy",
  "onerous",
  "bloody",
  "overrated",
  "cagey",
  "amusing",
  "slimy",
  "inconclusive",
  "orange",
  "zonked",
  "versed",
  "chivalrous",
  "knotty",
  "highfalutin",
  "bright",
  "interesting",
  "shaky",
  "sturdy",
  "painful",
  "innocent",
  "grubby",
  "jazzy",
  "scattered",
  "habitual",
  "plastic",
  "hulking",
  "encouraging",
  "past",
  "utopian",
  "comfortable",
  "lush",
  "plain",
  "ill-informed",
  "hapless",
  "bawdy",
  "windy",
  "null",
  "torpid",
  "ripe",
  "scared",
  "odd",
  "imaginary",
  "defeated",
  "economic",
  "brawny",
  "undesirable",
  "tender",
  "youthful",
  "workable",
  "testy",
  "hard-to-find",
  "poor",
  "stingy",
  "milky",
  "rightful",
  "lazy",
  "full",
  "certain",
  "elated",
  "little",
  "victorious",
  "therapeutic",
  "tiny",
  "violet",
  "ambitious",
  "melted",
  "hissing",
  "clever",
  "square",
  "acid",
  "concerned",
  "wicked",
  "curious",
  "spotless",
  "ubiquitous",
  "huge",
  "tame",
  "loud",
  "ludicrous",
  "willing",
  "panoramic",
  "quirky",
  "icky",
  "jagged",
  "truculent",
  "nondescript",
  "alike",
  "meaty",
  "oval",
  "callous",
  "strong",
  "ugly",
  "aback",
  "scarce",
  "vacuous",
  "responsible",
  "overconfident",
  "watery",
  "relieved",
  "incandescent",
  "freezing",
  "unknown",
  "upset",
  "average",
  "annoyed",
  "parched",
  "nutty",
  "many",
  "homely",
  "straight",
  "idiotic",
  "domineering",
  "adaptable",
  "aquatic",
  "thirsty",
  "exultant",
  "enthusiastic",
  "chilly",
  "well-groomed",
  "wild",
  "periodic",
  "smiling",
  "dull",
  "arrogant",
  "reminiscent",
  "halting",
  "far",
  "thoughtless",
  "parallel",
  "witty",
  "deafening",
  "grey",
  "expensive",
  "secret",
  "puzzled",
  "diligent",
  "faded",
  "equable",
  "special",
  "mute",
  "lackadaisical",
  "momentous",
  "natural",
  "jumbled",
  "hospitable",
  "second-hand",
  "roasted"
];
const nouns = [
  "crayon",
  "detail",
  "class",
  "ice",
  "range",
  "fact",
  "skin",
  "competition",
  "hook",
  "houses",
  "zipper",
  "things",
  "cheese",
  "cats",
  "thought",
  "existence",
  "street",
  "drain",
  "station",
  "frame",
  "governor",
  "grip",
  "temper",
  "uncle",
  "plane",
  "chalk",
  "crook",
  "fall",
  "angle",
  "afternoon",
  "verse",
  "front",
  "rock",
  "effect",
  "thunder",
  "cough",
  "orange",
  "cow",
  "pump",
  "dime",
  "death",
  "toes",
  "girl",
  "eye",
  "mom",
  "elbow",
  "mark",
  "tank",
  "berry",
  "sea",
  "vegetable",
  "discovery",
  "ladybug",
  "acoustics",
  "fold",
  "measure",
  "chicken",
  "straw",
  "meeting",
  "gold",
  "rabbits",
  "page",
  "achiever",
  "number",
  "show",
  "flowers",
  "crib",
  "feeling",
  "airport",
  "party",
  "clover",
  "twist",
  "songs",
  "transport",
  "digestion",
  "town",
  "box",
  "health",
  "scissors",
  "fear",
  "knowledge",
  "pocket",
  "stream",
  "work",
  "question",
  "carpenter",
  "argument",
  "vest",
  "yard",
  "trip",
  "hour",
  "ghost",
  "nest",
  "book",
  "name",
  "middle",
  "hole",
  "snake",
  "morning",
  "fang",
  "top",
  "steel",
  "zinc",
  "leather",
  "noise",
  "stove",
  "cream",
  "toe",
  "wrench",
  "reading",
  "tramp",
  "driving",
  "bulb",
  "teaching",
  "dirt",
  "rainstorm",
  "ear",
  "insurance",
  "size",
  "swim",
  "moon",
  "ticket",
  "pot",
  "company",
  "plastic",
  "planes",
  "wood",
  "locket",
  "cub",
  "back",
  "flight",
  "plough",
  "advice",
  "grade",
  "slave",
  "system",
  "icicle",
  "jail",
  "grass",
  "lunch",
  "beginner",
  "love",
  "war",
  "hands",
  "lettuce",
  "lake",
  "crate",
  "idea",
  "muscle",
  "curve",
  "change",
  "grain",
  "turn",
  "sort",
  "profit",
  "nerve",
  "sense",
  "sail",
  "stamp",
  "punishment",
  "stick",
  "bead",
  "statement",
  "weather",
  "lock",
  "table",
  "wire",
  "pleasure",
  "line",
  "snails",
  "boy",
  "night",
  "division",
  "nut",
  "school",
  "sisters",
  "flame",
  "destruction",
  "weight",
  "cattle",
  "attraction",
  "sack",
  "boundary",
  "agreement",
  "channel",
  "surprise",
  "direction",
  "stop",
  "men",
  "cup",
  "shade",
  "cactus",
  "volleyball",
  "metal",
  "jar",
  "force",
  "insect",
  "cover",
  "haircut",
  "blood",
  "nation",
  "seat",
  "account",
  "stage",
  "car",
  "poison",
  "wing",
  "foot",
  "instrument",
  "increase",
  "cars",
  "truck",
  "cannon",
  "jump",
  "voyage",
  "bubble",
  "blade",
  "plants",
  "protest",
  "bone",
  "song",
  "stew",
  "zephyr",
  "sign",
  "corn",
  "trade",
  "committee",
  "reason",
  "sleep",
  "ocean",
  "mask",
  "offer",
  "breath",
  "volcano",
  "tail",
  "battle",
  "spade",
  "toys",
  "worm",
  "order",
  "heat",
  "oatmeal",
  "position",
  "sink",
  "quilt",
  "floor",
  "brass",
  "gun",
  "ducks",
  "ink",
  "friend",
  "soup",
  "railway",
  "badge",
  "flag",
  "pigs",
  "meal",
  "hand",
  "birds",
  "territory",
  "rate",
  "duck",
  "grandfather",
  "rat",
  "tomatoes",
  "desk",
  "farm",
  "bite",
  "silver",
  "pizzas",
  "comparison",
  "addition",
  "winter",
  "basketball",
  "spring",
  "deer",
  "talk",
  "birthday",
  "picture",
  "drawer",
  "toad",
  "thing",
  "boat",
  "aunt",
  "hope",
  "structure",
  "string",
  "limit",
  "plantation",
  "loss",
  "start",
  "wound",
  "distance",
  "tub",
  "tent",
  "space",
  "history",
  "island",
  "scarf",
  "adjustment",
  "rain",
  "needle",
  "lumber",
  "thread",
  "library",
  "advertisement",
  "board",
  "soap",
  "event",
  "guide",
  "prose",
  "animal",
  "receipt",
  "impulse",
  "coil",
  "pancake",
  "balance",
  "office",
  "wall",
  "carriage",
  "pear",
  "machine",
  "bells",
  "star",
  "sweater",
  "desire",
  "wrist",
  "mass",
  "dad",
  "shoes",
  "mouth",
  "income",
  "gate",
  "bridge",
  "daughter",
  "trucks",
  "books",
  "oil",
  "pet",
  "rub",
  "horses",
  "discussion",
  "treatment",
  "rabbit",
  "invention",
  "day",
  "rings",
  "snakes",
  "market",
  "quince",
  "calendar",
  "ants",
  "place",
  "team",
  "stomach",
  "rice",
  "art",
  "soda",
  "grape",
  "pin",
  "swing",
  "crowd",
  "hair",
  "value",
  "walk",
  "example",
  "dog",
  "juice",
  "mitten",
  "development",
  "button",
  "person",
  "credit",
  "visitor",
  "canvas",
  "bird",
  "umbrella",
  "mint",
  "cake",
  "stretch",
  "title",
  "skirt",
  "sheep",
  "screw",
  "toothbrush",
  "scale",
  "doctor",
  "man",
  "bath",
  "push",
  "eyes",
  "part",
  "tongue",
  "control",
  "cushion",
  "shelf",
  "border",
  "produce",
  "brick",
  "mother",
  "camera",
  "building",
  "scene",
  "hose",
  "rhythm",
  "laborer",
  "head",
  "run",
  "property",
  "children",
  "step",
  "humor",
  "cows",
  "flock",
  "dolls",
  "steam",
  "legs",
  "coat",
  "servant",
  "shoe",
  "geese",
  "jeans",
  "cobweb",
  "beef",
  "wave",
  "sun",
  "jellyfish",
  "brother",
  "drink",
  "smash",
  "oven",
  "friction",
  "meat",
  "sneeze",
  "plate",
  "quiet",
  "mailbox",
  "tray",
  "whip",
  "powder",
  "memory",
  "can",
  "low",
  "cemetery",
  "roll",
  "horse",
  "observation",
  "ship",
  "fruit",
  "pickle",
  "friends",
  "camp",
  "harbor",
  "harmony",
  "horn",
  "design",
  "queen",
  "flavor",
  "riddle",
  "approval",
  "rose",
  "hydrant",
  "hat",
  "flesh",
  "slope",
  "end",
  "experience",
  "dust",
  "scarecrow",
  "veil",
  "silk",
  "match",
  "throat",
  "pan",
  "appliance",
  "power",
  "wine",
  "train",
  "vein",
  "pencil",
  "doll",
  "bushes",
  "stone",
  "thumb",
  "kiss",
  "year",
  "price",
  "monkey",
  "sofa",
  "quill",
  "flower",
  "lace",
  "chin",
  "robin",
  "chance",
  "pollution",
  "zoo",
  "leg",
  "payment",
  "holiday"
];

export const generateSecret = () => {
  const randomAdj = Math.floor(Math.random() * adjs.length);
  const randomNoun = Math.floor(Math.random() * nouns.length);
  return `${adjs[randomAdj]} ${nouns[randomNoun]}`;
};
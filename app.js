const ingredients = [
  {
    "id": "acorn",
    "name": "Acorn",
    "type": "cooking",
    "tag": "material",
    "icon": "A",
    "color": "#72808a",
    "image": "assets/ingredient-icons/acorn.webp"
  },
  {
    "id": "ancient-arowana",
    "name": "Ancient Arowana",
    "type": "food",
    "tag": "fish",
    "icon": "AA",
    "color": "#3f7894",
    "image": "assets/ingredient-icons/ancient-arowana.webp"
  },
  {
    "id": "apple",
    "name": "Apple",
    "type": "food",
    "tag": "fruit",
    "icon": "A",
    "color": "#b94d45",
    "image": "assets/ingredient-icons/apple.webp"
  },
  {
    "id": "armoranth",
    "name": "Armoranth",
    "type": "effect",
    "tag": "defense",
    "icon": "A",
    "color": "#617582",
    "image": "assets/ingredient-icons/armoranth.webp"
  },
  {
    "id": "armored-carp",
    "name": "Armored Carp",
    "type": "effect",
    "tag": "defense",
    "icon": "AC",
    "color": "#617582",
    "image": "assets/ingredient-icons/armored-carp.webp"
  },
  {
    "id": "armored-porgy",
    "name": "Armored Porgy",
    "type": "effect",
    "tag": "defense",
    "icon": "AP",
    "color": "#617582",
    "image": "assets/ingredient-icons/armored-porgy.webp"
  },
  {
    "id": "big-hearty-radish",
    "name": "Big Hearty Radish",
    "type": "effect",
    "tag": "hearty",
    "icon": "BH",
    "color": "#c35b69",
    "image": "assets/ingredient-icons/big-hearty-radish.webp"
  },
  {
    "id": "big-hearty-truffle",
    "name": "Big Hearty Truffle",
    "type": "effect",
    "tag": "hearty",
    "icon": "BH",
    "color": "#c35b69",
    "image": "assets/ingredient-icons/big-hearty-truffle.webp"
  },
  {
    "id": "bird-egg",
    "name": "Bird Egg",
    "type": "food",
    "tag": "meat",
    "icon": "BE",
    "color": "#9c3f3e",
    "image": "assets/ingredient-icons/bird-egg.webp"
  },
  {
    "id": "bladed-rhino-beetle",
    "name": "Bladed Rhino Beetle",
    "type": "effect",
    "tag": "attack",
    "icon": "BR",
    "color": "#8c5eb0",
    "image": "assets/ingredient-icons/bladed-rhino-beetle.webp"
  },
  {
    "id": "blue-nightshade",
    "name": "Blue Nightshade",
    "type": "effect",
    "tag": "stealth",
    "icon": "BN",
    "color": "#4d7180",
    "image": "assets/ingredient-icons/blue-nightshade.webp"
  },
  {
    "id": "bright-eyed-crab",
    "name": "Bright-Eyed Crab",
    "type": "effect",
    "tag": "stamina",
    "icon": "BC",
    "color": "#4f9a56",
    "image": "assets/ingredient-icons/bright-eyed-crab.webp"
  },
  {
    "id": "brightcap",
    "name": "Brightcap",
    "type": "effect",
    "tag": "glow",
    "icon": "B",
    "color": "#d6bd52",
    "image": "assets/ingredient-icons/brightcap.webp"
  },
  {
    "id": "cane-sugar",
    "name": "Cane Sugar",
    "type": "cooking",
    "tag": "cooking",
    "icon": "CS",
    "color": "#8b7b5f",
    "image": "assets/ingredient-icons/cane-sugar.webp"
  },
  {
    "id": "cave-fish",
    "name": "Cave Fish",
    "type": "food",
    "tag": "fish",
    "icon": "CF",
    "color": "#3f7894",
    "image": "assets/ingredient-icons/cave-fish.webp"
  },
  {
    "id": "chickaloo-tree-nut",
    "name": "Chickaloo Tree Nut",
    "type": "cooking",
    "tag": "material",
    "icon": "CT",
    "color": "#72808a",
    "image": "assets/ingredient-icons/chickaloo-tree-nut.webp"
  },
  {
    "id": "chillfin-trout",
    "name": "Chillfin Trout",
    "type": "effect",
    "tag": "heat resist",
    "icon": "CT",
    "color": "#4f8fb1",
    "image": "assets/ingredient-icons/chillfin-trout.webp"
  },
  {
    "id": "chillshroom",
    "name": "Chillshroom",
    "type": "effect",
    "tag": "heat resist",
    "icon": "C",
    "color": "#4f8fb1",
    "image": "assets/ingredient-icons/chillshroom.webp"
  },
  {
    "id": "cold-darner",
    "name": "Cold Darner",
    "type": "cooking",
    "tag": "critter",
    "icon": "CD",
    "color": "#6f6f48",
    "image": "assets/ingredient-icons/cold-darner.webp"
  },
  {
    "id": "cool-safflina",
    "name": "Cool Safflina",
    "type": "effect",
    "tag": "heat resist",
    "icon": "CS",
    "color": "#4f8fb1",
    "image": "assets/ingredient-icons/cool-safflina.webp"
  },
  {
    "id": "courser-bee-honey",
    "name": "Courser Bee Honey",
    "type": "effect",
    "tag": "stamina",
    "icon": "CB",
    "color": "#4f9a56",
    "image": "assets/ingredient-icons/courser-bee-honey.webp"
  },
  {
    "id": "dark-clump",
    "name": "Dark Clump",
    "type": "cooking",
    "tag": "cooking",
    "icon": "DC",
    "color": "#8b7b5f",
    "image": "assets/ingredient-icons/dark-clump.webp"
  },
  {
    "id": "deep-firefly",
    "name": "Deep Firefly",
    "type": "effect",
    "tag": "glow",
    "icon": "DF",
    "color": "#d6bd52",
    "image": "assets/ingredient-icons/deep-firefly.webp"
  },
  {
    "id": "electric-darner",
    "name": "Electric Darner",
    "type": "effect",
    "tag": "shock resist",
    "icon": "ED",
    "color": "#b69b32",
    "image": "assets/ingredient-icons/electric-darner.webp"
  },
  {
    "id": "electric-safflina",
    "name": "Electric Safflina",
    "type": "effect",
    "tag": "shock resist",
    "icon": "ES",
    "color": "#b69b32",
    "image": "assets/ingredient-icons/electric-safflina.webp"
  },
  {
    "id": "endura-carrot",
    "name": "Endura Carrot",
    "type": "effect",
    "tag": "stamina",
    "icon": "EC",
    "color": "#4f9a56",
    "image": "assets/ingredient-icons/endura-carrot.webp"
  },
  {
    "id": "endura-shroom",
    "name": "Endura Shroom",
    "type": "effect",
    "tag": "stamina",
    "icon": "ES",
    "color": "#4f9a56",
    "image": "assets/ingredient-icons/endura-shroom.webp"
  },
  {
    "id": "energetic-rhino-beetle",
    "name": "Energetic Rhino Beetle",
    "type": "effect",
    "tag": "stamina",
    "icon": "ER",
    "color": "#4f9a56",
    "image": "assets/ingredient-icons/energetic-rhino-beetle.webp"
  },
  {
    "id": "fairy",
    "name": "Fairy",
    "type": "effect",
    "tag": "hearty",
    "icon": "F",
    "color": "#c35b69",
    "image": "assets/ingredient-icons/fairy.webp"
  },
  {
    "id": "fireproof-lizard",
    "name": "Fireproof Lizard",
    "type": "effect",
    "tag": "fireproof",
    "icon": "FL",
    "color": "#bd573b",
    "image": "assets/ingredient-icons/fireproof-lizard.webp"
  },
  {
    "id": "fleet-lotus-seeds",
    "name": "Fleet-Lotus Seeds",
    "type": "effect",
    "tag": "speed",
    "icon": "FS",
    "color": "#d28539",
    "image": "assets/ingredient-icons/fleet-lotus-seeds.webp"
  },
  {
    "id": "fortified-pumpkin",
    "name": "Fortified Pumpkin",
    "type": "food",
    "tag": "plant",
    "icon": "FP",
    "color": "#4f8b52",
    "image": "assets/ingredient-icons/fortified-pumpkin.webp"
  },
  {
    "id": "fresh-milk",
    "name": "Fresh Milk",
    "type": "cooking",
    "tag": "cooking",
    "icon": "FM",
    "color": "#8b7b5f",
    "image": "assets/ingredient-icons/fresh-milk.webp"
  },
  {
    "id": "gemstone",
    "name": "Gemstone",
    "type": "cooking",
    "tag": "material",
    "icon": "G",
    "color": "#72808a",
    "image": "assets/ingredient-icons/gemstone.webp"
  },
  {
    "id": "glowing-cave-fish",
    "name": "Glowing Cave Fish",
    "type": "effect",
    "tag": "glow",
    "icon": "GC",
    "color": "#d6bd52",
    "image": "assets/ingredient-icons/glowing-cave-fish.webp"
  },
  {
    "id": "goat-butter",
    "name": "Goat Butter",
    "type": "cooking",
    "tag": "cooking",
    "icon": "GB",
    "color": "#8b7b5f",
    "image": "assets/ingredient-icons/goat-butter.webp"
  },
  {
    "id": "golden-apple",
    "name": "Golden Apple",
    "type": "food",
    "tag": "fruit",
    "icon": "GA",
    "color": "#b94d45",
    "image": "assets/ingredient-icons/golden-apple.webp"
  },
  {
    "id": "goron-spice",
    "name": "Goron Spice",
    "type": "cooking",
    "tag": "cooking",
    "icon": "GS",
    "color": "#8b7b5f",
    "image": "assets/ingredient-icons/goron-spice.webp"
  },
  {
    "id": "hateno-cheese",
    "name": "Hateno Cheese",
    "type": "cooking",
    "tag": "cooking",
    "icon": "HC",
    "color": "#8b7b5f",
    "image": "assets/ingredient-icons/hateno-cheese.webp"
  },
  {
    "id": "hearty-bass",
    "name": "Hearty Bass",
    "type": "effect",
    "tag": "hearty",
    "icon": "HB",
    "color": "#c35b69",
    "image": "assets/ingredient-icons/hearty-bass.webp"
  },
  {
    "id": "hearty-blueshell-snail",
    "name": "Hearty Blueshell Snail",
    "type": "effect",
    "tag": "hearty",
    "icon": "HB",
    "color": "#c35b69",
    "image": "assets/ingredient-icons/hearty-blueshell-snail.webp"
  },
  {
    "id": "hearty-durian",
    "name": "Hearty Durian",
    "type": "effect",
    "tag": "hearty",
    "icon": "HD",
    "color": "#c35b69",
    "image": "assets/ingredient-icons/hearty-durian.webp"
  },
  {
    "id": "hearty-lizard",
    "name": "Hearty Lizard",
    "type": "effect",
    "tag": "hearty",
    "icon": "HL",
    "color": "#c35b69",
    "image": "assets/ingredient-icons/hearty-lizard.webp"
  },
  {
    "id": "hearty-radish",
    "name": "Hearty Radish",
    "type": "effect",
    "tag": "hearty",
    "icon": "HR",
    "color": "#c35b69",
    "image": "assets/ingredient-icons/hearty-radish.webp"
  },
  {
    "id": "hearty-salmon",
    "name": "Hearty Salmon",
    "type": "effect",
    "tag": "hearty",
    "icon": "HS",
    "color": "#c35b69",
    "image": "assets/ingredient-icons/hearty-salmon.webp"
  },
  {
    "id": "hearty-truffle",
    "name": "Hearty Truffle",
    "type": "effect",
    "tag": "hearty",
    "icon": "HT",
    "color": "#c35b69",
    "image": "assets/ingredient-icons/hearty-truffle.webp"
  },
  {
    "id": "hightail-lizard",
    "name": "Hightail Lizard",
    "type": "effect",
    "tag": "speed",
    "icon": "HL",
    "color": "#d28539",
    "image": "assets/ingredient-icons/hightail-lizard.webp"
  },
  {
    "id": "hot-footed-frog",
    "name": "Hot-Footed Frog",
    "type": "effect",
    "tag": "speed",
    "icon": "HF",
    "color": "#d28539",
    "image": "assets/ingredient-icons/hot-footed-frog.webp"
  },
  {
    "id": "hydromelon",
    "name": "Hydromelon",
    "type": "effect",
    "tag": "heat resist",
    "icon": "H",
    "color": "#4f8fb1",
    "image": "assets/ingredient-icons/hydromelon.webp"
  },
  {
    "id": "hylian-rice",
    "name": "Hylian Rice",
    "type": "cooking",
    "tag": "cooking",
    "icon": "HR",
    "color": "#8b7b5f",
    "image": "assets/ingredient-icons/hylian-rice.webp"
  },
  {
    "id": "hylian-shroom",
    "name": "Hylian Shroom",
    "type": "food",
    "tag": "mushroom",
    "icon": "HS",
    "color": "#9b6b3d",
    "image": "assets/ingredient-icons/hylian-shroom.webp"
  },
  {
    "id": "hylian-tomato",
    "name": "Hylian Tomato",
    "type": "food",
    "tag": "fruit",
    "icon": "HT",
    "color": "#b94d45",
    "image": "assets/ingredient-icons/hylian-tomato.webp"
  },
  {
    "id": "hyrule-bass",
    "name": "Hyrule Bass",
    "type": "food",
    "tag": "fish",
    "icon": "HB",
    "color": "#3f7894",
    "image": "assets/ingredient-icons/hyrule-bass.webp"
  },
  {
    "id": "hyrule-herb",
    "name": "Hyrule Herb",
    "type": "food",
    "tag": "plant",
    "icon": "HH",
    "color": "#4f8b52",
    "image": "assets/ingredient-icons/hyrule-herb.webp"
  },
  {
    "id": "ironshell-crab",
    "name": "Ironshell Crab",
    "type": "effect",
    "tag": "defense",
    "icon": "IC",
    "color": "#617582",
    "image": "assets/ingredient-icons/ironshell-crab.webp"
  },
  {
    "id": "ironshroom",
    "name": "Ironshroom",
    "type": "effect",
    "tag": "defense",
    "icon": "I",
    "color": "#617582",
    "image": "assets/ingredient-icons/ironshroom.webp"
  },
  {
    "id": "mighty-bananas",
    "name": "Mighty Bananas",
    "type": "effect",
    "tag": "attack",
    "icon": "MB",
    "color": "#8c5eb0",
    "image": "assets/ingredient-icons/mighty-bananas.webp"
  },
  {
    "id": "mighty-carp",
    "name": "Mighty Carp",
    "type": "effect",
    "tag": "attack",
    "icon": "MC",
    "color": "#8c5eb0",
    "image": "assets/ingredient-icons/mighty-carp.webp"
  },
  {
    "id": "mighty-porgy",
    "name": "Mighty Porgy",
    "type": "effect",
    "tag": "attack",
    "icon": "MP",
    "color": "#8c5eb0",
    "image": "assets/ingredient-icons/mighty-porgy.webp"
  },
  {
    "id": "mighty-thistle",
    "name": "Mighty Thistle",
    "type": "effect",
    "tag": "attack",
    "icon": "MT",
    "color": "#8c5eb0",
    "image": "assets/ingredient-icons/mighty-thistle.webp"
  },
  {
    "id": "monster-extract",
    "name": "Monster Extract",
    "type": "cooking",
    "tag": "cooking",
    "icon": "ME",
    "color": "#8b7b5f",
    "image": "assets/ingredient-icons/monster-extract.webp"
  },
  {
    "id": "monster-part",
    "name": "Monster Part",
    "type": "cooking",
    "tag": "material",
    "icon": "MP",
    "color": "#72808a",
    "image": "assets/ingredient-icons/monster-part.webp"
  },
  {
    "id": "oil-jar",
    "name": "Oil Jar",
    "type": "cooking",
    "tag": "cooking",
    "icon": "OJ",
    "color": "#8b7b5f",
    "image": "assets/ingredient-icons/oil-jar.webp"
  },
  {
    "id": "palm-fruit",
    "name": "Palm Fruit",
    "type": "food",
    "tag": "fruit",
    "icon": "PF",
    "color": "#b94d45",
    "image": "assets/ingredient-icons/palm-fruit.webp"
  },
  {
    "id": "raw-bird-drumstick",
    "name": "Raw Bird Drumstick",
    "type": "food",
    "tag": "meat",
    "icon": "RB",
    "color": "#9c3f3e",
    "image": "assets/ingredient-icons/raw-bird-drumstick.webp"
  },
  {
    "id": "raw-bird-thigh",
    "name": "Raw Bird Thigh",
    "type": "food",
    "tag": "meat",
    "icon": "RB",
    "color": "#9c3f3e",
    "image": "assets/ingredient-icons/raw-bird-thigh.webp"
  },
  {
    "id": "raw-gourmet-meat",
    "name": "Raw Gourmet Meat",
    "type": "food",
    "tag": "meat",
    "icon": "RG",
    "color": "#9c3f3e",
    "image": "assets/ingredient-icons/raw-gourmet-meat.webp"
  },
  {
    "id": "raw-meat",
    "name": "Raw Meat",
    "type": "food",
    "tag": "meat",
    "icon": "RM",
    "color": "#9c3f3e",
    "image": "assets/ingredient-icons/raw-meat.webp"
  },
  {
    "id": "raw-prime-meat",
    "name": "Raw Prime Meat",
    "type": "food",
    "tag": "meat",
    "icon": "RP",
    "color": "#9c3f3e",
    "image": "assets/ingredient-icons/raw-prime-meat.webp"
  },
  {
    "id": "raw-whole-bird",
    "name": "Raw Whole Bird",
    "type": "food",
    "tag": "meat",
    "icon": "RW",
    "color": "#9c3f3e",
    "image": "assets/ingredient-icons/raw-whole-bird.webp"
  },
  {
    "id": "razorclaw-crab",
    "name": "Razorclaw Crab",
    "type": "effect",
    "tag": "attack",
    "icon": "RC",
    "color": "#8c5eb0",
    "image": "assets/ingredient-icons/razorclaw-crab.webp"
  },
  {
    "id": "razorshroom",
    "name": "Razorshroom",
    "type": "effect",
    "tag": "attack",
    "icon": "R",
    "color": "#8c5eb0",
    "image": "assets/ingredient-icons/razorshroom.webp"
  },
  {
    "id": "restless-cricket",
    "name": "Restless Cricket",
    "type": "effect",
    "tag": "stamina",
    "icon": "RC",
    "color": "#4f9a56",
    "image": "assets/ingredient-icons/restless-cricket.webp"
  },
  {
    "id": "rock-salt",
    "name": "Rock Salt",
    "type": "cooking",
    "tag": "cooking",
    "icon": "RS",
    "color": "#8b7b5f",
    "image": "assets/ingredient-icons/rock-salt.webp"
  },
  {
    "id": "rugged-rhino-beetle",
    "name": "Rugged Rhino Beetle",
    "type": "effect",
    "tag": "defense",
    "icon": "RR",
    "color": "#617582",
    "image": "assets/ingredient-icons/rugged-rhino-beetle.webp"
  },
  {
    "id": "rushroom",
    "name": "Rushroom",
    "type": "effect",
    "tag": "speed",
    "icon": "R",
    "color": "#d28539",
    "image": "assets/ingredient-icons/rushroom.webp"
  },
  {
    "id": "sanke-carp",
    "name": "Sanke Carp",
    "type": "food",
    "tag": "fish",
    "icon": "SC",
    "color": "#3f7894",
    "image": "assets/ingredient-icons/sanke-carp.webp"
  },
  {
    "id": "silent-shroom",
    "name": "Silent Shroom",
    "type": "effect",
    "tag": "stealth",
    "icon": "SS",
    "color": "#4d7180",
    "image": "assets/ingredient-icons/silent-shroom.webp"
  },
  {
    "id": "sizzlefin-trout",
    "name": "Sizzlefin Trout",
    "type": "effect",
    "tag": "cold resist",
    "icon": "ST",
    "color": "#c8663d",
    "image": "assets/ingredient-icons/sizzlefin-trout.webp"
  },
  {
    "id": "skyshroom",
    "name": "Skyshroom",
    "type": "food",
    "tag": "mushroom",
    "icon": "S",
    "color": "#9b6b3d",
    "image": "assets/ingredient-icons/skyshroom.webp"
  },
  {
    "id": "smotherwing-butterfly",
    "name": "Smotherwing Butterfly",
    "type": "effect",
    "tag": "fireproof",
    "icon": "SB",
    "color": "#bd573b",
    "image": "assets/ingredient-icons/smotherwing-butterfly.webp"
  },
  {
    "id": "sneaky-river-snail",
    "name": "Sneaky River Snail",
    "type": "effect",
    "tag": "stealth",
    "icon": "SR",
    "color": "#4d7180",
    "image": "assets/ingredient-icons/sneaky-river-snail.webp"
  },
  {
    "id": "spicy-pepper",
    "name": "Spicy Pepper",
    "type": "effect",
    "tag": "cold resist",
    "icon": "SP",
    "color": "#c8663d",
    "image": "assets/ingredient-icons/spicy-pepper.webp"
  },
  {
    "id": "stambulb",
    "name": "Stambulb",
    "type": "food",
    "tag": "plant",
    "icon": "S",
    "color": "#4f8b52",
    "image": "assets/ingredient-icons/stambulb.webp"
  },
  {
    "id": "stamella-shroom",
    "name": "Stamella Shroom",
    "type": "effect",
    "tag": "stamina",
    "icon": "SS",
    "color": "#4f9a56",
    "image": "assets/ingredient-icons/stamella-shroom.webp"
  },
  {
    "id": "staminoka-bass",
    "name": "Staminoka Bass",
    "type": "effect",
    "tag": "stamina",
    "icon": "SB",
    "color": "#4f9a56",
    "image": "assets/ingredient-icons/staminoka-bass.webp"
  },
  {
    "id": "stealthfin-trout",
    "name": "Stealthfin Trout",
    "type": "effect",
    "tag": "stealth",
    "icon": "ST",
    "color": "#4d7180",
    "image": "assets/ingredient-icons/stealthfin-trout.webp"
  },
  {
    "id": "sticky-frog",
    "name": "Sticky Frog",
    "type": "effect",
    "tag": "sticky",
    "icon": "SF",
    "color": "#5f8a61",
    "image": "assets/ingredient-icons/sticky-frog.webp"
  },
  {
    "id": "sticky-lizard",
    "name": "Sticky Lizard",
    "type": "effect",
    "tag": "sticky",
    "icon": "SL",
    "color": "#5f8a61",
    "image": "assets/ingredient-icons/sticky-lizard.webp"
  },
  {
    "id": "summerwing-butterfly",
    "name": "Summerwing Butterfly",
    "type": "effect",
    "tag": "cold resist",
    "icon": "SB",
    "color": "#c8663d",
    "image": "assets/ingredient-icons/summerwing-butterfly.webp"
  },
  {
    "id": "sun-pumpkin",
    "name": "Sun Pumpkin",
    "type": "effect",
    "tag": "sunny",
    "icon": "SP",
    "color": "#d8a241",
    "image": "assets/ingredient-icons/sun-pumpkin.webp"
  },
  {
    "id": "sunset-firefly",
    "name": "Sunset Firefly",
    "type": "effect",
    "tag": "stealth",
    "icon": "SF",
    "color": "#4d7180",
    "image": "assets/ingredient-icons/sunset-firefly.webp"
  },
  {
    "id": "sunshroom",
    "name": "Sunshroom",
    "type": "effect",
    "tag": "cold resist",
    "icon": "S",
    "color": "#c8663d",
    "image": "assets/ingredient-icons/sunshroom.webp"
  },
  {
    "id": "swift-carrot",
    "name": "Swift Carrot",
    "type": "effect",
    "tag": "speed",
    "icon": "SC",
    "color": "#d28539",
    "image": "assets/ingredient-icons/swift-carrot.webp"
  },
  {
    "id": "swift-violet",
    "name": "Swift Violet",
    "type": "effect",
    "tag": "speed",
    "icon": "SV",
    "color": "#d28539",
    "image": "assets/ingredient-icons/swift-violet.webp"
  },
  {
    "id": "tabantha-wheat",
    "name": "Tabantha Wheat",
    "type": "cooking",
    "tag": "cooking",
    "icon": "TW",
    "color": "#8b7b5f",
    "image": "assets/ingredient-icons/tabantha-wheat.webp"
  },
  {
    "id": "thunderwing-butterfly",
    "name": "Thunderwing Butterfly",
    "type": "effect",
    "tag": "shock resist",
    "icon": "TB",
    "color": "#b69b32",
    "image": "assets/ingredient-icons/thunderwing-butterfly.webp"
  },
  {
    "id": "tireless-frog",
    "name": "Tireless Frog",
    "type": "cooking",
    "tag": "critter",
    "icon": "TF",
    "color": "#6f6f48",
    "image": "assets/ingredient-icons/tireless-frog.webp"
  },
  {
    "id": "voltfin-trout",
    "name": "Voltfin Trout",
    "type": "effect",
    "tag": "shock resist",
    "icon": "VT",
    "color": "#b69b32",
    "image": "assets/ingredient-icons/voltfin-trout.webp"
  },
  {
    "id": "voltfruit",
    "name": "Voltfruit",
    "type": "effect",
    "tag": "shock resist",
    "icon": "V",
    "color": "#b69b32",
    "image": "assets/ingredient-icons/voltfruit.webp"
  },
  {
    "id": "warm-darner",
    "name": "Warm Darner",
    "type": "effect",
    "tag": "cold resist",
    "icon": "WD",
    "color": "#c8663d",
    "image": "assets/ingredient-icons/warm-darner.webp"
  },
  {
    "id": "warm-safflina",
    "name": "Warm Safflina",
    "type": "effect",
    "tag": "cold resist",
    "icon": "WS",
    "color": "#c8663d",
    "image": "assets/ingredient-icons/warm-safflina.webp"
  },
  {
    "id": "wildberry",
    "name": "Wildberry",
    "type": "food",
    "tag": "fruit",
    "icon": "W",
    "color": "#b94d45",
    "image": "assets/ingredient-icons/wildberry.webp"
  },
  {
    "id": "winterwing-butterfly",
    "name": "Winterwing Butterfly",
    "type": "effect",
    "tag": "heat resist",
    "icon": "WB",
    "color": "#4f8fb1",
    "image": "assets/ingredient-icons/winterwing-butterfly.webp"
  },
  {
    "id": "wood",
    "name": "Wood",
    "type": "cooking",
    "tag": "material",
    "icon": "W",
    "color": "#72808a",
    "image": "assets/ingredient-icons/wood.webp"
  },
  {
    "id": "zapshroom",
    "name": "Zapshroom",
    "type": "effect",
    "tag": "shock resist",
    "icon": "Z",
    "color": "#b69b32",
    "image": "assets/ingredient-icons/zapshroom.webp"
  }
];

const groups = {
  "fruit": [
    "apple",
    "golden-apple",
    "palm-fruit",
    "wildberry",
    "hydromelon",
    "voltfruit",
    "mighty-bananas",
    "spicy-pepper",
    "hylian-tomato",
    "hearty-durian",
    "fleet-lotus-seeds"
  ],
  "nonPepperFruit": [
    "apple",
    "golden-apple",
    "palm-fruit",
    "wildberry",
    "hydromelon",
    "voltfruit",
    "mighty-bananas",
    "hylian-tomato",
    "hearty-durian",
    "fleet-lotus-seeds"
  ],
  "mushroom": [
    "hylian-shroom",
    "skyshroom",
    "stamella-shroom",
    "rushroom",
    "sunshroom",
    "chillshroom",
    "zapshroom",
    "razorshroom",
    "ironshroom",
    "silent-shroom",
    "brightcap",
    "endura-shroom",
    "hearty-truffle",
    "big-hearty-truffle"
  ],
  "meat": [
    "raw-meat",
    "raw-prime-meat",
    "raw-gourmet-meat",
    "raw-bird-drumstick",
    "raw-bird-thigh",
    "raw-whole-bird"
  ],
  "fish": [
    "hyrule-bass",
    "hearty-bass",
    "staminoka-bass",
    "mighty-carp",
    "armored-carp",
    "sanke-carp",
    "ancient-arowana",
    "chillfin-trout",
    "sizzlefin-trout",
    "voltfin-trout",
    "stealthfin-trout",
    "mighty-porgy",
    "armored-porgy",
    "hearty-salmon",
    "cave-fish",
    "glowing-cave-fish"
  ],
  "seafood": [
    "hyrule-bass",
    "hearty-bass",
    "staminoka-bass",
    "mighty-carp",
    "armored-carp",
    "sanke-carp",
    "ancient-arowana",
    "chillfin-trout",
    "sizzlefin-trout",
    "voltfin-trout",
    "stealthfin-trout",
    "mighty-porgy",
    "armored-porgy",
    "hearty-salmon",
    "cave-fish",
    "glowing-cave-fish",
    "hearty-blueshell-snail",
    "sneaky-river-snail",
    "razorclaw-crab",
    "ironshell-crab",
    "bright-eyed-crab"
  ],
  "crab": [
    "razorclaw-crab",
    "ironshell-crab",
    "bright-eyed-crab"
  ],
  "vegetable": [
    "hyrule-herb",
    "mighty-thistle",
    "armoranth",
    "blue-nightshade",
    "cool-safflina",
    "warm-safflina",
    "electric-safflina",
    "swift-violet",
    "swift-carrot",
    "endura-carrot",
    "fortified-pumpkin",
    "sun-pumpkin",
    "hearty-radish",
    "big-hearty-radish",
    "stambulb",
    "fleet-lotus-seeds"
  ],
  "plant": [
    "hyrule-herb",
    "mighty-thistle",
    "armoranth",
    "blue-nightshade",
    "cool-safflina",
    "warm-safflina",
    "electric-safflina",
    "swift-violet",
    "swift-carrot",
    "endura-carrot",
    "fortified-pumpkin",
    "sun-pumpkin",
    "hearty-radish",
    "big-hearty-radish",
    "stambulb",
    "fleet-lotus-seeds"
  ],
  "nut": [
    "acorn",
    "chickaloo-tree-nut"
  ],
  "porgy": [
    "mighty-porgy",
    "armored-porgy"
  ],
  "trout": [
    "chillfin-trout",
    "sizzlefin-trout",
    "voltfin-trout",
    "stealthfin-trout"
  ],
  "carp": [
    "mighty-carp",
    "armored-carp",
    "sanke-carp"
  ],
  "critter": [
    "restless-cricket",
    "energetic-rhino-beetle",
    "hightail-lizard",
    "hot-footed-frog",
    "warm-darner",
    "summerwing-butterfly",
    "winterwing-butterfly",
    "cold-darner",
    "electric-darner",
    "thunderwing-butterfly",
    "fireproof-lizard",
    "smotherwing-butterfly",
    "bladed-rhino-beetle",
    "rugged-rhino-beetle",
    "sunset-firefly",
    "sticky-lizard",
    "sticky-frog",
    "hearty-lizard",
    "deep-firefly"
  ]
};

const any = (label, ids) => ({ label, ids });

const recipeCatalog = [
  {
    "name": "Apple Pie",
    "number": "131",
    "ingredients": [
      "tabantha-wheat",
      "cane-sugar",
      "goat-butter",
      "apple"
    ],
    "hearts": 3,
    "effect": "Varies by ingredients",
    "foodEffect": "3 heart(s) recovered Effects vary based on number of appled used",
    "score": 54,
    "description": "3 heart(s) recovered Effects vary based on number of appled used",
    "image": "assets/recipe-icons/apple-pie-131.png"
  },
  {
    "name": "Baked Apple",
    "number": "147",
    "ingredients": [
      "apple"
    ],
    "hearts": 0.75,
    "effect": "No effect",
    "foodEffect": "0.75 heart(s) recovered",
    "score": 6,
    "description": "0.75 heart(s) recovered",
    "image": "assets/recipe-icons/baked-apple-147.png"
  },
  {
    "name": "Baked Golden Apple",
    "number": "148",
    "ingredients": [
      "golden-apple"
    ],
    "hearts": 2.25,
    "effect": "No effect",
    "foodEffect": "2.25 heart(s) recovered",
    "score": 18,
    "description": "2.25 heart(s) recovered",
    "image": "assets/recipe-icons/baked-golden-apple-148.png"
  },
  {
    "name": "Baked Fortified Pumpkin",
    "number": "161",
    "ingredients": [
      "fortified-pumpkin"
    ],
    "hearts": 0.75,
    "effect": "No effect",
    "foodEffect": "0.75 heart(s) recovered",
    "score": 6,
    "description": "0.75 heart(s) recovered",
    "image": "assets/recipe-icons/baked-fortified-pumpkin-161.png"
  },
  {
    "name": "Baked Palm Fruit",
    "number": "154",
    "ingredients": [
      "palm-fruit"
    ],
    "hearts": 1.75,
    "effect": "No effect",
    "foodEffect": "1.75 heart(s) recovered",
    "score": 14,
    "description": "1.75 heart(s) recovered",
    "image": "assets/recipe-icons/baked-palm-fruit-154.png"
  },
  {
    "name": "Baked Sun Pumpkin",
    "number": "162",
    "ingredients": [
      "sun-pumpkin"
    ],
    "hearts": 0.75,
    "effect": "No effect",
    "foodEffect": "0.75 heart(s) recovered",
    "score": 6,
    "description": "0.75 heart(s) recovered",
    "image": "assets/recipe-icons/baked-sun-pumpkin-162.png"
  },
  {
    "name": "Blackened Crab",
    "number": "193",
    "ingredients": [
      {
        "label": "Any Crab",
        "ids": [
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      }
    ],
    "hearts": 1.5,
    "effect": "No effect",
    "foodEffect": "1.5 heart(s) recovered",
    "score": 12,
    "description": "1.5 heart(s) recovered",
    "image": "assets/recipe-icons/blackened-crab-193.png"
  },
  {
    "name": "Bright Mushroom Skewer",
    "number": "1 (Variant)",
    "ingredients": [
      "brightcap"
    ],
    "hearts": 1,
    "effect": "Glow",
    "foodEffect": "1 heart(s) recovered for every Brightcap used Grants the Glow effect for 2:00 with every Brightcap used. The effect is doubled when 5 Brightcaps are used Effects vary based on number of ingredients used",
    "score": 38,
    "description": "1 heart(s) recovered for every Brightcap used Grants the Glow effect for 2:00 with every Brightcap used. The effect is doubled when 5 Brightcaps are used Effects vary based on number of ingredients used",
    "image": "assets/recipe-icons/bright-mushroom-skewer-1-variant.png"
  },
  {
    "name": "Buttered Stambulb",
    "number": "19",
    "ingredients": [
      "stambulb",
      "goat-butter"
    ],
    "hearts": 1,
    "effect": "Stamina recovery",
    "foodEffect": "1 heart(s) recovered Health recovery and stamina effects vary based on ingredients.",
    "score": 38,
    "description": "1 heart(s) recovered Health recovery and stamina effects vary based on ingredients.",
    "image": "assets/recipe-icons/buttered-stambulb-19.png"
  },
  {
    "name": "Campfire Egg",
    "number": "197",
    "ingredients": [
      "bird-egg"
    ],
    "hearts": 1.5,
    "effect": "No effect",
    "foodEffect": "1.5 heart(s) recovered",
    "score": 12,
    "description": "1.5 heart(s) recovered",
    "image": "assets/recipe-icons/campfire-egg-197.png"
  },
  {
    "name": "Carrot Cake",
    "number": "127",
    "ingredients": [
      {
        "label": "Any Carrot",
        "ids": [
          "swift-carrot",
          "endura-carrot"
        ]
      },
      "cane-sugar",
      "tabantha-wheat",
      "goat-butter"
    ],
    "hearts": 0,
    "effect": "Varies by ingredients",
    "foodEffect": "Health recover and other effects vary based on carrot used.",
    "score": 30,
    "description": "Health recover and other effects vary based on carrot used.",
    "image": "assets/recipe-icons/carrot-cake-127.png"
  },
  {
    "name": "Carrot Stew",
    "number": "74",
    "ingredients": [
      {
        "label": "Any Carrot",
        "ids": [
          "swift-carrot",
          "endura-carrot"
        ]
      },
      "goat-butter",
      "fresh-milk",
      "tabantha-wheat"
    ],
    "hearts": 0,
    "effect": "Varies by ingredients",
    "foodEffect": "Health recovery and other effects vary based on the carrot used",
    "score": 30,
    "description": "Health recovery and other effects vary based on the carrot used",
    "image": "assets/recipe-icons/carrot-stew-74.png"
  },
  {
    "name": "Charred Pepper",
    "number": "149",
    "ingredients": [
      "spicy-pepper"
    ],
    "hearts": 0.75,
    "effect": "No effect",
    "foodEffect": "0.75 heart(s) recovered",
    "score": 6,
    "description": "0.75 heart(s) recovered",
    "image": "assets/recipe-icons/charred-pepper-149.png"
  },
  {
    "name": "Cheesecake",
    "number": "129",
    "ingredients": [
      "hateno-cheese",
      "tabantha-wheat",
      "cane-sugar",
      "goat-butter"
    ],
    "hearts": 4,
    "effect": "No effect",
    "foodEffect": "4 heart(s) recovered",
    "score": 32,
    "description": "4 heart(s) recovered",
    "image": "assets/recipe-icons/cheesecake-129.png"
  },
  {
    "name": "Cheesy Baked Fish",
    "number": "111",
    "ingredients": [
      "hateno-cheese",
      {
        "label": "Any Seafood",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish",
          "hearty-blueshell-snail",
          "sneaky-river-snail",
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Varies by ingredients",
    "foodEffect": "Health recovery and other effects vary based on ingredients.",
    "score": 30,
    "description": "Health recovery and other effects vary based on ingredients.",
    "image": "assets/recipe-icons/cheesy-baked-fish-111.png"
  },
  {
    "name": "Cheesy Curry",
    "number": "73",
    "ingredients": [
      "hateno-cheese",
      "hylian-rice",
      "goron-spice"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "__effect__",
    "score": 0,
    "description": "__effect__",
    "image": "assets/recipe-icons/cheesy-curry-73.png"
  },
  {
    "name": "Cheesy Meat Bowl",
    "number": "97",
    "ingredients": [
      "raw-meat",
      "hateno-cheese",
      "hylian-rice",
      "rock-salt"
    ],
    "hearts": 6,
    "effect": "Varies by ingredients",
    "foodEffect": "6 heart(s) recovered from base recipe. Health recovery and other effect vary based on ingredients.",
    "score": 78,
    "description": "6 heart(s) recovered from base recipe. Health recovery and other effect vary based on ingredients.",
    "image": "assets/recipe-icons/cheesy-meat-bowl-97.png"
  },
  {
    "name": "Cheesy Omelet",
    "number": "115",
    "ingredients": [
      {
        "label": "Any Mushroom or Plant",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle",
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      },
      "bird-egg",
      "rock-salt",
      "goat-butter",
      "hateno-cheese"
    ],
    "hearts": 0,
    "effect": "Varies by ingredients",
    "foodEffect": "Health recovery and other effects vary based on ingredients.",
    "score": 30,
    "description": "Health recovery and other effects vary based on ingredients.",
    "image": "assets/recipe-icons/cheesy-omelet-115.png"
  },
  {
    "name": "Cheesy Risotto",
    "number": "84",
    "ingredients": [
      "hearty-salmon",
      "hylian-rice",
      "goat-butter",
      "rock-salt",
      "hateno-cheese"
    ],
    "hearts": 0,
    "effect": "Varies by ingredients",
    "foodEffect": "Health recovery and other effects vary based on ingredients",
    "score": 30,
    "description": "Health recovery and other effects vary based on ingredients",
    "image": "assets/recipe-icons/cheesy-risotto-84.png"
  },
  {
    "name": "Cheesy Tomato",
    "number": "110",
    "ingredients": [
      "hylian-tomato",
      "hateno-cheese"
    ],
    "hearts": 0,
    "effect": "Varies by ingredients",
    "foodEffect": "Health recovery and other effects vary based on ingredients.",
    "score": 30,
    "description": "Health recovery and other effects vary based on ingredients.",
    "image": "assets/recipe-icons/cheesy-tomato-110.png"
  },
  {
    "name": "Cooked Stambulb",
    "number": "18",
    "ingredients": [
      "stambulb"
    ],
    "hearts": 0,
    "effect": "Stamina recovery",
    "foodEffect": "Health recovery and stamina effect varies on the number of Stambulb used.",
    "score": 30,
    "description": "Health recovery and stamina effect varies on the number of Stambulb used.",
    "image": "assets/recipe-icons/cooked-stambulb-18.png"
  },
  {
    "name": "Copious Fried Wild Greens",
    "number": "17",
    "ingredients": [
      {
        "label": "Any 4 Vegetables, Flowers, or Herbs",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      },
      {
        "label": "Any 4 Vegetables, Flowers, or Herbs",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      },
      {
        "label": "Any 4 Vegetables, Flowers, or Herbs",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      },
      {
        "label": "Any 4 Vegetables, Flowers, or Herbs",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery Grants a movement-speed boost for a limited time.",
    "score": 50,
    "description": "Full health recovery Grants a movement-speed boost for a limited time.",
    "image": "assets/recipe-icons/copious-fried-wild-greens-17.png"
  },
  {
    "name": "Copious Meat Skewers",
    "number": "7",
    "ingredients": [
      {
        "label": "Any 4 different Meat",
        "ids": [
          "raw-meat",
          "raw-prime-meat",
          "raw-gourmet-meat",
          "raw-bird-drumstick",
          "raw-bird-thigh",
          "raw-whole-bird"
        ]
      },
      {
        "label": "Any 4 different Meat",
        "ids": [
          "raw-meat",
          "raw-prime-meat",
          "raw-gourmet-meat",
          "raw-bird-drumstick",
          "raw-bird-thigh",
          "raw-whole-bird"
        ]
      },
      {
        "label": "Any 4 different Meat",
        "ids": [
          "raw-meat",
          "raw-prime-meat",
          "raw-gourmet-meat",
          "raw-bird-drumstick",
          "raw-bird-thigh",
          "raw-whole-bird"
        ]
      },
      {
        "label": "Any 4 different Meat",
        "ids": [
          "raw-meat",
          "raw-prime-meat",
          "raw-gourmet-meat",
          "raw-bird-drumstick",
          "raw-bird-thigh",
          "raw-whole-bird"
        ]
      }
    ],
    "hearts": 13,
    "effect": "No effect",
    "foodEffect": "13 heart(s) recovered",
    "score": 104,
    "description": "13 heart(s) recovered",
    "image": "assets/recipe-icons/copious-meat-skewers-7.png"
  },
  {
    "name": "Copious Mushroom Skewers",
    "number": "20",
    "ingredients": [
      {
        "label": "Any four different Mushroom",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle"
        ]
      },
      {
        "label": "Any four different Mushroom",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle"
        ]
      },
      {
        "label": "Any four different Mushroom",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle"
        ]
      },
      {
        "label": "Any four different Mushroom",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Varies by ingredients",
    "foodEffect": "Health recovery and other effects vary based on ingredients",
    "score": 30,
    "description": "Health recovery and other effects vary based on ingredients",
    "image": "assets/recipe-icons/copious-mushroom-skewers-20.png"
  },
  {
    "name": "Copious Seafood Skewers",
    "number": "8",
    "ingredients": [
      {
        "label": "Any 4 different Fish",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish"
        ]
      },
      {
        "label": "Any 4 different Fish",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish"
        ]
      },
      {
        "label": "Any 4 different Fish",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish"
        ]
      },
      {
        "label": "Any 4 different Fish",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish"
        ]
      }
    ],
    "hearts": 8,
    "effect": "No effect",
    "foodEffect": "8 heart(s) recovered",
    "score": 64,
    "description": "8 heart(s) recovered",
    "image": "assets/recipe-icons/copious-seafood-skewers-8.png"
  },
  {
    "name": "Copious Simmered Fruit",
    "number": "48",
    "ingredients": [
      {
        "label": "Any 4 different Fruit",
        "ids": [
          "apple",
          "golden-apple",
          "palm-fruit",
          "wildberry",
          "hydromelon",
          "voltfruit",
          "mighty-bananas",
          "spicy-pepper",
          "hylian-tomato",
          "hearty-durian",
          "fleet-lotus-seeds"
        ]
      },
      {
        "label": "Any 4 different Fruit",
        "ids": [
          "apple",
          "golden-apple",
          "palm-fruit",
          "wildberry",
          "hydromelon",
          "voltfruit",
          "mighty-bananas",
          "spicy-pepper",
          "hylian-tomato",
          "hearty-durian",
          "fleet-lotus-seeds"
        ]
      },
      {
        "label": "Any 4 different Fruit",
        "ids": [
          "apple",
          "golden-apple",
          "palm-fruit",
          "wildberry",
          "hydromelon",
          "voltfruit",
          "mighty-bananas",
          "spicy-pepper",
          "hylian-tomato",
          "hearty-durian",
          "fleet-lotus-seeds"
        ]
      },
      {
        "label": "Any 4 different Fruit",
        "ids": [
          "apple",
          "golden-apple",
          "palm-fruit",
          "wildberry",
          "hydromelon",
          "voltfruit",
          "mighty-bananas",
          "spicy-pepper",
          "hylian-tomato",
          "hearty-durian",
          "fleet-lotus-seeds"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery Grants attack-power boost for a limited time.",
    "score": 50,
    "description": "Full health recovery Grants attack-power boost for a limited time.",
    "image": "assets/recipe-icons/copious-simmered-fruit-48.png"
  },
  {
    "name": "Crab Omelet With Rice",
    "number": "93",
    "ingredients": [
      {
        "label": "Any Crab",
        "ids": [
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      },
      "bird-egg",
      "rock-salt",
      "hylian-rice"
    ],
    "hearts": 0,
    "effect": "Varies by ingredients",
    "foodEffect": "Health recovery and other effects vary based on the ingredients",
    "score": 30,
    "description": "Health recovery and other effects vary based on the ingredients",
    "image": "assets/recipe-icons/crab-omelet-with-rice-93.png"
  },
  {
    "name": "Crab Risotto",
    "number": "83",
    "ingredients": [
      {
        "label": "Any Crab",
        "ids": [
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      },
      "hylian-rice",
      "goat-butter",
      "rock-salt"
    ],
    "hearts": 0,
    "effect": "Varies by ingredients",
    "foodEffect": "Health recovery and other effects vary based on the ingredients",
    "score": 30,
    "description": "Health recovery and other effects vary based on the ingredients",
    "image": "assets/recipe-icons/crab-risotto-83.png"
  },
  {
    "name": "Crab Stir-Fry",
    "number": "24",
    "ingredients": [
      {
        "label": "Any Crab",
        "ids": [
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      },
      "goron-spice"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/crab-stir-fry-24.png"
  },
  {
    "name": "Cream of Mushroom Soup",
    "number": "55",
    "ingredients": [
      {
        "label": "Any Mushroom",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle"
        ]
      },
      {
        "label": "Any Vegetable, Flower or Herb",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      },
      "rock-salt",
      "fresh-milk"
    ],
    "hearts": 0,
    "effect": "Varies by ingredients",
    "foodEffect": "Health recovery and other effects vary based on ingredients.",
    "score": 30,
    "description": "Health recovery and other effects vary based on ingredients.",
    "image": "assets/recipe-icons/cream-of-mushroom-soup-55.png"
  },
  {
    "name": "Cream of Vegetable Soup",
    "number": "53",
    "ingredients": [
      {
        "label": "Any Vegetable, Flower or Herb",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      },
      "rock-salt",
      "fresh-milk"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/cream-of-vegetable-soup-53.png"
  },
  {
    "name": "Creamy Heart Soup",
    "number": "59",
    "ingredients": [
      "hearty-radish",
      "hydromelon",
      "voltfruit",
      "fresh-milk"
    ],
    "hearts": 8,
    "effect": "No effect",
    "foodEffect": "8 heart(s) recovered",
    "score": 64,
    "description": "8 heart(s) recovered",
    "image": "assets/recipe-icons/creamy-heart-soup-59.png"
  },
  {
    "name": "Creamy Meat Soup",
    "number": "56",
    "ingredients": [
      {
        "label": "Any Meat",
        "ids": [
          "raw-meat",
          "raw-prime-meat",
          "raw-gourmet-meat",
          "raw-bird-drumstick",
          "raw-bird-thigh",
          "raw-whole-bird"
        ]
      },
      {
        "label": "Any Vegetable, Flower or Herb",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      },
      "rock-salt",
      "fresh-milk"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/creamy-meat-soup-56.png"
  },
  {
    "name": "Creamy Seafood Soup",
    "number": "57",
    "ingredients": [
      {
        "label": "Any Seafood",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish",
          "hearty-blueshell-snail",
          "sneaky-river-snail",
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      },
      {
        "label": "Any Vegetable, Flower or Herb",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      },
      "rock-salt",
      "fresh-milk"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/creamy-seafood-soup-57.png"
  },
  {
    "name": "Crunchy Fried Rice",
    "number": "91",
    "ingredients": [
      {
        "label": "Any Meat",
        "ids": [
          "raw-meat",
          "raw-prime-meat",
          "raw-gourmet-meat",
          "raw-bird-drumstick",
          "raw-bird-thigh",
          "raw-whole-bird"
        ]
      },
      "hylian-rice",
      "oil-jar",
      "bird-egg"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/crunchy-fried-rice-91.png"
  },
  {
    "name": "Curry Pilaf",
    "number": "89",
    "ingredients": [
      "goron-spice",
      "goat-butter",
      "hylian-rice"
    ],
    "hearts": 2,
    "effect": "No effect",
    "foodEffect": "2 heart recovery",
    "score": 16,
    "description": "2 heart recovery",
    "image": "assets/recipe-icons/curry-pilaf-89.png"
  },
  {
    "name": "Curry Rice",
    "number": "64",
    "ingredients": [
      "hylian-rice",
      "goron-spice"
    ],
    "hearts": 2,
    "effect": "No effect",
    "foodEffect": "2 heart(s) recovered",
    "score": 16,
    "description": "2 heart(s) recovered",
    "image": "assets/recipe-icons/curry-rice-64.png"
  },
  {
    "name": "Dark Cake",
    "number": "144",
    "ingredients": [
      "dark-clump",
      "cane-sugar",
      "goat-butter",
      "tabantha-wheat"
    ],
    "hearts": 2,
    "effect": "Gloom recovery",
    "foodEffect": "2 heart(s) recovered low-level gloom protection for 06:10",
    "score": 46,
    "description": "2 heart(s) recovered low-level gloom protection for 06:10",
    "image": "assets/recipe-icons/dark-cake-144.png"
  },
  {
    "name": "Dark Curry",
    "number": "142",
    "ingredients": [
      "dark-clump",
      "goron-spice",
      "hylian-rice"
    ],
    "hearts": 2,
    "effect": "Gloom recovery",
    "foodEffect": "2 heart(s) recovered low-level gloom protection for 05:00",
    "score": 46,
    "description": "2 heart(s) recovered low-level gloom protection for 05:00",
    "image": "assets/recipe-icons/dark-curry-142.png"
  },
  {
    "name": "Dark Rice Ball",
    "number": "143",
    "ingredients": [
      "dark-clump",
      "hylian-rice",
      "rock-salt"
    ],
    "hearts": 2,
    "effect": "Gloom recovery",
    "foodEffect": "2 heart(s) recovered low-level gloom protection for 04:30",
    "score": 46,
    "description": "2 heart(s) recovered low-level gloom protection for 04:30",
    "image": "assets/recipe-icons/dark-rice-ball-143.png"
  },
  {
    "name": "Dark Soup",
    "number": "141",
    "ingredients": [
      "dark-clump",
      "tabantha-wheat",
      "fresh-milk",
      "goat-butter"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "__effect__",
    "score": 0,
    "description": "__effect__",
    "image": "assets/recipe-icons/dark-soup-141.png"
  },
  {
    "name": "Dark Stew",
    "number": "140",
    "ingredients": [
      "dark-clump",
      {
        "label": "Any Meat",
        "ids": [
          "raw-meat",
          "raw-prime-meat",
          "raw-gourmet-meat",
          "raw-bird-drumstick",
          "raw-bird-thigh",
          "raw-whole-bird"
        ]
      },
      {
        "label": "Any Seafood",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish",
          "hearty-blueshell-snail",
          "sneaky-river-snail",
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/dark-stew-140.png"
  },
  {
    "name": "Deep-Fried Drumstick",
    "number": "40",
    "ingredients": [
      "oil-jar",
      "raw-bird-drumstick"
    ],
    "hearts": 2,
    "effect": "No effect",
    "foodEffect": "2 heart(s) recovered Can be modified with other ingredients to improve health recovery and add other buffs",
    "score": 16,
    "description": "2 heart(s) recovered Can be modified with other ingredients to improve health recovery and add other buffs",
    "image": "assets/recipe-icons/deep-fried-drumstick-40.png"
  },
  {
    "name": "Deep-Fried Thigh",
    "number": "41",
    "ingredients": [
      "oil-jar",
      "raw-bird-thigh"
    ],
    "hearts": 3,
    "effect": "No effect",
    "foodEffect": "3 heart(s) recovered Can be modified with other ingredients to improve health recovery and add other buffs",
    "score": 24,
    "description": "3 heart(s) recovered Can be modified with other ingredients to improve health recovery and add other buffs",
    "image": "assets/recipe-icons/deep-fried-thigh-41.png"
  },
  {
    "name": "Deep-Fried Bird Roast",
    "number": "42",
    "ingredients": [
      "oil-jar",
      "raw-whole-bird"
    ],
    "hearts": 3,
    "effect": "No effect",
    "foodEffect": "3 heart(s) recovered Can be modified with other ingredients to improve health recovery and add other buffs",
    "score": 24,
    "description": "3 heart(s) recovered Can be modified with other ingredients to improve health recovery and add other buffs",
    "image": "assets/recipe-icons/deep-fried-bird-roast-42.png"
  },
  {
    "name": "Dubious Food",
    "number": "145",
    "ingredients": [
      {
        "label": "Any incompatible materials",
        "ids": [
          "acorn",
          "ancient-arowana",
          "apple",
          "armoranth",
          "armored-carp",
          "armored-porgy",
          "big-hearty-radish",
          "big-hearty-truffle",
          "bird-egg",
          "bladed-rhino-beetle",
          "blue-nightshade",
          "bright-eyed-crab",
          "brightcap",
          "cane-sugar",
          "cave-fish",
          "chickaloo-tree-nut",
          "chillfin-trout",
          "chillshroom",
          "cold-darner",
          "cool-safflina",
          "courser-bee-honey",
          "dark-clump",
          "deep-firefly",
          "electric-darner",
          "electric-safflina",
          "endura-carrot",
          "endura-shroom",
          "energetic-rhino-beetle",
          "fairy",
          "fireproof-lizard",
          "fleet-lotus-seeds",
          "fortified-pumpkin",
          "fresh-milk",
          "gemstone",
          "glowing-cave-fish",
          "goat-butter",
          "golden-apple",
          "goron-spice",
          "hateno-cheese",
          "hearty-bass",
          "hearty-blueshell-snail",
          "hearty-durian",
          "hearty-lizard",
          "hearty-radish",
          "hearty-salmon",
          "hearty-truffle",
          "hightail-lizard",
          "hot-footed-frog",
          "hydromelon",
          "hylian-rice",
          "hylian-shroom",
          "hylian-tomato",
          "hyrule-bass",
          "hyrule-herb",
          "ironshell-crab",
          "ironshroom",
          "mighty-bananas",
          "mighty-carp",
          "mighty-porgy",
          "mighty-thistle",
          "monster-extract",
          "monster-part",
          "oil-jar",
          "palm-fruit",
          "raw-bird-drumstick",
          "raw-bird-thigh",
          "raw-gourmet-meat",
          "raw-meat",
          "raw-prime-meat",
          "raw-whole-bird",
          "razorclaw-crab",
          "razorshroom",
          "restless-cricket",
          "rock-salt",
          "rugged-rhino-beetle",
          "rushroom",
          "sanke-carp",
          "silent-shroom",
          "sizzlefin-trout",
          "skyshroom",
          "smotherwing-butterfly",
          "sneaky-river-snail",
          "spicy-pepper",
          "stambulb",
          "stamella-shroom",
          "staminoka-bass",
          "stealthfin-trout",
          "sticky-frog",
          "sticky-lizard",
          "summerwing-butterfly",
          "sun-pumpkin",
          "sunset-firefly",
          "sunshroom",
          "swift-carrot",
          "swift-violet",
          "tabantha-wheat",
          "thunderwing-butterfly",
          "tireless-frog",
          "voltfin-trout",
          "voltfruit",
          "warm-darner",
          "warm-safflina",
          "wildberry",
          "winterwing-butterfly",
          "wood",
          "zapshroom"
        ]
      },
      "monster-part"
    ],
    "hearts": 1,
    "effect": "No effect",
    "foodEffect": "1 heart(s) recovered",
    "score": 8,
    "description": "1 heart(s) recovered",
    "image": "assets/recipe-icons/dubious-food-145.png"
  },
  {
    "name": "Egg Pudding",
    "number": "121",
    "ingredients": [
      "fresh-milk",
      "bird-egg",
      "cane-sugar"
    ],
    "hearts": 3,
    "effect": "No effect",
    "foodEffect": "3 heart(s) recovered",
    "score": 24,
    "description": "3 heart(s) recovered",
    "image": "assets/recipe-icons/egg-pudding-121.png"
  },
  {
    "name": "Egg Tart",
    "number": "132",
    "ingredients": [
      "bird-egg",
      "tabantha-wheat",
      "cane-sugar",
      "goat-butter"
    ],
    "hearts": 4,
    "effect": "No effect",
    "foodEffect": "4 heart(s) recovered",
    "score": 32,
    "description": "4 heart(s) recovered",
    "image": "assets/recipe-icons/egg-tart-132.png"
  },
  {
    "name": "Energizing Steamed Fish",
    "number": "13",
    "ingredients": [
      "staminoka-bass",
      "hyrule-herb"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery Stamina recovery",
    "score": 50,
    "description": "Full health recovery Stamina recovery",
    "image": "assets/recipe-icons/energizing-steamed-fish-13.png"
  },
  {
    "name": "Fish and Mushroom Skewer",
    "number": "3",
    "ingredients": [
      {
        "label": "Any Fish",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish"
        ]
      },
      {
        "label": "Any Mushroom",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/fish-and-mushroom-skewer-3.png"
  },
  {
    "name": "Fish Pie",
    "number": "109",
    "ingredients": [
      {
        "label": "Any Seafood",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish",
          "hearty-blueshell-snail",
          "sneaky-river-snail",
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      },
      "goat-butter",
      "rock-salt",
      "tabantha-wheat"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/fish-pie-109.png"
  },
  {
    "name": "Fish Skewer",
    "number": "5",
    "ingredients": [
      {
        "label": "Any Fish",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery Grants attack-power boost for a limited time.",
    "score": 50,
    "description": "Full health recovery Grants attack-power boost for a limited time.",
    "image": "assets/recipe-icons/fish-skewer-5.png"
  },
  {
    "name": "Fragrant Mushroom Sauté",
    "number": "36",
    "ingredients": [
      {
        "label": "Any Mushroom",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle"
        ]
      },
      "goron-spice"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/fragrant-mushroom-saut-36.png"
  },
  {
    "name": "Fragrant Seafood Stew",
    "number": "39",
    "ingredients": [
      {
        "label": "Any Fish or Seafood",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish",
          "hearty-blueshell-snail",
          "sneaky-river-snail",
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      },
      "stambulb",
      "oil-jar"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/fragrant-seafood-stew-39.png"
  },
  {
    "name": "Fried Banana",
    "number": "120",
    "ingredients": [
      "mighty-bananas",
      "tabantha-wheat",
      "cane-sugar"
    ],
    "hearts": 3,
    "effect": "Attack up",
    "foodEffect": "3 heart(s) recovered attack up for 03:10",
    "score": 54,
    "description": "3 heart(s) recovered attack up for 03:10",
    "image": "assets/recipe-icons/fried-banana-120.png"
  },
  {
    "name": "Fried Egg and Rice",
    "number": "90",
    "ingredients": [
      "bird-egg",
      "hylian-rice"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/fried-egg-and-rice-90.png"
  },
  {
    "name": "Fried Wild Greens",
    "number": "16",
    "ingredients": [
      {
        "label": "Any Vegetable, Flower or Herb",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery Grants the Flame Guard effect for a limited time",
    "score": 50,
    "description": "Full health recovery Grants the Flame Guard effect for a limited time",
    "image": "assets/recipe-icons/fried-wild-greens-16.png"
  },
  {
    "name": "Frozen Arowana",
    "number": "205",
    "ingredients": [
      "ancient-arowana"
    ],
    "hearts": 2,
    "effect": "Heat resistance",
    "foodEffect": "2 heart(s) recovered Heat resistance",
    "score": 46,
    "description": "2 heart(s) recovered Heat resistance",
    "image": "assets/recipe-icons/frozen-arowana-205.png"
  },
  {
    "name": "Frozen Bass",
    "number": "206",
    "ingredients": [
      "hyrule-bass",
      "staminoka-bass"
    ],
    "hearts": 2,
    "effect": "Heat resistance",
    "foodEffect": "2 heart(s) recovered Heat resistance",
    "score": 46,
    "description": "2 heart(s) recovered Heat resistance",
    "image": "assets/recipe-icons/frozen-bass-206.png"
  },
  {
    "name": "Frozen Bird Drumstick",
    "number": "202",
    "ingredients": [
      "raw-bird-drumstick"
    ],
    "hearts": 1,
    "effect": "Heat resistance",
    "foodEffect": "1 heart(s) recovered Heat resistance",
    "score": 38,
    "description": "1 heart(s) recovered Heat resistance",
    "image": "assets/recipe-icons/frozen-bird-drumstick-202.png"
  },
  {
    "name": "Frozen Bird Thigh",
    "number": "203",
    "ingredients": [
      "raw-bird-thigh"
    ],
    "hearts": 1.5,
    "effect": "Heat resistance",
    "foodEffect": "1.5 heart(s) recovered Heat resistance",
    "score": 42,
    "description": "1.5 heart(s) recovered Heat resistance",
    "image": "assets/recipe-icons/frozen-bird-thigh-203.png"
  },
  {
    "name": "Frozen Carp",
    "number": "208",
    "ingredients": [
      "armored-carp"
    ],
    "hearts": 1,
    "effect": "Heat resistance",
    "foodEffect": "1 heart(s) recovered Heat resistance",
    "score": 38,
    "description": "1 heart(s) recovered Heat resistance",
    "image": "assets/recipe-icons/frozen-carp-208.png"
  },
  {
    "name": "Frozen Cave Fish",
    "number": "210",
    "ingredients": [
      "cave-fish"
    ],
    "hearts": 2,
    "effect": "Heat resistance",
    "foodEffect": "2 heart(s) recovered Heat resistance",
    "score": 46,
    "description": "2 heart(s) recovered Heat resistance",
    "image": "assets/recipe-icons/frozen-cave-fish-210.png"
  },
  {
    "name": "Frozen Crab",
    "number": "213",
    "ingredients": [
      "ironshell-crab",
      "bright-eyed-crab",
      "razorclaw-crab"
    ],
    "hearts": 2,
    "effect": "Heat resistance",
    "foodEffect": "2 heart(s) recovered Heat resistance",
    "score": 46,
    "description": "2 heart(s) recovered Heat resistance",
    "image": "assets/recipe-icons/frozen-crab-213.png"
  },
  {
    "name": "Frozen Hearty Bass",
    "number": "211",
    "ingredients": [
      "hearty-bass"
    ],
    "hearts": 2,
    "effect": "Heat resistance",
    "foodEffect": "2 heart(s) recovered Heat resistance",
    "score": 46,
    "description": "2 heart(s) recovered Heat resistance",
    "image": "assets/recipe-icons/frozen-hearty-bass-211.png"
  },
  {
    "name": "Frozen Hearty Salmon",
    "number": "212",
    "ingredients": [
      "hearty-salmon"
    ],
    "hearts": 1,
    "effect": "Heat resistance",
    "foodEffect": "1 heart(s) recovered Heat resistance",
    "score": 38,
    "description": "1 heart(s) recovered Heat resistance",
    "image": "assets/recipe-icons/frozen-hearty-salmon-212.png"
  },
  {
    "name": "Frozen Porgy",
    "number": "209",
    "ingredients": [
      {
        "label": "Mighty or Armored Porgy",
        "ids": [
          "mighty-porgy",
          "armored-porgy"
        ]
      }
    ],
    "hearts": 1,
    "effect": "Heat resistance",
    "foodEffect": "1 heart(s) recovered Heat resistance",
    "score": 38,
    "description": "1 heart(s) recovered Heat resistance",
    "image": "assets/recipe-icons/frozen-porgy-209.png"
  },
  {
    "name": "Frozen River Snail",
    "number": "214",
    "ingredients": [
      "sneaky-river-snail"
    ],
    "hearts": 1,
    "effect": "Heat resistance",
    "foodEffect": "1 heart(s) recovered Heat resistance",
    "score": 38,
    "description": "1 heart(s) recovered Heat resistance",
    "image": "assets/recipe-icons/frozen-river-snail-214.png"
  },
  {
    "name": "Frozen Trout",
    "number": "207",
    "ingredients": [
      "voltfin-trout",
      "chillfin-trout",
      "sizzlefin-trout",
      "stealthfin-trout"
    ],
    "hearts": 1,
    "effect": "Heat resistance",
    "foodEffect": "1 heart(s) recovered Heat resistance",
    "score": 38,
    "description": "1 heart(s) recovered Heat resistance",
    "image": "assets/recipe-icons/frozen-trout-207.png"
  },
  {
    "name": "Frozen Whole Bird",
    "number": "204",
    "ingredients": [
      "raw-whole-bird"
    ],
    "hearts": 3,
    "effect": "Heat resistance",
    "foodEffect": "3 heart(s) recovered Heat resistance",
    "score": 54,
    "description": "3 heart(s) recovered Heat resistance",
    "image": "assets/recipe-icons/frozen-whole-bird-204.png"
  },
  {
    "name": "Fruit and Mushroom Mix",
    "number": "46",
    "ingredients": [
      {
        "label": "Any Fruit",
        "ids": [
          "apple",
          "golden-apple",
          "palm-fruit",
          "wildberry",
          "hydromelon",
          "voltfruit",
          "mighty-bananas",
          "spicy-pepper",
          "hylian-tomato",
          "hearty-durian",
          "fleet-lotus-seeds"
        ]
      },
      {
        "label": "Any Mushroom",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery Restores and overfills the Stamina Wheel",
    "score": 50,
    "description": "Full health recovery Restores and overfills the Stamina Wheel",
    "image": "assets/recipe-icons/fruit-and-mushroom-mix-46.png"
  },
  {
    "name": "Fruity Tomato Stew",
    "number": "50",
    "ingredients": [
      "hylian-tomato",
      "fresh-milk",
      "rock-salt"
    ],
    "hearts": 3,
    "effect": "No effect",
    "foodEffect": "3 heart(s) recovered",
    "score": 24,
    "description": "3 heart(s) recovered",
    "image": "assets/recipe-icons/fruity-tomato-stew-50.png"
  },
  {
    "name": "Fruitcake",
    "number": "126",
    "ingredients": [
      "wildberry",
      "apple",
      {
        "label": "Any other Fruit",
        "ids": [
          "apple",
          "golden-apple",
          "palm-fruit",
          "wildberry",
          "hydromelon",
          "voltfruit",
          "mighty-bananas",
          "spicy-pepper",
          "hylian-tomato",
          "hearty-durian",
          "fleet-lotus-seeds"
        ]
      },
      "cane-sugar",
      "tabantha-wheat"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/fruitcake-126.png"
  },
  {
    "name": "Fruit Pie",
    "number": "130",
    "ingredients": [
      "apple",
      "fortified-pumpkin",
      "tabantha-wheat",
      "cane-sugar",
      "goat-butter"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/fruit-pie-130.png"
  },
  {
    "name": "Glazed Meat",
    "number": "62",
    "ingredients": [
      {
        "label": "Any Meat",
        "ids": [
          "raw-meat",
          "raw-prime-meat",
          "raw-gourmet-meat",
          "raw-bird-drumstick",
          "raw-bird-thigh",
          "raw-whole-bird"
        ]
      },
      "courser-bee-honey"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery Grants the Flame Guard effect for a limited time",
    "score": 50,
    "description": "Full health recovery Grants the Flame Guard effect for a limited time",
    "image": "assets/recipe-icons/glazed-meat-62.png"
  },
  {
    "name": "Glazed Mushrooms",
    "number": "61",
    "ingredients": [
      {
        "label": "Any Mushroom",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle"
        ]
      },
      "courser-bee-honey"
    ],
    "hearts": 5,
    "effect": "No effect",
    "foodEffect": "5 heart(s) recovered",
    "score": 40,
    "description": "5 heart(s) recovered",
    "image": "assets/recipe-icons/glazed-mushrooms-61.png"
  },
  {
    "name": "Glazed Seafood",
    "number": "63",
    "ingredients": [
      {
        "label": "Any Seafood",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish",
          "hearty-blueshell-snail",
          "sneaky-river-snail",
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      },
      "courser-bee-honey"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery Grants the Flame Guard effect for a limited time",
    "score": 50,
    "description": "Full health recovery Grants the Flame Guard effect for a limited time",
    "image": "assets/recipe-icons/glazed-seafood-63.png"
  },
  {
    "name": "Glazed Veggies",
    "number": "60",
    "ingredients": [
      {
        "label": "Any Vegetable, Flower or Herb",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      },
      "courser-bee-honey"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery Grants the Flame Guard effect for a limited time",
    "score": 50,
    "description": "Full health recovery Grants the Flame Guard effect for a limited time",
    "image": "assets/recipe-icons/glazed-veggies-60.png"
  },
  {
    "name": "Gourmet Cheesy Meat Bowl",
    "number": "99",
    "ingredients": [
      "raw-gourmet-meat",
      "hateno-cheese",
      "hylian-rice",
      "rock-salt"
    ],
    "hearts": 10,
    "effect": "No effect",
    "foodEffect": "10 heart(s) recovered",
    "score": 80,
    "description": "10 heart(s) recovered",
    "image": "assets/recipe-icons/gourmet-cheesy-meat-bowl-99.png"
  },
  {
    "name": "Gourmet Meat and Rice Bowl",
    "number": "96",
    "ingredients": [
      "raw-gourmet-meat",
      "hylian-rice",
      "rock-salt"
    ],
    "hearts": 8,
    "effect": "No effect",
    "foodEffect": "8 heart(s) recovered",
    "score": 64,
    "description": "8 heart(s) recovered",
    "image": "assets/recipe-icons/gourmet-meat-and-rice-bowl-96.png"
  },
  {
    "name": "Gourmet Meat and Seafood Fry",
    "number": "27",
    "ingredients": [
      "raw-gourmet-meat",
      "raw-whole-bird",
      {
        "label": "Any Seafood",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish",
          "hearty-blueshell-snail",
          "sneaky-river-snail",
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/gourmet-meat-and-seafood-fry-27.png"
  },
  {
    "name": "Gourmet Meat Curry",
    "number": "68",
    "ingredients": [
      "raw-gourmet-meat",
      "hylian-rice",
      "goron-spice"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/gourmet-meat-curry-68.png"
  },
  {
    "name": "Gourmet Meat Stew",
    "number": "78",
    "ingredients": [
      "raw-gourmet-meat",
      "goat-butter",
      "fresh-milk",
      "tabantha-wheat"
    ],
    "hearts": 9,
    "effect": "No effect",
    "foodEffect": "9 heart(s) recovered",
    "score": 72,
    "description": "9 heart(s) recovered",
    "image": "assets/recipe-icons/gourmet-meat-stew-78.png"
  },
  {
    "name": "Gourmet Poultry Curry",
    "number": "71",
    "ingredients": [
      "raw-whole-bird",
      "hylian-rice",
      "goron-spice"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/gourmet-poultry-curry-71.png"
  },
  {
    "name": "Gourmet Poultry Pilaf",
    "number": "87",
    "ingredients": [
      "raw-whole-bird",
      "hylian-rice",
      "goat-butter",
      "bird-egg"
    ],
    "hearts": 10,
    "effect": "No effect",
    "foodEffect": "10 heart(s) recovered",
    "score": 80,
    "description": "10 heart(s) recovered",
    "image": "assets/recipe-icons/gourmet-poultry-pilaf-87.png"
  },
  {
    "name": "Gourmet Spiced Meat Skewer",
    "number": "23",
    "ingredients": [
      "raw-gourmet-meat",
      "goron-spice"
    ],
    "hearts": 6,
    "effect": "No effect",
    "foodEffect": "6 heart(s) recovered",
    "score": 48,
    "description": "6 heart(s) recovered",
    "image": "assets/recipe-icons/gourmet-spiced-meat-skewer-23.png"
  },
  {
    "name": "Hard-boiled Egg",
    "number": "198",
    "ingredients": [
      "bird-egg"
    ],
    "hearts": 1.5,
    "effect": "No effect",
    "foodEffect": "1.5 heart(s) recovered",
    "score": 12,
    "description": "1.5 heart(s) recovered",
    "image": "assets/recipe-icons/hard-boiled-egg-198.png"
  },
  {
    "name": "Herb Sauté",
    "number": "35",
    "ingredients": [
      {
        "label": "Any Vegetable, Flower or Herb",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      },
      "goron-spice"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/herb-saut-35.png"
  },
  {
    "name": "Honeyed Apple",
    "number": "118",
    "ingredients": [
      "apple",
      "courser-bee-honey"
    ],
    "hearts": 0,
    "effect": "Stamina recovery",
    "foodEffect": "Health and Stamina recovery based on apple used",
    "score": 30,
    "description": "Health and Stamina recovery based on apple used",
    "image": "assets/recipe-icons/honeyed-apple-118.png"
  },
  {
    "name": "Honeyed Fruits",
    "number": "117",
    "ingredients": [
      "apple",
      "courser-bee-honey"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/honeyed-fruits-117.png"
  },
  {
    "name": "Honey Candy",
    "number": "119",
    "ingredients": [
      "courser-bee-honey"
    ],
    "hearts": 2,
    "effect": "No effect",
    "foodEffect": "2 heart recovery",
    "score": 16,
    "description": "2 heart recovery",
    "image": "assets/recipe-icons/honey-candy-119.png"
  },
  {
    "name": "Honey Crepe",
    "number": "124",
    "ingredients": [
      "courser-bee-honey",
      "tabantha-wheat",
      "fresh-milk",
      "cane-sugar",
      "bird-egg"
    ],
    "hearts": 10,
    "effect": "Stamina recovery",
    "foodEffect": "10 heart(s) recovered Some stamina recovery",
    "score": 110,
    "description": "10 heart(s) recovered Some stamina recovery",
    "image": "assets/recipe-icons/honey-crepe-124.png"
  },
  {
    "name": "Hot Buttered Apple",
    "number": "116",
    "ingredients": [
      "apple",
      "goat-butter"
    ],
    "hearts": 2,
    "effect": "No effect",
    "foodEffect": "2 heart(s) recovered 4 heart recovery if Golden Apple used",
    "score": 16,
    "description": "2 heart(s) recovered 4 heart recovery if Golden Apple used",
    "image": "assets/recipe-icons/hot-buttered-apple-116.png"
  },
  {
    "name": "Hylian Tomato Pizza",
    "number": "107",
    "ingredients": [
      "tabantha-wheat",
      "hateno-cheese",
      "hylian-tomato"
    ],
    "hearts": 6,
    "effect": "No effect",
    "foodEffect": "6 heart(s) recovered",
    "score": 48,
    "description": "6 heart(s) recovered",
    "image": "assets/recipe-icons/hylian-tomato-pizza-107.png"
  },
  {
    "name": "Icy Gourmet Meat",
    "number": "200",
    "ingredients": [
      "raw-gourmet-meat"
    ],
    "hearts": 3,
    "effect": "Heat resistance",
    "foodEffect": "3 heart(s) recovered Heat resistance",
    "score": 54,
    "description": "3 heart(s) recovered Heat resistance",
    "image": "assets/recipe-icons/icy-gourmet-meat-200.png"
  },
  {
    "name": "Icy Meat",
    "number": "199",
    "ingredients": [
      "raw-meat"
    ],
    "hearts": 1,
    "effect": "Heat resistance",
    "foodEffect": "1 heart(s) recovered Heat resistance",
    "score": 38,
    "description": "1 heart(s) recovered Heat resistance",
    "image": "assets/recipe-icons/icy-meat-199.png"
  },
  {
    "name": "Icy Prime Meat",
    "number": "200",
    "ingredients": [
      "raw-prime-meat"
    ],
    "hearts": 1.5,
    "effect": "Heat resistance",
    "foodEffect": "1.5 heart(s) recovered Heat resistance",
    "score": 42,
    "description": "1.5 heart(s) recovered Heat resistance",
    "image": "assets/recipe-icons/icy-prime-meat-200.png"
  },
  {
    "name": "Meat and Mushroom Skewer",
    "number": "2",
    "ingredients": [
      {
        "label": "Any Mushroom",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle"
        ]
      },
      {
        "label": "Any Meat",
        "ids": [
          "raw-meat",
          "raw-prime-meat",
          "raw-gourmet-meat",
          "raw-bird-drumstick",
          "raw-bird-thigh",
          "raw-whole-bird"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery Grants the Flame Guard effect for a limited time",
    "score": 50,
    "description": "Full health recovery Grants the Flame Guard effect for a limited time",
    "image": "assets/recipe-icons/meat-and-mushroom-skewer-2.png"
  },
  {
    "name": "Meat and Rice Bowl",
    "number": "94",
    "ingredients": [
      "raw-meat",
      "hylian-rice",
      "rock-salt"
    ],
    "hearts": 4,
    "effect": "No effect",
    "foodEffect": "4 heart(s) recovered",
    "score": 32,
    "description": "4 heart(s) recovered",
    "image": "assets/recipe-icons/meat-and-rice-bowl-94.png"
  },
  {
    "name": "Meat and Seafood Fry",
    "number": "25",
    "ingredients": [
      "raw-meat",
      "raw-bird-drumstick",
      {
        "label": "Any Seafood",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish",
          "hearty-blueshell-snail",
          "sneaky-river-snail",
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/meat-and-seafood-fry-25.png"
  },
  {
    "name": "Meat Curry",
    "number": "66",
    "ingredients": [
      "raw-meat",
      "hylian-rice",
      "goron-spice"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/meat-curry-66.png"
  },
  {
    "name": "Meat Pie",
    "number": "108",
    "ingredients": [
      {
        "label": "Any Meat",
        "ids": [
          "raw-meat",
          "raw-prime-meat",
          "raw-gourmet-meat",
          "raw-bird-drumstick",
          "raw-bird-thigh",
          "raw-whole-bird"
        ]
      },
      "goat-butter",
      "rock-salt",
      "tabantha-wheat"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/meat-pie-108.png"
  },
  {
    "name": "Meat Skewer",
    "number": "4",
    "ingredients": [
      {
        "label": "Any Meat",
        "ids": [
          "raw-meat",
          "raw-prime-meat",
          "raw-gourmet-meat",
          "raw-bird-drumstick",
          "raw-bird-thigh",
          "raw-whole-bird"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery Grants attack-power boost for a limited time.",
    "score": 50,
    "description": "Full health recovery Grants attack-power boost for a limited time.",
    "image": "assets/recipe-icons/meat-skewer-4.png"
  },
  {
    "name": "Meat Stew",
    "number": "76",
    "ingredients": [
      "raw-meat",
      "goat-butter",
      "fresh-milk",
      "tabantha-wheat"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/meat-stew-76.png"
  },
  {
    "name": "Meat-Stuffed Pumpkin",
    "number": "79",
    "ingredients": [
      "fortified-pumpkin",
      "sun-pumpkin",
      {
        "label": "Any Meat",
        "ids": [
          "raw-meat",
          "raw-prime-meat",
          "raw-gourmet-meat",
          "raw-bird-drumstick",
          "raw-bird-thigh",
          "raw-whole-bird"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/meat-stuffed-pumpkin-79.png"
  },
  {
    "name": "Meaty Rice Balls",
    "number": "102",
    "ingredients": [
      {
        "label": "Any Meat",
        "ids": [
          "raw-meat",
          "raw-prime-meat",
          "raw-gourmet-meat",
          "raw-bird-drumstick",
          "raw-bird-thigh",
          "raw-whole-bird"
        ]
      },
      "hylian-rice"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/meaty-rice-balls-102.png"
  },
  {
    "name": "Melty Cheesy Bread",
    "number": "106",
    "ingredients": [
      "hateno-cheese",
      "rock-salt",
      "tabantha-wheat"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/melty-cheesy-bread-106.png"
  },
  {
    "name": "Monster Cake",
    "number": "139",
    "ingredients": [
      "monster-extract",
      "cane-sugar",
      "goat-butter",
      "tabantha-wheat"
    ],
    "hearts": 0.25,
    "effect": "No effect",
    "foodEffect": "0.25 heart(s) recovered",
    "score": 2,
    "description": "0.25 heart(s) recovered",
    "image": "assets/recipe-icons/monster-cake-139.png"
  },
  {
    "name": "Monster Curry",
    "number": "137",
    "ingredients": [
      "monster-extract",
      "goron-spice",
      "hylian-rice"
    ],
    "hearts": 0.25,
    "effect": "No effect",
    "foodEffect": "0.25 heart(s) recovered",
    "score": 2,
    "description": "0.25 heart(s) recovered",
    "image": "assets/recipe-icons/monster-curry-137.png"
  },
  {
    "name": "Monster Rice Balls",
    "number": "138",
    "ingredients": [
      "monster-extract",
      "rock-salt",
      "hylian-rice"
    ],
    "hearts": 0.25,
    "effect": "No effect",
    "foodEffect": "0.25 heart(s) recovered",
    "score": 2,
    "description": "0.25 heart(s) recovered",
    "image": "assets/recipe-icons/monster-rice-balls-138.png"
  },
  {
    "name": "Monster Soup",
    "number": "136",
    "ingredients": [
      "monster-extract",
      "goat-butter",
      "fresh-milk",
      "tabantha-wheat"
    ],
    "hearts": 0.25,
    "effect": "No effect",
    "foodEffect": "0.25 heart(s) recovered",
    "score": 2,
    "description": "0.25 heart(s) recovered",
    "image": "assets/recipe-icons/monster-soup-136.png"
  },
  {
    "name": "Monster Stew",
    "number": "135",
    "ingredients": [
      "monster-extract",
      {
        "label": "Any Meat",
        "ids": [
          "raw-meat",
          "raw-prime-meat",
          "raw-gourmet-meat",
          "raw-bird-drumstick",
          "raw-bird-thigh",
          "raw-whole-bird"
        ]
      },
      {
        "label": "Any Seafood",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish",
          "hearty-blueshell-snail",
          "sneaky-river-snail",
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      }
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/monster-stew-135.png"
  },
  {
    "name": "Mushroom Omelet",
    "number": "114",
    "ingredients": [
      {
        "label": "Any Mushroom",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle"
        ]
      },
      "bird-egg",
      "rock-salt",
      "goat-butter"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/mushroom-omelet-114.png"
  },
  {
    "name": "Mushroom Rice Balls",
    "number": "101",
    "ingredients": [
      {
        "label": "Any Mushroom",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle"
        ]
      },
      "hylian-rice"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/mushroom-rice-balls-101.png"
  },
  {
    "name": "Mushroom Risotto",
    "number": "81",
    "ingredients": [
      {
        "label": "Any Mushroom",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle"
        ]
      },
      "hylian-rice",
      "goat-butter",
      "rock-salt"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/mushroom-risotto-81.png"
  },
  {
    "name": "Mushroom Skewer",
    "number": "1",
    "ingredients": [
      {
        "label": "Any Mushroom",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery Hearts damaged by gloom are restored by 15",
    "score": 50,
    "description": "Full health recovery Hearts damaged by gloom are restored by 15",
    "image": "assets/recipe-icons/mushroom-skewer-1.png"
  },
  {
    "name": "Noble Pursuit",
    "number": "134",
    "ingredients": [
      "palm-fruit",
      "hydromelon",
      "voltfruit",
      "rock-salt"
    ],
    "hearts": 4,
    "effect": "No effect",
    "foodEffect": "4 heart(s) recovered",
    "score": 32,
    "description": "4 heart(s) recovered",
    "image": "assets/recipe-icons/noble-pursuit-134.png"
  },
  {
    "name": "Nutcake",
    "number": "125",
    "ingredients": [
      "acorn",
      "chickaloo-tree-nut",
      "goat-butter",
      "cane-sugar",
      "tabantha-wheat"
    ],
    "hearts": 3,
    "effect": "No effect",
    "foodEffect": "3 heart(s) recovered",
    "score": 24,
    "description": "3 heart(s) recovered",
    "image": "assets/recipe-icons/nutcake-125.png"
  },
  {
    "name": "Omelet",
    "number": "112",
    "ingredients": [
      "bird-egg"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery Grants the Flame Guard effect for a limited time",
    "score": 50,
    "description": "Full health recovery Grants the Flame Guard effect for a limited time",
    "image": "assets/recipe-icons/omelet-112.png"
  },
  {
    "name": "Pepper Seafood",
    "number": "38",
    "ingredients": [
      "spicy-pepper",
      {
        "label": "Any Seafood or Fish",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish",
          "hearty-blueshell-snail",
          "sneaky-river-snail",
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/pepper-seafood-38.png"
  },
  {
    "name": "Pepper Steak",
    "number": "37",
    "ingredients": [
      "spicy-pepper",
      {
        "label": "Any Meat",
        "ids": [
          "raw-meat",
          "raw-prime-meat",
          "raw-gourmet-meat",
          "raw-bird-drumstick",
          "raw-bird-thigh",
          "raw-whole-bird"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/pepper-steak-37.png"
  },
  {
    "name": "Plain Crepe",
    "number": "122",
    "ingredients": [
      "tabantha-wheat",
      "fresh-milk",
      "cane-sugar",
      "bird-egg"
    ],
    "hearts": 5,
    "effect": "No effect",
    "foodEffect": "5 heart(s) recovered",
    "score": 40,
    "description": "5 heart(s) recovered",
    "image": "assets/recipe-icons/plain-crepe-122.png"
  },
  {
    "name": "Porgy Meunière",
    "number": "44",
    "ingredients": [
      "armored-porgy",
      "mighty-porgy",
      "tabantha-wheat",
      "goat-butter"
    ],
    "hearts": 4,
    "effect": "Attack up",
    "foodEffect": "4 heart(s) recovered attack up for 03:10",
    "score": 62,
    "description": "4 heart(s) recovered attack up for 03:10",
    "image": "assets/recipe-icons/porgy-meuni-re-44.png"
  },
  {
    "name": "Poultry Curry",
    "number": "69",
    "ingredients": [
      "raw-bird-drumstick",
      "hylian-rice",
      "goron-spice"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/poultry-curry-69.png"
  },
  {
    "name": "Poultry Pilaf",
    "number": "85",
    "ingredients": [
      "raw-bird-drumstick",
      "hylian-rice",
      "goat-butter",
      "bird-egg"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/poultry-pilaf-85.png"
  },
  {
    "name": "Prime Cheesy Meat Bowl",
    "number": "98",
    "ingredients": [
      "raw-prime-meat",
      "hateno-cheese",
      "hylian-rice",
      "rock-salt"
    ],
    "hearts": 7,
    "effect": "No effect",
    "foodEffect": "7 heart recovery",
    "score": 56,
    "description": "7 heart recovery",
    "image": "assets/recipe-icons/prime-cheesy-meat-bowl-98.png"
  },
  {
    "name": "Prime Meat and Rice Bowl",
    "number": "95",
    "ingredients": [
      "raw-prime-meat",
      "hylian-rice",
      "rock-salt"
    ],
    "hearts": 5,
    "effect": "No effect",
    "foodEffect": "5 heart(s) recovered",
    "score": 40,
    "description": "5 heart(s) recovered",
    "image": "assets/recipe-icons/prime-meat-and-rice-bowl-95.png"
  },
  {
    "name": "Prime Meat and Seafood Fry",
    "number": "26",
    "ingredients": [
      {
        "label": "Prime Meat or Bird Thigh",
        "ids": [
          "raw-prime-meat",
          "raw-bird-thigh"
        ]
      },
      {
        "label": "Any Seafood",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish",
          "hearty-blueshell-snail",
          "sneaky-river-snail",
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/prime-meat-and-seafood-fry-26.png"
  },
  {
    "name": "Prime Meat Curry",
    "number": "67",
    "ingredients": [
      "raw-prime-meat",
      "hylian-rice",
      "goron-spice"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/prime-meat-curry-67.png"
  },
  {
    "name": "Prime Meat Stew",
    "number": "77",
    "ingredients": [
      "raw-prime-meat",
      "goat-butter",
      "fresh-milk",
      "tabantha-wheat"
    ],
    "hearts": 6,
    "effect": "No effect",
    "foodEffect": "6 heart(s) recovered",
    "score": 48,
    "description": "6 heart(s) recovered",
    "image": "assets/recipe-icons/prime-meat-stew-77.png"
  },
  {
    "name": "Prime Poultry Curry",
    "number": "70",
    "ingredients": [
      "raw-bird-thigh",
      "hylian-rice",
      "goron-spice"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/prime-poultry-curry-70.png"
  },
  {
    "name": "Prime Poultry Pilaf",
    "number": "86",
    "ingredients": [
      "raw-bird-thigh",
      "hylian-rice",
      "goat-butter",
      "bird-egg"
    ],
    "hearts": 7,
    "effect": "No effect",
    "foodEffect": "7 heart(s) recovered",
    "score": 56,
    "description": "7 heart(s) recovered",
    "image": "assets/recipe-icons/prime-poultry-pilaf-86.png"
  },
  {
    "name": "Prime Spiced Meat Skewer",
    "number": "22",
    "ingredients": [
      "raw-prime-meat",
      "goron-spice"
    ],
    "hearts": 3,
    "effect": "No effect",
    "foodEffect": "3 heart(s) recovered",
    "score": 24,
    "description": "3 heart(s) recovered",
    "image": "assets/recipe-icons/prime-spiced-meat-skewer-22.png"
  },
  {
    "name": "Pumpkin Pie",
    "number": "128",
    "ingredients": [
      "fortified-pumpkin",
      "sun-pumpkin",
      "cane-sugar",
      "tabantha-wheat",
      "goat-butter"
    ],
    "hearts": 0,
    "effect": "Varies by ingredients",
    "foodEffect": "Health recovery vary based on pumpkin used",
    "score": 30,
    "description": "Health recovery vary based on pumpkin used",
    "image": "assets/recipe-icons/pumpkin-pie-128.png"
  },
  {
    "name": "Pumpkin Stew",
    "number": "75",
    "ingredients": [
      "fortified-pumpkin",
      "sun-pumpkin",
      "goat-butter",
      "fresh-milk",
      "tabantha-wheat"
    ],
    "hearts": 4,
    "effect": "Defense up",
    "foodEffect": "4 heart(s) recovered low-level defense boost for 04:30",
    "score": 62,
    "description": "4 heart(s) recovered low-level defense boost for 04:30",
    "image": "assets/recipe-icons/pumpkin-stew-75.png"
  },
  {
    "name": "Roasted Acorn",
    "number": "196",
    "ingredients": [
      "acorn"
    ],
    "hearts": 0.5,
    "effect": "No effect",
    "foodEffect": "0.5 heart(s) recovered",
    "score": 4,
    "description": "0.5 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-acorn-196.png"
  },
  {
    "name": "Roasted Armoranth",
    "number": "158",
    "ingredients": [
      "armoranth"
    ],
    "hearts": 0.5,
    "effect": "No effect",
    "foodEffect": "0.5 heart(s) recovered",
    "score": 4,
    "description": "0.5 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-armoranth-158.png"
  },
  {
    "name": "Roasted Arowana",
    "number": "185",
    "ingredients": [
      "ancient-arowana"
    ],
    "hearts": 1.5,
    "effect": "No effect",
    "foodEffect": "1.5 heart(s) recovered",
    "score": 12,
    "description": "1.5 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-arowana-185.png"
  },
  {
    "name": "Roasted Bass",
    "number": "186",
    "ingredients": [
      "hyrule-bass",
      "hearty-bass"
    ],
    "hearts": 1.5,
    "effect": "No effect",
    "foodEffect": "1.5 heart(s) recovered",
    "score": 12,
    "description": "1.5 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-bass-186.png"
  },
  {
    "name": "Roasted Big Radish",
    "number": "164",
    "ingredients": [
      "big-hearty-radish"
    ],
    "hearts": 6,
    "effect": "No effect",
    "foodEffect": "6 heart(s) recovered Extra hearts",
    "score": 48,
    "description": "6 heart(s) recovered Extra hearts",
    "image": "assets/recipe-icons/roasted-big-radish-164.png"
  },
  {
    "name": "Roasted Bird Drumstick",
    "number": "182",
    "ingredients": [
      "raw-bird-drumstick"
    ],
    "hearts": 1.5,
    "effect": "No effect",
    "foodEffect": "1.5 heart(s) recovered",
    "score": 12,
    "description": "1.5 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-bird-drumstick-182.png"
  },
  {
    "name": "Roasted Bird Thigh",
    "number": "183",
    "ingredients": [
      "raw-bird-thigh"
    ],
    "hearts": 2.5,
    "effect": "No effect",
    "foodEffect": "2.5 heart(s) recovered",
    "score": 20,
    "description": "2.5 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-bird-thigh-183.png"
  },
  {
    "name": "Roasted Carp",
    "number": "188",
    "ingredients": [
      {
        "label": "Any Carp",
        "ids": [
          "mighty-carp",
          "armored-carp",
          "sanke-carp"
        ]
      }
    ],
    "hearts": 1.5,
    "effect": "No effect",
    "foodEffect": "1.5 heart(s) recovered",
    "score": 12,
    "description": "1.5 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-carp-188.png"
  },
  {
    "name": "Roasted Cave Fish",
    "number": "190",
    "ingredients": [
      "glowing-cave-fish"
    ],
    "hearts": 1.5,
    "effect": "No effect",
    "foodEffect": "1.5 heart(s) recovered",
    "score": 12,
    "description": "1.5 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-cave-fish-190.png"
  },
  {
    "name": "Roasted Endura Carrot",
    "number": "160",
    "ingredients": [
      "endura-carrot"
    ],
    "hearts": 3,
    "effect": "Stamina recovery",
    "foodEffect": "3 heart(s) recovered Extra stamina",
    "score": 54,
    "description": "3 heart(s) recovered Extra stamina",
    "image": "assets/recipe-icons/roasted-endura-carrot-160.png"
  },
  {
    "name": "Roasted Hearty Bass",
    "number": "191",
    "ingredients": [
      "hearty-bass"
    ],
    "hearts": 3,
    "effect": "No effect",
    "foodEffect": "3 heart(s) recovered",
    "score": 24,
    "description": "3 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-hearty-bass-191.png"
  },
  {
    "name": "Roasted Hearty Salmon",
    "number": "192",
    "ingredients": [
      "hearty-salmon"
    ],
    "hearts": 4.5,
    "effect": "No effect",
    "foodEffect": "4.5 heart(s) recovered",
    "score": 36,
    "description": "4.5 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-hearty-salmon-192.png"
  },
  {
    "name": "Roasted Hydromelon",
    "number": "153",
    "ingredients": [
      "hydromelon"
    ],
    "hearts": 0.75,
    "effect": "No effect",
    "foodEffect": "0.75 heart(s) recovered",
    "score": 6,
    "description": "0.75 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-hydromelon-153.png"
  },
  {
    "name": "Roasted Hylian Tomato",
    "number": "150",
    "ingredients": [
      "hylian-tomato"
    ],
    "hearts": 1.5,
    "effect": "No effect",
    "foodEffect": "1.5 heart(s) recovered",
    "score": 12,
    "description": "1.5 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-hylian-tomato-150.png"
  },
  {
    "name": "Roasted Lotus Seeds",
    "number": "156",
    "ingredients": [
      "fleet-lotus-seeds"
    ],
    "hearts": 0.75,
    "effect": "No effect",
    "foodEffect": "0.75 heart(s) recovered",
    "score": 6,
    "description": "0.75 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-lotus-seeds-156.png"
  },
  {
    "name": "Roasted Mighty Bananas",
    "number": "155",
    "ingredients": [
      "mighty-bananas"
    ],
    "hearts": 0.75,
    "effect": "No effect",
    "foodEffect": "0.75 heart(s) recovered",
    "score": 6,
    "description": "0.75 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-mighty-bananas-155.png"
  },
  {
    "name": "Roasted Mighty Thistle",
    "number": "157",
    "ingredients": [
      "mighty-thistle"
    ],
    "hearts": 0.5,
    "effect": "No effect",
    "foodEffect": "0.5 heart(s) recovered",
    "score": 4,
    "description": "0.5 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-mighty-thistle-157.png"
  },
  {
    "name": "Roasted Porgy",
    "number": "189",
    "ingredients": [
      {
        "label": "Mighty or Armored Porgy",
        "ids": [
          "mighty-porgy",
          "armored-porgy"
        ]
      }
    ],
    "hearts": 1.5,
    "effect": "No effect",
    "foodEffect": "1.5 heart(s) recovered",
    "score": 12,
    "description": "1.5 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-porgy-189.png"
  },
  {
    "name": "Roasted Radish",
    "number": "163",
    "ingredients": [
      "hearty-radish"
    ],
    "hearts": 3.75,
    "effect": "No effect",
    "foodEffect": "3.75 heart(s) recovered",
    "score": 30,
    "description": "3.75 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-radish-163.png"
  },
  {
    "name": "Roasted Swift Carrot",
    "number": "159",
    "ingredients": [
      "swift-carrot"
    ],
    "hearts": 0.75,
    "effect": "Movement speed up",
    "foodEffect": "0.75 heart(s) recovered Speed up",
    "score": 36,
    "description": "0.75 heart(s) recovered Speed up",
    "image": "assets/recipe-icons/roasted-swift-carrot-159.png"
  },
  {
    "name": "Roasted Tree Nut",
    "number": "195",
    "ingredients": [
      "chickaloo-tree-nut"
    ],
    "hearts": 0.5,
    "effect": "No effect",
    "foodEffect": "0.5 heart(s) recovered",
    "score": 4,
    "description": "0.5 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-tree-nut-195.png"
  },
  {
    "name": "Roasted Trout",
    "number": "187",
    "ingredients": [
      {
        "label": "Any Trout",
        "ids": [
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout"
        ]
      }
    ],
    "hearts": 1.5,
    "effect": "No effect",
    "foodEffect": "1.5 heart(s) recovered",
    "score": 12,
    "description": "1.5 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-trout-187.png"
  },
  {
    "name": "Roasted Voltfruit",
    "number": "152",
    "ingredients": [
      "voltfruit"
    ],
    "hearts": 0.75,
    "effect": "No effect",
    "foodEffect": "0.75 heart(s) recovered",
    "score": 6,
    "description": "0.75 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-voltfruit-152.png"
  },
  {
    "name": "Roasted Whole Bird",
    "number": "184",
    "ingredients": [
      "raw-whole-bird"
    ],
    "hearts": 4.5,
    "effect": "No effect",
    "foodEffect": "4.5 heart(s) recovered",
    "score": 36,
    "description": "4.5 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-whole-bird-184.png"
  },
  {
    "name": "Roasted Wildberry",
    "number": "151",
    "ingredients": [
      "wildberry"
    ],
    "hearts": 0.75,
    "effect": "No effect",
    "foodEffect": "0.75 heart(s) recovered",
    "score": 6,
    "description": "0.75 heart(s) recovered",
    "image": "assets/recipe-icons/roasted-wildberry-151.png"
  },
  {
    "name": "Rock-Hard Food",
    "number": "146",
    "ingredients": [
      "wood",
      "gemstone"
    ],
    "hearts": 0.25,
    "effect": "No effect",
    "foodEffect": "0.25 heart(s) recovered",
    "score": 2,
    "description": "0.25 heart(s) recovered",
    "image": "assets/recipe-icons/rock-hard-food-146.png"
  },
  {
    "name": "Salmon Meunière",
    "number": "45",
    "ingredients": [
      "hearty-salmon",
      "tabantha-wheat",
      "goat-butter"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery +4 yellow hearts",
    "score": 50,
    "description": "Full health recovery +4 yellow hearts",
    "image": "assets/recipe-icons/salmon-meuni-re-45.png"
  },
  {
    "name": "Salmon Risotto",
    "number": "82",
    "ingredients": [
      "hearty-salmon",
      "hylian-rice",
      "goat-butter",
      "rock-salt"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery +4 yellow hearts",
    "score": 50,
    "description": "Full health recovery +4 yellow hearts",
    "image": "assets/recipe-icons/salmon-risotto-82.png"
  },
  {
    "name": "Salt-Grilled Crab",
    "number": "34",
    "ingredients": [
      "rock-salt",
      {
        "label": "Any Crab",
        "ids": [
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/salt-grilled-crab-34.png"
  },
  {
    "name": "Salt-Grilled Fish",
    "number": "33",
    "ingredients": [
      "rock-salt",
      {
        "label": "Any Fish",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/salt-grilled-fish-33.png"
  },
  {
    "name": "Salt-Grilled Gourmet Meat",
    "number": "32",
    "ingredients": [
      "rock-salt",
      "raw-gourmet-meat",
      "raw-whole-bird"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/salt-grilled-gourmet-meat-32.png"
  },
  {
    "name": "Salt-Grilled Greens",
    "number": "28",
    "ingredients": [
      "rock-salt",
      {
        "label": "Any Herb or Flower",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/salt-grilled-greens-28.png"
  },
  {
    "name": "Salt-Grilled Meat",
    "number": "30",
    "ingredients": [
      "rock-salt",
      "raw-meat",
      "raw-bird-drumstick"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/salt-grilled-meat-30.png"
  },
  {
    "name": "Salt-Grilled Mushrooms",
    "number": "29",
    "ingredients": [
      "rock-salt",
      {
        "label": "Any Mushroom",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/salt-grilled-mushrooms-29.png"
  },
  {
    "name": "Salt-Grilled Prime Meat",
    "number": "31",
    "ingredients": [
      "rock-salt",
      "raw-prime-meat",
      "raw-bird-thigh"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/salt-grilled-prime-meat-31.png"
  },
  {
    "name": "Sautéed Nuts",
    "number": "15",
    "ingredients": [
      {
        "label": "Any Nut",
        "ids": [
          "acorn",
          "chickaloo-tree-nut"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/saut-ed-nuts-15.png"
  },
  {
    "name": "Sautéed Peppers",
    "number": "14",
    "ingredients": [
      "spicy-pepper"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery Cold resistance",
    "score": 50,
    "description": "Full health recovery Cold resistance",
    "image": "assets/recipe-icons/saut-ed-peppers-14.png"
  },
  {
    "name": "Seafood Curry",
    "number": "72",
    "ingredients": [
      {
        "label": "Mighty or Armored Porgy",
        "ids": [
          "mighty-porgy",
          "armored-porgy"
        ]
      },
      "hylian-rice",
      "goron-spice"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/seafood-curry-72.png"
  },
  {
    "name": "Seafood Fried Rice",
    "number": "92",
    "ingredients": [
      {
        "label": "Mighty or Armored Porgy",
        "ids": [
          "mighty-porgy",
          "armored-porgy"
        ]
      },
      "hylian-rice",
      "rock-salt"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/seafood-fried-rice-92.png"
  },
  {
    "name": "Seafood Meunière",
    "number": "43",
    "ingredients": [
      "hearty-salmon",
      {
        "label": "Mighty or Armored Porgy",
        "ids": [
          "mighty-porgy",
          "armored-porgy"
        ]
      },
      "tabantha-wheat",
      "goat-butter"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/seafood-meuni-re-43.png"
  },
  {
    "name": "Seafood Paella",
    "number": "88",
    "ingredients": [
      "armored-porgy",
      "mighty-porgy",
      "razorclaw-crab",
      "ironshell-crab",
      "rock-salt",
      "goat-butter",
      "hylian-rice"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/seafood-paella-88.png"
  },
  {
    "name": "Seafood Rice Balls",
    "number": "103",
    "ingredients": [
      {
        "label": "Any Seafood",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish",
          "hearty-blueshell-snail",
          "sneaky-river-snail",
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      },
      "hylian-rice"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/seafood-rice-balls-103.png"
  },
  {
    "name": "Seafood Skewer",
    "number": "6",
    "ingredients": [
      {
        "label": "Any Snail or Crab",
        "ids": [
          "hearty-blueshell-snail",
          "sneaky-river-snail",
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/seafood-skewer-6.png"
  },
  {
    "name": "Seared Gourmet Steak",
    "number": "181",
    "ingredients": [
      "raw-gourmet-meat"
    ],
    "hearts": 4.5,
    "effect": "No effect",
    "foodEffect": "4.5 heart(s) recovered",
    "score": 36,
    "description": "4.5 heart(s) recovered",
    "image": "assets/recipe-icons/seared-gourmet-steak-181.png"
  },
  {
    "name": "Seared Prime Steak",
    "number": "180",
    "ingredients": [
      "raw-prime-meat"
    ],
    "hearts": 2.25,
    "effect": "No effect",
    "foodEffect": "2.25 heart(s) recovered",
    "score": 18,
    "description": "2.25 heart(s) recovered",
    "image": "assets/recipe-icons/seared-prime-steak-180.png"
  },
  {
    "name": "Seared Steak",
    "number": "179",
    "ingredients": [
      "raw-meat"
    ],
    "hearts": 1.5,
    "effect": "No effect",
    "foodEffect": "1.5 heart(s) recovered",
    "score": 12,
    "description": "1.5 heart(s) recovered",
    "image": "assets/recipe-icons/seared-steak-179.png"
  },
  {
    "name": "Simmered Fruit",
    "number": "47",
    "ingredients": [
      {
        "label": "Any Fruit",
        "ids": [
          "apple",
          "golden-apple",
          "palm-fruit",
          "wildberry",
          "hydromelon",
          "voltfruit",
          "mighty-bananas",
          "spicy-pepper",
          "hylian-tomato",
          "hearty-durian",
          "fleet-lotus-seeds"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/simmered-fruit-47.png"
  },
  {
    "name": "Simmered Tomato",
    "number": "49",
    "ingredients": [
      "hylian-tomato"
    ],
    "hearts": 2,
    "effect": "No effect",
    "foodEffect": "2 heart(s) recovered",
    "score": 16,
    "description": "2 heart(s) recovered",
    "image": "assets/recipe-icons/simmered-tomato-49.png"
  },
  {
    "name": "Snail Chowder",
    "number": "58",
    "ingredients": [
      "sneaky-river-snail",
      "goat-butter",
      "fresh-milk",
      "tabantha-wheat"
    ],
    "hearts": 5,
    "effect": "Stealth up",
    "foodEffect": "5 heart(s) recovered stealth improved for 05:40",
    "score": 70,
    "description": "5 heart(s) recovered stealth improved for 05:40",
    "image": "assets/recipe-icons/snail-chowder-58.png"
  },
  {
    "name": "Sneaky River Escargot",
    "number": "194",
    "ingredients": [
      "sneaky-river-snail"
    ],
    "hearts": 1.5,
    "effect": "No effect",
    "foodEffect": "1.5 heart(s) recovered",
    "score": 12,
    "description": "1.5 heart(s) recovered",
    "image": "assets/recipe-icons/sneaky-river-escargot-194.png"
  },
  {
    "name": "Spiced Meat Skewer",
    "number": "21",
    "ingredients": [
      "raw-meat",
      "goron-spice"
    ],
    "hearts": 2,
    "effect": "No effect",
    "foodEffect": "2 heart(s) recovered",
    "score": 16,
    "description": "2 heart(s) recovered",
    "image": "assets/recipe-icons/spiced-meat-skewer-21.png"
  },
  {
    "name": "Steamed Fish",
    "number": "13",
    "ingredients": [
      {
        "label": "Any Fish",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish"
        ]
      },
      {
        "label": "Any Vegetable, Flower or Herb",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/steamed-fish-13.png"
  },
  {
    "name": "Steamed Fruit",
    "number": "9",
    "ingredients": [
      "hylian-tomato",
      {
        "label": "Any Vegetable, Flower or Herb",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery Recovers some Stamina",
    "score": 50,
    "description": "Full health recovery Recovers some Stamina",
    "image": "assets/recipe-icons/steamed-fruit-9.png"
  },
  {
    "name": "Steamed Meat",
    "number": "12",
    "ingredients": [
      {
        "label": "Any Meat",
        "ids": [
          "raw-meat",
          "raw-prime-meat",
          "raw-gourmet-meat",
          "raw-bird-drumstick",
          "raw-bird-thigh",
          "raw-whole-bird"
        ]
      },
      {
        "label": "Any Vegetable, Flower or Herb",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/steamed-meat-12.png"
  },
  {
    "name": "Steamed Mushrooms",
    "number": "11",
    "ingredients": [
      {
        "label": "Any Mushroom",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle"
        ]
      },
      {
        "label": "Any Vegetable, Flower or Herb",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/steamed-mushrooms-11.png"
  },
  {
    "name": "Steamed Tomatoes",
    "number": "10",
    "ingredients": [
      "hylian-tomato",
      {
        "label": "Any Vegetable, Flower or Herb",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      }
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/steamed-tomatoes-10.png"
  },
  {
    "name": "Toasted Big Hearty Truffle",
    "number": "178",
    "ingredients": [
      "big-hearty-truffle"
    ],
    "hearts": 4.5,
    "effect": "No effect",
    "foodEffect": "4.5 heart(s) recovered",
    "score": 36,
    "description": "4.5 heart(s) recovered",
    "image": "assets/recipe-icons/toasted-big-hearty-truffle-178.png"
  },
  {
    "name": "Toasted Hearty Truffle",
    "number": "177",
    "ingredients": [
      "hearty-truffle"
    ],
    "hearts": 3,
    "effect": "No effect",
    "foodEffect": "3 heart(s) recovered",
    "score": 24,
    "description": "3 heart(s) recovered",
    "image": "assets/recipe-icons/toasted-hearty-truffle-177.png"
  },
  {
    "name": "Toasty Brightcap",
    "number": "175",
    "ingredients": [
      "brightcap"
    ],
    "hearts": 0.75,
    "effect": "Glow",
    "foodEffect": "0.75 heart(s) recovered Glow effect",
    "score": 36,
    "description": "0.75 heart(s) recovered Glow effect",
    "image": "assets/recipe-icons/toasty-brightcap-175.png"
  },
  {
    "name": "Toasty Chillshroom",
    "number": "170",
    "ingredients": [
      "chillshroom"
    ],
    "hearts": 0.75,
    "effect": "Heat resistance",
    "foodEffect": "0.75 heart(s) recovered Heat resistance",
    "score": 36,
    "description": "0.75 heart(s) recovered Heat resistance",
    "image": "assets/recipe-icons/toasty-chillshroom-170.png"
  },
  {
    "name": "Toasty Endura Shroom",
    "number": "176",
    "ingredients": [
      "endura-shroom"
    ],
    "hearts": 0.75,
    "effect": "Stamina recovery",
    "foodEffect": "0.75 heart(s) recovered Extra Stamina",
    "score": 36,
    "description": "0.75 heart(s) recovered Extra Stamina",
    "image": "assets/recipe-icons/toasty-endura-shroom-176.png"
  },
  {
    "name": "Toasty Hylian Shroom",
    "number": "166",
    "ingredients": [
      "hylian-shroom"
    ],
    "hearts": 0.75,
    "effect": "No effect",
    "foodEffect": "0.75 heart(s) recovered",
    "score": 6,
    "description": "0.75 heart(s) recovered",
    "image": "assets/recipe-icons/toasty-hylian-shroom-166.png"
  },
  {
    "name": "Toasty Ironshroom",
    "number": "173",
    "ingredients": [
      "ironshroom"
    ],
    "hearts": 0.75,
    "effect": "Defense up",
    "foodEffect": "0.75 heart(s) recovered Defense up",
    "score": 36,
    "description": "0.75 heart(s) recovered Defense up",
    "image": "assets/recipe-icons/toasty-ironshroom-173.png"
  },
  {
    "name": "Toasty Razorshroom",
    "number": "172",
    "ingredients": [
      "razorshroom"
    ],
    "hearts": 0.75,
    "effect": "No effect",
    "foodEffect": "0.75 heart(s) recovered",
    "score": 6,
    "description": "0.75 heart(s) recovered",
    "image": "assets/recipe-icons/toasty-razorshroom-172.png"
  },
  {
    "name": "Toasty Rushroom",
    "number": "168",
    "ingredients": [
      "rushroom"
    ],
    "hearts": 0.75,
    "effect": "Movement speed up",
    "foodEffect": "0.75 heart(s) recovered Speed up",
    "score": 36,
    "description": "0.75 heart(s) recovered Speed up",
    "image": "assets/recipe-icons/toasty-rushroom-168.png"
  },
  {
    "name": "Toasty Silent Shroom",
    "number": "174",
    "ingredients": [
      "silent-shroom"
    ],
    "hearts": 0.75,
    "effect": "Stealth up",
    "foodEffect": "0.75 heart(s) recovered Stealth up",
    "score": 36,
    "description": "0.75 heart(s) recovered Stealth up",
    "image": "assets/recipe-icons/toasty-silent-shroom-174.png"
  },
  {
    "name": "Toasty Skyshroom",
    "number": "165",
    "ingredients": [
      "skyshroom"
    ],
    "hearts": 0.5,
    "effect": "No effect",
    "foodEffect": "0.5 heart(s) recovered",
    "score": 4,
    "description": "0.5 heart(s) recovered",
    "image": "assets/recipe-icons/toasty-skyshroom-165.png"
  },
  {
    "name": "Toasty Stamella Shroom",
    "number": "167",
    "ingredients": [
      "stamella-shroom"
    ],
    "hearts": 0.75,
    "effect": "Stamina recovery",
    "foodEffect": "0.75 heart(s) recovered Stamina recovery",
    "score": 36,
    "description": "0.75 heart(s) recovered Stamina recovery",
    "image": "assets/recipe-icons/toasty-stamella-shroom-167.png"
  },
  {
    "name": "Toasty Sunshroom",
    "number": "169",
    "ingredients": [
      "sunshroom"
    ],
    "hearts": 0.75,
    "effect": "No effect",
    "foodEffect": "0.75 heart(s) recovered",
    "score": 6,
    "description": "0.75 heart(s) recovered",
    "image": "assets/recipe-icons/toasty-sunshroom-169.png"
  },
  {
    "name": "Toasty Zapshroom",
    "number": "171",
    "ingredients": [
      "zapshroom"
    ],
    "hearts": 0.75,
    "effect": "Shock resistance",
    "foodEffect": "0.75 heart(s) recovered Shock resistance",
    "score": 36,
    "description": "0.75 heart(s) recovered Shock resistance",
    "image": "assets/recipe-icons/toasty-zapshroom-171.png"
  },
  {
    "name": "Tomato Mushroom Stew",
    "number": "51",
    "ingredients": [
      {
        "label": "Any Mushroom",
        "ids": [
          "hylian-shroom",
          "skyshroom",
          "stamella-shroom",
          "rushroom",
          "sunshroom",
          "chillshroom",
          "zapshroom",
          "razorshroom",
          "ironshroom",
          "silent-shroom",
          "brightcap",
          "endura-shroom",
          "hearty-truffle",
          "big-hearty-truffle"
        ]
      },
      "hylian-tomato"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "health recovery",
    "score": 0,
    "description": "health recovery",
    "image": "assets/recipe-icons/tomato-mushroom-stew-51.png"
  },
  {
    "name": "Tomato Seafood Soup",
    "number": "52",
    "ingredients": [
      "hylian-tomato",
      {
        "label": "Any Seafood",
        "ids": [
          "hyrule-bass",
          "hearty-bass",
          "staminoka-bass",
          "mighty-carp",
          "armored-carp",
          "sanke-carp",
          "ancient-arowana",
          "chillfin-trout",
          "sizzlefin-trout",
          "voltfin-trout",
          "stealthfin-trout",
          "mighty-porgy",
          "armored-porgy",
          "hearty-salmon",
          "cave-fish",
          "glowing-cave-fish",
          "hearty-blueshell-snail",
          "sneaky-river-snail",
          "razorclaw-crab",
          "ironshell-crab",
          "bright-eyed-crab"
        ]
      }
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/tomato-seafood-soup-52.png"
  },
  {
    "name": "Vegetable Curry",
    "number": "65",
    "ingredients": [
      {
        "label": "Any Carrot or Any Pumpkin",
        "ids": [
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin"
        ]
      },
      "hylian-rice",
      "goron-spice"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/vegetable-curry-65.png"
  },
  {
    "name": "Vegetable Omelet",
    "number": "113",
    "ingredients": [
      {
        "label": "Any Vegetable, Flower or Herb",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      },
      "bird-egg",
      "rock-salt",
      "goat-butter"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/vegetable-omelet-113.png"
  },
  {
    "name": "Vegetable Risotto",
    "number": "80",
    "ingredients": [
      {
        "label": "Any Carrot or Any Pumpkin",
        "ids": [
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin"
        ]
      },
      "hylian-rice",
      "goat-butter",
      "rock-salt"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/vegetable-risotto-80.png"
  },
  {
    "name": "Veggie Cream Soup",
    "number": "54",
    "ingredients": [
      {
        "label": "Any Carrot or Any Pumpkin",
        "ids": [
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin"
        ]
      },
      "rock-salt",
      "fresh-milk"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/veggie-cream-soup-54.png"
  },
  {
    "name": "Veggie Porridge",
    "number": "104",
    "ingredients": [
      "fresh-milk",
      {
        "label": "Any Vegetable, Flower or Herb",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      },
      "hylian-rice"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/veggie-porridge-104.png"
  },
  {
    "name": "Veggie Rice Balls",
    "number": "100",
    "ingredients": [
      {
        "label": "Any Vegetable, Flower or Herb",
        "ids": [
          "hyrule-herb",
          "mighty-thistle",
          "armoranth",
          "blue-nightshade",
          "cool-safflina",
          "warm-safflina",
          "electric-safflina",
          "swift-violet",
          "swift-carrot",
          "endura-carrot",
          "fortified-pumpkin",
          "sun-pumpkin",
          "hearty-radish",
          "big-hearty-radish",
          "stambulb",
          "fleet-lotus-seeds"
        ]
      },
      "hylian-rice"
    ],
    "hearts": 0,
    "effect": "Full recovery",
    "foodEffect": "Full health recovery",
    "score": 50,
    "description": "Full health recovery",
    "image": "assets/recipe-icons/veggie-rice-balls-100.png"
  },
  {
    "name": "Warm Milk",
    "number": "133",
    "ingredients": [
      "fresh-milk"
    ],
    "hearts": 1.5,
    "effect": "No effect",
    "foodEffect": "1.5 heart(s) recovered",
    "score": 12,
    "description": "1.5 heart(s) recovered",
    "image": "assets/recipe-icons/warm-milk-133.png"
  },
  {
    "name": "Wheat Bread",
    "number": "105",
    "ingredients": [
      "rock-salt",
      "tabantha-wheat"
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Health recovery",
    "score": 0,
    "description": "Health recovery",
    "image": "assets/recipe-icons/wheat-bread-105.png"
  },
  {
    "name": "Wildberry Crepe",
    "number": "123",
    "ingredients": [
      "wildberry",
      "tabantha-wheat",
      "fresh-milk",
      "cane-sugar",
      "bird-egg"
    ],
    "hearts": 10,
    "effect": "No effect",
    "foodEffect": "10 heart(s) recovered",
    "score": 80,
    "description": "10 heart(s) recovered",
    "image": "assets/recipe-icons/wildberry-crepe-123.png"
  },
  {
    "name": "Bright Elixir",
    "number": "225",
    "ingredients": [
      "deep-firefly",
      {
        "label": "Any Monster Part",
        "ids": [
          "monster-part"
        ]
      }
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Emits light for a period of time",
    "score": 0,
    "description": "Emits light for a period of time",
    "image": "assets/recipe-icons/bright-elixir-225.png"
  },
  {
    "name": "Chilly Elixir",
    "number": "218",
    "ingredients": [
      "cold-darner",
      "winterwing-butterfly",
      {
        "label": "Any Monster Part",
        "ids": [
          "monster-part"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Heat resistance",
    "foodEffect": "Heat resistance",
    "score": 30,
    "description": "Heat resistance",
    "image": "assets/recipe-icons/chilly-elixir-218.png"
  },
  {
    "name": "Electro Elixir",
    "number": "219",
    "ingredients": [
      "electric-darner",
      "thunderwing-butterfly",
      {
        "label": "Any Monster Part",
        "ids": [
          "monster-part"
        ]
      }
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Electricity resistance",
    "score": 0,
    "description": "Electricity resistance",
    "image": "assets/recipe-icons/electro-elixir-219.png"
  },
  {
    "name": "Enduring Elixir",
    "number": "226",
    "ingredients": [
      "tireless-frog",
      {
        "label": "Any Monster Part",
        "ids": [
          "monster-part"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Stamina recovery",
    "foodEffect": "Increases stamina limit",
    "score": 30,
    "description": "Increases stamina limit",
    "image": "assets/recipe-icons/enduring-elixir-226.png"
  },
  {
    "name": "Energizing Elixir",
    "number": "215",
    "ingredients": [
      "energetic-rhino-beetle",
      "restless-cricket",
      {
        "label": "Any Monster Part",
        "ids": [
          "monster-part"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Stamina recovery",
    "foodEffect": "Restores Stamina",
    "score": 30,
    "description": "Restores Stamina",
    "image": "assets/recipe-icons/energizing-elixir-215.png"
  },
  {
    "name": "Fairy Tonic",
    "number": "228",
    "ingredients": [
      "fairy"
    ],
    "hearts": 7,
    "effect": "No effect",
    "foodEffect": "7 heart(s) recovered",
    "score": 56,
    "description": "7 heart(s) recovered",
    "image": "assets/recipe-icons/fairy-tonic-228.png"
  },
  {
    "name": "Fireproof Elixir",
    "number": "220",
    "ingredients": [
      "fireproof-lizard",
      "smotherwing-butterfly",
      {
        "label": "Any Monster Part",
        "ids": [
          "monster-part"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Heat resistance",
    "foodEffect": "Heat resistance",
    "score": 30,
    "description": "Heat resistance",
    "image": "assets/recipe-icons/fireproof-elixir-220.png"
  },
  {
    "name": "Hasty Elixir",
    "number": "216",
    "ingredients": [
      "hightail-lizard",
      "hot-footed-frog",
      {
        "label": "Any Monster Part",
        "ids": [
          "monster-part"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Movement speed up",
    "foodEffect": "Boosts movement speed",
    "score": 30,
    "description": "Boosts movement speed",
    "image": "assets/recipe-icons/hasty-elixir-216.png"
  },
  {
    "name": "Hearty Elixir",
    "number": "227",
    "ingredients": [
      "hearty-lizard",
      {
        "label": "Any Monster Part",
        "ids": [
          "monster-part"
        ]
      }
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Increases maximum hearts",
    "score": 0,
    "description": "Increases maximum hearts",
    "image": "assets/recipe-icons/hearty-elixir-227.png"
  },
  {
    "name": "Mighty Elixir",
    "number": "221",
    "ingredients": [
      "bladed-rhino-beetle",
      {
        "label": "Any Monster Part",
        "ids": [
          "monster-part"
        ]
      }
    ],
    "hearts": 0,
    "effect": "No effect",
    "foodEffect": "Restoring health",
    "score": 0,
    "description": "Restoring health",
    "image": "assets/recipe-icons/mighty-elixir-221.png"
  },
  {
    "name": "Sneaky Elixir",
    "number": "223",
    "ingredients": [
      "sunset-firefly",
      {
        "label": "Any Monster Part",
        "ids": [
          "monster-part"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Stealth up",
    "foodEffect": "Increases sneak ability",
    "score": 30,
    "description": "Increases sneak ability",
    "image": "assets/recipe-icons/sneaky-elixir-223.png"
  },
  {
    "name": "Spicy Elixir",
    "number": "217",
    "ingredients": [
      "summerwing-butterfly",
      "warm-darner",
      {
        "label": "Any Monster Part",
        "ids": [
          "monster-part"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Cold resistance",
    "foodEffect": "Raises body temperature",
    "score": 30,
    "description": "Raises body temperature",
    "image": "assets/recipe-icons/spicy-elixir-217.png"
  },
  {
    "name": "Sticky Elixir",
    "number": "224",
    "ingredients": [
      "sticky-lizard",
      "sticky-frog",
      {
        "label": "Any Monster Part",
        "ids": [
          "monster-part"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Slip resistance",
    "foodEffect": "Increases ability to climb wet surfaces",
    "score": 30,
    "description": "Increases ability to climb wet surfaces",
    "image": "assets/recipe-icons/sticky-elixir-224.png"
  },
  {
    "name": "Tough Elixir",
    "number": "222",
    "ingredients": [
      "rugged-rhino-beetle",
      {
        "label": "Any Monster Part",
        "ids": [
          "monster-part"
        ]
      }
    ],
    "hearts": 0,
    "effect": "Defense up",
    "foodEffect": "Increases defense boost",
    "score": 30,
    "description": "Increases defense boost",
    "image": "assets/recipe-icons/tough-elixir-222.png"
  }
];

const recipes = recipeCatalog;

const state = {
  owned: new Set(JSON.parse(localStorage.getItem("totk-owned") || "[]")),
  category: "all",
  query: "",
  sort: "best",
  theme: localStorage.getItem("totk-theme") || "light"
};

const ingredientById = new Map(ingredients.map((item) => [item.id, item]));
const ingredientGrid = document.querySelector("#ingredientGrid");
const recipeList = document.querySelector("#recipeList");
const ingredientTemplate = document.querySelector("#ingredientTemplate");
const recipeTemplate = document.querySelector("#recipeTemplate");
const themeToggle = document.querySelector("#themeToggle");

applyTheme();

document.querySelector("#ingredientSearch").addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  renderIngredients();
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    document.querySelectorAll(".segment").forEach((item) => item.classList.toggle("active", item === button));
    renderIngredients();
  });
});

document.querySelector("#sortMode").addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderRecipes();
});

document.querySelector("#clearInventory").addEventListener("click", () => {
  state.owned.clear();
  persist();
  renderAll();
});

themeToggle.addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("totk-theme", state.theme);
  applyTheme();
});

function persist() {
  localStorage.setItem("totk-owned", JSON.stringify([...state.owned]));
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  themeToggle.textContent = state.theme === "dark" ? "Light mode" : "Dark mode";
  themeToggle.setAttribute("aria-pressed", String(state.theme === "dark"));
}

function renderIcon(container, item) {
  container.textContent = item.icon || item.name.slice(0, 2).toUpperCase();
  container.style.background = item.color || "#26332f";

  if (!item.image) return;

  const image = document.createElement("img");
  image.alt = "";
  image.loading = "lazy";
  image.decoding = "async";
  image.addEventListener("error", () => {
    image.remove();
    container.textContent = item.icon || item.name.slice(0, 2).toUpperCase();
  });
  container.textContent = "";
  container.append(image);
  image.src = item.image;
}

function renderIngredients() {
  ingredientGrid.innerHTML = "";
  const filtered = ingredients.filter((ingredient) => {
    const inCategory = state.category === "all" || ingredient.type === state.category;
    const matchesQuery = !state.query || `${ingredient.name} ${ingredient.tag}`.toLowerCase().includes(state.query);
    return inCategory && matchesQuery;
  });

  if (!filtered.length) {
    ingredientGrid.innerHTML = '<div class="empty-state">No materials found.</div>';
    return;
  }

  filtered.forEach((ingredient) => {
    const node = ingredientTemplate.content.firstElementChild.cloneNode(true);
    const owned = state.owned.has(ingredient.id);
    node.classList.toggle("selected", owned);
    node.setAttribute("aria-pressed", String(owned));
    renderIcon(node.querySelector(".ingredient-art"), ingredient);
    node.querySelector("strong").textContent = ingredient.name;
    node.querySelector("small").textContent = ingredient.tag;
    node.addEventListener("click", () => {
      if (state.owned.has(ingredient.id)) {
        state.owned.delete(ingredient.id);
      } else {
        state.owned.add(ingredient.id);
      }
      persist();
      renderAll();
    });
    ingredientGrid.append(node);
  });
}

function recipeStatus(recipe) {
  const used = new Set();
  const missing = [];
  const matched = [];

  recipe.ingredients.forEach((requirement, index) => {
    const ids = typeof requirement === "string" ? [requirement] : requirement.ids;
    const ownedMatch = ids.find((id) => state.owned.has(id) && !used.has(id));

    if (ownedMatch) {
      used.add(ownedMatch);
      matched.push({ index, requirement, id: ownedMatch });
    } else {
      missing.push(requirement);
    }
  });

  const available = missing.length === 0;
  return { missing, available, ownedCount: matched.length, matched };
}

function sortedRecipes() {
  return recipes
    .map((recipe) => ({ ...recipe, status: recipeStatus(recipe) }))
    .sort((a, b) => {
      if (state.sort === "available") {
        return Number(b.status.available) - Number(a.status.available) || b.score - a.score;
      }
      if (state.sort === "missing") {
        return a.status.missing.length - b.status.missing.length || b.score - a.score;
      }
      if (state.sort === "hearts") {
        return b.hearts - a.hearts || b.score - a.score;
      }
      const aScore = a.score + (a.status.available ? 40 : 0) + a.status.ownedCount * 8 - a.status.missing.length * 12;
      const bScore = b.score + (b.status.available ? 40 : 0) + b.status.ownedCount * 8 - b.status.missing.length * 12;
      return bScore - aScore;
    });
}

function renderRecipes() {
  recipeList.innerHTML = "";
  const ranked = sortedRecipes();
  const available = ranked.filter((recipe) => recipe.status.available);
  const almost = ranked.filter((recipe) => recipe.status.missing.length === 1);
  const bestEffect = available.find((recipe) => recipe.effect !== "No effect")?.effect.split(" ")[0] || "-";

  document.querySelector("#ownedCount").textContent = state.owned.size;
  document.querySelector("#availableCount").textContent = available.length;
  document.querySelector("#almostCount").textContent = almost.length;
  document.querySelector("#topEffect").textContent = bestEffect;
  document.querySelector("#resultSummary").textContent = state.owned.size
    ? `${available.length} meals can be cooked now, ${almost.length} are missing one material.`
    : `${ranked.length} recipes in the cookbook. Select materials to see what you can cook now.`;

  ranked.forEach((recipe) => {
    const node = recipeTemplate.content.firstElementChild.cloneNode(true);
    const { missing, available: canCook } = recipe.status;
    node.classList.toggle("available", canCook);
    node.classList.toggle("locked", !canCook);
    renderIcon(node.querySelector(".recipe-icon"), recipe);
    node.querySelector("h3").textContent = recipe.name;
    node.querySelector(".recipe-description").textContent = recipe.description;
    node.querySelector(".recipe-meta").innerHTML = [
      pill(canCook ? "Cook now" : `${missing.length} missing`, canCook ? "good" : "warn"),
      pill(`${recipe.hearts} hearts`),
      pill(recipe.effect, recipe.effect === "No effect" ? "" : "good")
    ].join("");
    node.querySelector(".recipe-ingredients").innerHTML = recipe.ingredients
      .map((requirement, index) => {
        const match = recipe.status.matched.find((item) => item.index === index);
        return match
          ? pill(ingredientById.get(match.id).name, "good")
          : pill(requirementLabel(requirement), "missing");
      })
      .join("");
    node.querySelector(".missing-line").textContent = canCook
      ? "You have everything needed."
      : `Missing: ${missing.map(requirementLabel).join(", ")}`;
    recipeList.append(node);
  });
}

function requirementLabel(requirement) {
  if (typeof requirement !== "string") return requirement.label;
  return ingredientById.get(requirement)?.name || requirement;
}

function pill(text, className = "") {
  return `<span class="pill ${className}">${text}</span>`;
}

function renderAll() {
  renderIngredients();
  renderRecipes();
}

renderAll();

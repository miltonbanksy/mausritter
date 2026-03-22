const treasure_menu1 = {
    1: () => "Magic Sword. " + generateMagicSword(),
    2: () => "Spell: " + getRandomFromArray(spells),
    3: () => "Trinket: " + getRandomFromArray(trinkets),
    4: () => getRandomFromArray(treasure_valuable),
    5: () => getRandomFromArray(treasure_unusual),
    6: () => getRandomFromArray(treasure_large),
    7: () => getRandomFromArray(treasure_large),
    8: () => getRandomFromArray(treasure_large),
    9: () => getRandomFromArray(treasure_useful),
    10: () => getRandomFromArray(treasure_useful),
    11: () => "Box containing " + roll_xdx(1, 6) * 100 + " pips.",
    12: () => "Bag containing " + roll_xdx(1, 6) * 50 + " pips.",
    13: () => "Bag containing " + roll_xdx(1, 6) * 50 + " pips.",
    14: () => "Bag containing " + roll_xdx(1, 6) * 50 + " pips.",
    15: () => "Purse containing " + roll_xdx(1, 6) * 10 + " pips.",
    16: () => "Purse containing " + roll_xdx(1, 6) * 10 + " pips.",
    17: () => "Purse containing " + roll_xdx(1, 6) * 10 + " pips.",
    19: () => "Loose scattering of " + roll_xdx(1, 6) * 5 + " pips.",
    20: () => "Loose scattering of " + roll_xdx(1, 6) * 5 + " pips."
};

const magic_weapon_classes = [
    {"min": 1, "max": 4, "weapon_class": "Medium (d6 1-handed or d8 2-handed)"},
    {"min": 5, "max": 6, "weapon_class": "Light (d6 1-handed, can be dual-wielded)"},
    {"min": 6, "max": 6, "weapon_class": "Heavy (d10 2-handed)"},
];

const magic_sword_type = [
    "Wrought Iron. While wielded, you roll 'critical damage saves' with advantage.",
    "Intricate Fae Design. While wielded, you may disguise yourself as any mouse-sized creature.",
    "Rusty Nail. On 'critical damage', give a 'frightened' condition.",
    "Snake Fang. On 'critical damage', deal d6 additional damage to DEX.",
    "Toy Soldier's Sabre. While wielded and leading a warband, they have +1 Armor.",
    "Water-Worn Glass. While wielded, you can hold your breath underwater for 1 Turn.",
    "Wolf Tooth. On 'critical damage', your next attack is enhanced.",
    "Silver Sewing Needle. On 'critical damage', clear all usage dots from a non-spell item in your inventory.",
    "Thorny Rose Stem. On 'critical damage', remove a 'condition'.",
    "Congealed Shadow. While wielded, you are invisible when standing perfectly still."
];

const curses = [
  "Roll 'critical damage saves' with Disadvantage.",
  "When you gain an 'Exhausted' Condition, gain another.",
  "Make a WIL save to not attack when threatened.",
  "Reaction rolls are made with -1 modifier.",
  "If you see an ally take damage, take a 'Frightened' Condition.",
  "Spells cast in your presence always mark usage"
];

const curse_lifts = [
    "Making a selfless sacrifice in a life or death situation.",
    "Trading places with a poor farmer for a season.",
    "Making lasting peace with a mortal enemy.",
    "Giving away everything you own, no cheating.",
    "Fulfilling a mouse's dying wish.",
    "Destroying an owl sorcerer's source of power"
];

const trinkets = [
  "Ghost lantern (casts a light that banishes ghosts)",
  "Speaking shells (one speaks what the other hears)",
  "Breathing straw (tube that always contains air)",
  "Bat cultist's dagger (grants passage into sanctum)",
  "Magic beans (grow fully in d6 Turns)",
  "Working human device (make up something fun)"
];

const treasure_valuable = [
  "Wheel of fine aged cheese (100p)",
  "Silver chain (2 slots, 500p)",
  "Jeweled pendant (400p)",
  "Gold ring (500p)",
  "Polished diamond (1000p)",
  "String of pearls (2 slots, 1500p)"
];

const treasure_unusual = [
  "Bundle of pungent herbs (200p to an apothecary)",
  "Odd-coloured dried mushrooms (200p to a witch)",
  "Eerily glowing stone (300p to a wizard)",
  "Heirloom of sentimental value to a noblemouse",
  "Legal documents granting land rights to the holder",
  "Treasure map"
]

const treasure_large = [
  "Oversized silver spoon (2 slots, 300p)",
  "Ivory comb (4 slots, 400p)",
  "Huge bottle of fine brandy (4 slots, 500p)",
  "Ancient mouse statue (4 slots, 500p)",
  "Ancient mouse throne (6 slots, 1000p)",
  "Giant golden wristwatch (4 slots, 1000p)"
];

const treasure_useful = [
  "d6 packs of rations, well preserved",
  "d6 bundles of torches",
  "Mundane weapon",
  "Mundane armour",
  "Mundane utility item",
  "Lost mouse, willing to help"
];

// Fill this in with brick-a-brack...
const carried_bricabrac = [
  "Dried five-leaf clover, carefully folded",
  "Stone pendant of the Mother",
  "Stub of a pencil",
  "Dried herbs in waterproof bag",
  "Wire bent into the shape of a moth",
  "Letter of writ from a noblemouse",
  "Smooth piece of coloured glass",
  "Half-eaten piece of cheese, wrapped in paper",
  "Smoke-blackened bat tooth",
  "Metal cup etched with hunting scenes",
  "Oddly shimmering opal in silver wire setting",
  "Knife cut from a tin can",
  "Clay jar of thick honey mead",
  "Bee stinger wired to wooden handle",
  "Piece of candied berry",
  "Butterfly wings pressed between parchment",
  "Map showing treasure hidden in a settlement",
  "Note from a cat lord regarding a player mouse",
  "Wooden idol of centipede eating its own tail",
  "Tooth of a human child",
  "Pot of bright paint",
  "Angry ant queen in a glass jar",
  "Rolled tapestry depicting ancient battle",
  "Ball of wet clay that never dries out",
  "Lock of a faerie's hair",
  "Vial of red ink",
  "Straw basket with leather carrying straps",
  "Fragment of a spell tablet",
  "Dried, poisonous mushroom",
  "Pink plastic furbrush",
  "Collection of dried leaves, bound with twine",
  "Pipe carved of shell",
  "Scrap of sheepskin",
  "Quiver of silver-tipped arrows",
  "Wreath of silver wire",
  "Very strong magnet",
  "Bouncy rubber ball",
  "Fish leather satchel",
  "Extremely spicy chilli pepper",
  "Fly preserved in tree sap"
];

const btnRandomTreasure = document.querySelector('#btn-random-treasure');
const displayRandomTreasure = document.querySelector('#display-random-treasure');

function generateMagicSwordType() {
    return getRandomFromArray(magic_sword_type);
}

function checkCursedSword() {
    const roll = roll_xdx(1, 6);
    const isCursed = (roll == 1) ? "Cursed" : "Not cursed";

    if ( isCursed == "Cursed" ) {
        const curse_type = getRandomFromArray(curses);
        const curse_lift = getRandomFromArray(curse_lifts);
        return `
        ${isCursed}.
        <br><br>Cursed swords bind to the mouse who first holds them, and cannot be removed from the mouse's inventory.
        <br><br>While the curse remains, the sword has no beneficial power. Once lifted, the sword regains its power.
        <br><br>Curse: ${curse_type}
        <br><br>Lifted By: ${curse_lift}
        `;
    } else {
        return isCursed;
    } 
}

function generateMagicSwordClass() {
    const roll = roll_xdx(1, 6);
    const weapon_class = magic_weapon_classes.find(entry => roll >= entry.min && roll <= entry.max);
    return weapon_class.weapon_class;
}

function generateMagicSword() {
    const curseCheck = checkCursedSword();
    const magic_sword_class = generateMagicSwordClass();
    const magic_sword_type = generateMagicSwordType();

    return `${curseCheck}
    <br><br>Class: ${magic_sword_class}
    <br><br>Type: ${magic_sword_type}
    `;
}

// I'm getting a random entry from the object.
// Maybe I should be finding by dice roll...
btnRandomTreasure.addEventListener('click', () => {
    const keys = Object.keys(treasure_menu1);
    const index = Math.floor(Math.random() * keys.length);
    const randomKey = keys[index];
    displayRandomTreasure.innerHTML = treasure_menu1[randomKey]();
});

const btnRandomMagicSword = document.querySelector('#btn-random-magic-sword');
const displayRandomMagicSword = document.querySelector('#display-random-magic-sword');

btnRandomMagicSword.addEventListener('click', () => {
    const magic_sword = generateMagicSword();
    displayRandomMagicSword.innerHTML = magic_sword;
});


const btnRandomBricabrac = document.querySelector('#btn-random-bricabrac');
const displayRandomBricabrac = document.querySelector('#display-random-bricabrac');

btnRandomBricabrac.addEventListener('click', () => {
    let bricabrac = "";
    const roll = roll_xdx(1, 6);
    if ( roll == 1 ) {
        bricabrac = roll_xdx(1, 8) + " pips"
    } else {
        bricabrac = getRandomFromArray(carried_bricabrac);
    }
    displayRandomBricabrac.innerHTML = bricabrac;
});
// Load JSON files
async function loadJSON(path) {
    try {
        const response = await fetch(path);
        return await response.json();
    } catch (error) {
        console.log(`Error loading ${path}:`, error);
    }
}

const tables = {};


function getRandomFromArray(array) {
    const entry = Math.floor(Math.random() * array.length);
    return array[entry];
}


function sumArray(array) {
    return array.reduce((a, b) => a + b, 0);
}


function roll_xdx(number_of_dice, number_of_sides) {
    const dice_pool = [];
    for (let i = 0; i < number_of_dice; i++) {
        roll = Math.floor(Math.random() * number_of_sides) + 1;
        dice_pool.push(roll);
    }
    return dice_pool;
}
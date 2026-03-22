function sumArray(array) {
    return array.reduce((a, b) => a + b, 0);
}

function roll_xdx(number_of_dice, number_of_sides) {
    const dice_pool = [];
    for (let i = 0; i < number_of_dice; i++) {
        roll = Math.floor(Math.random() * number_of_sides) + 1;
        console.log("Roll:", roll)
        dice_pool.push(roll);
    }
    console.log(dice_pool);
    return dice_pool;
}
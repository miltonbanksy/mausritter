const btnRandomRoomStock = document.querySelector('#btn-random-room-stock');
const displayRandomRoomStock = document.querySelector('#display-random-room-stock');

btnRandomRoomStock.disabled = true;

async function init() {
    tables.rooms = await loadJSON("data_rooms.json");
    btnRandomRoomStock.disabled = false;
}

init();

btnRandomRoomStock.addEventListener('click', () => {
    
    // Generate the Room Type
    const d6 = roll_xdx(1, 6);
    const room = tables.rooms.find(entry => d6 >= entry.min && d6 <= entry.max);
    
    console.log(room);
    console.log(room['room_type']);

    // Check for Creature
    const creatureRoll = roll_xdx(1, 6);
    const hasCreature = creatureRoll >= room.creature.min && creatureRoll <= room.creature.max;

    console.log(`Creature Roll: ${creatureRoll}, Creature: ${hasCreature}`);

    // Check for Treasure
    const treasureRoll = roll_xdx(1, 6);
    const hasTreasure = treasureRoll >= room.treasure.min && treasureRoll <= room.treasure.max;

    console.log(`Treasure Roll: ${treasureRoll}, Treasure: ${hasTreasure}`);

    // Get Random Room Contents (based on Room Type)
    const index = Math.floor(Math.random() * room.room_contents.length);
    const room_contents = room.room_contents[index];

    console.log(`Room Contents: ${room_contents}`);
    
    displayRandomRoomStock.innerHTML = `
    ${room['room_type']}, Creature: ${hasCreature ? "Yes" : "No"}, Treasure: ${hasTreasure ? "Yes" : "No"}
    <br><br>${room['room_description']}
    <br><br>Contents: ${room_contents}
    `;
});
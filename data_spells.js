const spells = [
  "Fireball. Shoot a fireball up to 24\". Deal [SUM] + [DICE] damage to all creatures within 6\".<br><br>Recharge: Burn in the heart of a raging fire for three days and nights.",
  "Heal. Heal [SUM] STR damage and remove the Injured Condition from a creature.<br><br>Recharge: Cut self for d6 STR damage, sprinkle the spell with the blood.",
  "Magic Missile. Deal [SUM] + [DICE] damage to a creature within sight.<br><br>Recharge: Drop from a height of at least 30ft. Touch the spell within one Turn.",
  "Fear. Give the Frightened Condition to [DICE] creatures.<br><br>Recharge: Receive the Frightened Condition from a hostile creature while carrying the spell.",
  "Darkness. Create a [SUM] x 2\" diameter sphere of pure darkness for [DICE] Turns.<br><br>Recharge: Leave uncovered in a lightless place for three days.",
  "Restore. Remove Exhausted or Frightened Condition from [DICE] + 1 creatures.<br><br>Recharge: Bury in a peaceful field or riverbank for three days.",
  "Be Understood. Make your meaning clear to [DICE] creatures of another species for [DICE] Turns.<br><br>Recharge: Give away freely to a creature of another species.",
  "Ghost Beetle. Create an illusory beetle that can carry 6 inventory slots for [DICE] x 6 Turns.<br><br>Recharge: Bury in a beetle graveyard for three nights.",
  "Light. Force [DICE] creatures to make a WIL save or become stunned. Alternately, create light as bright as a torch for [SUM] turns.<br><br>Recharge: Catch in the first light of a sunrise and the last light of sunset for three days.",
  "Invisible Ring. Creates [DICE] x 6\" ring of force. It is invisible and immovable. Lasts [DICE] Turns.<br><br>Recharge: Build an iron ring the same size as last cast. Recharge: Pass the spell though it. Dissolves the ring.",
  "Knock. Open a door or container, as if a Save were made with STR score of 10 + [DICE] x 4.<br><br>Recharge: Put in a locked box, inside a locked box, inside a locked box. Leave for three days.",
  "Grease. Cover [DICE] x 6\" area in slippery, flammable grease. Creatures in the area must make a DEX save or fall prone.<br><br>Recharge: Rub all over in animal fat. Leave until it putrefies.",
  "Grow. Grow a creature to [DICE] + 1 times its original size for 1 Turn.<br><br>Recharge: Leave in the highest branches of a tall tree for three days.",
  "Invisibility. Make creature invisible for [DICE] Turns. Any movement reduces duration by 1 Turn.<br><br>Recharge: Go a day without opening your eyes once, while holding the spell.",
  "Catnip. Turn object into an irresistible lure for cats. Lasts [DICE] Turns.<br><br>Recharge: Give a cat a gift it truly desires."
];

const btnRandomSpell = document.querySelector('#btn-random-spell');
const displayRandomSpell = document.querySelector('#display-random-spell');

btnRandomSpell.addEventListener('click', () => {
    const spell = getRandomFromArray(spells);
    displayRandomSpell.innerHTML = spell;
});
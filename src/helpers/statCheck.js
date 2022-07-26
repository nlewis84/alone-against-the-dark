/** @format */

function statCheck(skill, currentCharacterStats, multiplyer) {
  // roll a d100. if that number is equal to or less than currentCharacterStats[skill], the skill check is a success. otherwise, it is a failure.
  const dieRoll = Math.floor(Math.random() * 100) + 1;
  console.log(dieRoll, currentCharacterStats[skill], dieRoll <= currentCharacterStats[skill]);
  if (dieRoll <= currentCharacterStats[skill] * multiplyer) {
    return { success: true, roll: dieRoll };
  } else {
    return { success: false, roll: dieRoll };
  }
}

export default statCheck;

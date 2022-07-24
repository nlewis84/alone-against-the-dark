/** @format */

function skillCheck(skill, currentCharacterSkills) {
  // roll a d100. if that number is equal to or less than currentCharacterSkills[skill], the skill check is a success. otherwise, it is a failure.
  const dieRoll = Math.floor(Math.random() * 100) + 1;
  console.log(dieRoll, currentCharacterSkills[skill], dieRoll <= currentCharacterSkills[skill]);
  if (dieRoll <= currentCharacterSkills[skill]) {
    return 'success';
  } else {
    return 'failure';
  }
}

export default skillCheck;

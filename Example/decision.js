// return false to cheat, true to cooperate
// [
//   { yours: true, theirs: true },
//   { yours: true, theirs: false },
// ]

function countTheirsTrue(array) {
  var count = array.reduce((currentCount, number) => {
    number.theirs ? currentCount++ : {};
    return currentCount;
  }, 0);
  return count;
}

function countMeTrue(array) {
  var count = array.reduce((currentCount, number) => {
    number.yours ? currentCount++ : {};
    return currentCount;
  }, 0);
  return count;
}

function checkMe(history) {
  //return Math.random() < 0.5 ? true : false;
  const myRate = countMeTrue(history) / history.length;
  return myRate >= 0.5 ? false : Math.random() < 0.5 ? true : false;
}
function checkTheirs(history) {
  return countMeTrue(history) / history.length >= 0.5 ? false : true;
}
const decide = (history = []) => {
  const rate = countTheirsTrue(history) / history.length;
  return rate > 0.5 ? checkMe(history) : checkTheirs(history);
}
// var data = [
//   { yours: true, theirs: true },
//   { yours: false, theirs: false },
//   { yours: false, theirs: true },
// ]
// console.log(decide(data));
module.exports = decide;
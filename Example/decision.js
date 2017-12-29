// return false to cheat, true to cooperate
// [
//   { yours: true, theirs: true },
//   { yours: true, theirs: false },
// ]

function countTrue(array) {
  var count = array.reduce((currentCount, number) => {
    number.theirs ? currentCount++ : {};
    return currentCount;
  }, 0);
  return count;
}

const decide = (history = []) => {
  const rate = countTrue(history) / history.length;
  return rate >= 0.5 ? true : false;
}
// var data = [
//   { yours: true, theirs: true },
//   { yours: true, theirs: false },
//   { yours: true, theirs: false },
// ]
// console.log(decide(data));
module.exports = decide;
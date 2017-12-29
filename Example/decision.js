// return false to cheat, true to cooperate
// [
//   { yours: true, theirs: true },
//   { yours: true, theirs: false },
// ]

function countTrue(array) {
  var count = array.reduce((currentCount, number) => {
    number ? currentCount++ : {};
    return currentCount;
  }, 0);
  return count;
}

const decide = (history = []) => {
  const rate = countTrue(history) / history.length;
  console.log(rate);
  return rate >= 0.5 ? true : false;
}
// var data = [true, false, false, false, true];
// console.log(decide(data));
module.exports = decide;
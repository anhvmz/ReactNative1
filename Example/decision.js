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
<<<<<<< HEAD
  return rate >= 0.5 ? Math.random() < 0.5 ? true : false : false;
=======
  return rate >= 0.5 ? true : false;
>>>>>>> 487cc3ccd9bcbdf0826c50cc4f73fbcb7c31df39
}
// var data = [
//   { yours: true, theirs: true },
//   { yours: true, theirs: false },
<<<<<<< HEAD
//   { yours: true, theirs: true },
=======
//   { yours: true, theirs: false },
>>>>>>> 487cc3ccd9bcbdf0826c50cc4f73fbcb7c31df39
// ]
// console.log(decide(data));
module.exports = decide;
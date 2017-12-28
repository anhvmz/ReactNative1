'use strict'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function initArray(arr, testLength) {
  for (let i = 0; i < testLength; i++) {
    arr.push(Math.floor(getRandomArbitrary(-1000, 1000)));
  }
  return arr;
}

function initNode(testLengthArray) {
  var result = [];
  for (let i = 0; i < testLengthArray.length; i++) {
    var data = [];
    initArray(data, testLengthArray[i]);
    data.sort((a, b) => a - b);

    switch (i) {
      case 0 : {
        result.push({
          "input": data,
          "target": data[0],
          "output": 0
        });
        break;
      }
      case 1 : {
        result.push({
          "input": data,
          "target": data[data.length - 1],
          "output": data.length - 1
        });
        break;
      }
      case 2 : {
        result.push({
          "input": data,
          "target": 10000,
          "output": -1
        });
        break;
      }
      default : {
        var target = Math.floor(getRandomArbitrary(-1000, 1000));
        result.push({
          "input": data,
          "target": target,
          "output": data.indexOf(target)
        });
      }
    }
    
  }
  return result;
}
function generate(testLengthArray) {
  return initNode(testLengthArray);
}
module.exports = generate

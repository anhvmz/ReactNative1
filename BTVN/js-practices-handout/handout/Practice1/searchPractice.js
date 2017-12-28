'use strict'

function binaryIndexOf(input, target) {
  var minIndex = 0;
  var maxIndex = input.length - 1;
  var currentIndex;
  var currentElement;
  var resultIndex;

  while (minIndex <= maxIndex) {
    resultIndex = currentIndex = (minIndex + maxIndex) / 2 | 0;
    currentElement = input[currentIndex];

    if (currentElement < target) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > target) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

function search(input, target) {
  return binaryIndexOf(input, target);
}

module.exports = search


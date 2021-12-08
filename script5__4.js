"use strict";

function myFunc4(word, arr) {
  let wordArr = word.split("").sort();
  let resultArr = [];

  let arr1 = arr.forEach((currentValue, index, arr) => {
    let ArrSort = currentValue.split("").sort();
    if (JSON.stringify(ArrSort) === JSON.stringify(wordArr)) {
      resultArr.push(currentValue);
    }
  });
  console.log(resultArr);
}

myFunc4("listen", ["enlists", "google", "inlets", "banana"]);
myFunc4("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"]);

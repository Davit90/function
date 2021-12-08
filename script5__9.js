"use strict";

function myFunc9(arr, str) {
  let result = arr.filter(function (currentValue) {
    return currentValue > str;
  });

  if (result.length > 0) {
    console.log(result);
  } else {
    console.log("Such values do not exist");
  }
}

myFunc9([10, 25, 16, -5, 30, 15, 24], 16);
myFunc9([1, 1, 2, -3, 0, 8, 4, 0], 9);

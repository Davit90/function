"use strict";

function myFunc(arr) {
  let arrEven = [];
  let arrOdd = [];
  arr.forEach(function (item) {
    if (item % 2 === 0) {
      arrEven.push(item);
    } else {
      arrOdd.push(item);
    }
  });

  console.log(arrOdd);
  console.log(arrEven);
}

myFunc([45, 12, 3, 6, 17, 0]);
myFunc([1, 3, 5, 9]);

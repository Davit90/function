"use strict";

function myFunc1(arr, op) {
  let res = arr.reduce(get);
  function get(total, currentValue) {
    return total + op + currentValue;
  }
  console.log(eval(res));
}

myFunc1([45, 12, 3, 6, 17, 0], "+");

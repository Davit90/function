"use strict";

function myfunc8(str) {
  let arr = str.split(" ");
  let count = 0;
  let string = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > count) {
      string = arr[i];
      count = arr[i].length;
    }
  }
  console.log(string);
}

myfunc8("A revolution without dancing is a revolution not worth having.");
myfunc8(
  "Which would be worse - to live as a monster, or to die as a good man?"
);

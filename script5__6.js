"use strict";

function myFunc6(str1, str2) {
  let re = new RegExp(str2, "g");
  let res = str1.replace(re, "");
  console.log(res);
}

myFunc6("This is some text.", "is");
myFunc6(
  "Yes, London. You know: fish, chips,cup o tea, badfood, worse weather",
  "o"
);

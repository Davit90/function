"use strict";

function myFunc5(string) {
  "use strict";

  let str = "";
  let num = 0;
  let arr = string.split("");

  for (let i = 0; i < arr.length + 1; i++) {
    let x = Number(arr[i]);
    if (!isNaN(x)) {
      str += arr[i];
    } else if (arr[i] === "-") {
      str += arr[i];
    } else {
      str = Number(str);
      num += str;
      str = "";
    }
  }
  console.log(num);
}

myFunc5("FwrtY45KHL120mn10P");
myFunc5("Wert12lop-12");

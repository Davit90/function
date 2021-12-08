"use strict";

function tel(arg) {
  let str = arg.replace(/\s/g, "");

  if (str.length < 10) {
    console.log("Bad number");
  } else {
    let result = str.match(/[+]/gi);
    if (result !== null) {
      result = result.join();
    }

    if (result === null && str.length === 10) {
      console.log(str);
    } else if ((result !== "+" && str.length === 11) || str.length > 11) {
      console.log("Bad number");
    } else {
      let x = arg.indexOf("+");
      if (x < 1) {
        let res = arg.substring(1);
        console.log(res);
      } else {
        console.log("Bad number");
      }
    }
  }
}

tel("455678");
tel("339 5656888");
tel("+0008989562");
tel("45231489562");
tel("123+2356897452");

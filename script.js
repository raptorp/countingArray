"use strict";

const array = [];
let number = 0;
loop();

function loop() {
  console.log("loop", number);
  number++;

  // array is max 9 charracters long
  array.splice(8);

  // place the newest item first in the array
  array.unshift(number);

  if (number < 20) {
    // set counting speed
    setTimeout(loop, 1000);
  } else {
    // stops counting after 20 because why not?
    setTimeout(stop);
  }

  console.log(array);
}

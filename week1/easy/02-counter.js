//todo  : Counter without setInterval

// todo : Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

let counter = 0;
function updateCounter() {
  console.log(`counter : ${counter}`);
  counter++;
  setTimeout(updateCounter, 1000);
}

updateCounter()
let index_i = 0;
let index_j = 0;

let size = 40;
let fr = 300; // 1 - slowest, 300 - fastest

let array = [];
let sorted = false;

function createArray(windowWidth) {
  for (i = 0; i < Math.floor(windowWidth / size); i++)
    array.push(Math.floor(random(20, height - 20)));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createArray(windowWidth);
  frameRate(fr);
}

const sleep = () =>
  new Promise((resolve, _reject) => {
    setTimeout(function () {
      resolve("Have a nap."); // Yay! Everything went well!
    }, 1250);
  });

async function draw() {
  background(50);

  for (let i = 0; i < array.length; i++) {
    stroke(200, 100, 100);
    fill(200, 0, 200, 100);
    if ((array[i] && array[i + 1] && i === index_i) || i === index_i + 1) {
      fill(200, 0, 10, 100);
    }
    rect(i * size, 0, size, array[i]);
    if (size >= 40) text(array[i], i * size + size / 4, array[i] - 10);
  }

  await sleep();
  // BUBBLE SORT

  let swap;

  if (index_j < array.length - 1) {
    if (index_i < array.length - index_j - 1) {
      if (array[index_i] > array[index_i + 1]) {
        swap = array[index_i];
        array[index_i] = array[index_i + 1];
        array[index_i + 1] = swap;

        clear();
        background(50);
        for (let i = 0; i < array.length; i++) {
          stroke(200, 100, 100);
          fill(200, 0, 200, 100);
          if (
            (array[i] && array[i + 1] && i === index_i) ||
            i === index_i + 1
          ) {
            fill(10, 0, 100);
          }
          rect(i * size, 0, size, array[i]);
          if (size >= 40) text(array[i], i * size + size / 4, array[i] - 10);
        }
      }

      index_i++;
    } else {
      index_i = 0;
      index_j++;
    }
  } else {
    sorted = true;
  }

  if (sorted) {
    console.log("Sorted!");
    noLoop();
    return;
  }
}

//What is the output of this code?
//Q1
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//Q2
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

//Q3
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

//Q5
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}

//Q6
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

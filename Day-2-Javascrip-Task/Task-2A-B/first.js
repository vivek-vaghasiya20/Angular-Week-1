var input = [1, 2, 3, 4, 5, 6];

var output = [];

input.forEach((element) => {
  output.push(element * 2);
});

console.log(output);

//////////////////////////////////////////////////////////

var input2 = [0, 23, 0, 0, 0, 4, 6, 0, 8, 10, 0, 0, 0, 12];

const arrlength = input2.length;

for (let i = 0; i < arrlength; i++) {
  for (let j = 0; j < arrlength - 1 - i; j++) {
    if (input2[j] < input2[j + 1]) {
      const temp = input2[j];
      input2[j] = input2[j + 1];
      input2[j + 1] = temp;
    }
  }
}

console.log(input2);

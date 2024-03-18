// make custome method for find the middle element of the array.

Array.prototype.getMiddleElement = function () {
  if (this.length === 0) {
    return null;
  }
  const middleIndex = Math.floor(this.length / 2);
  return this[middleIndex];
};

const numbers = [1, 2, 3, 4, 5];
const middleElement = numbers.getMiddleElement();

console.log(middleElement);

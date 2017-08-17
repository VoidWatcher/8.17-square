function square (arr) {
  return arr.map((value) => Math.pow(value, 2));
}

console.log(square([5, 3, 7, 1]));
// DECLARATIVE
const double = arr => arr.map(e =>  e * 2);

const add = arr => arr.reduce((a, b) => a + b);


// IMPERATIVE
function iDouble(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i] * 2);
  }
  return results;
}

function iAdd(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

let sampleArr = [1, 2, 3];

console.log(iDouble(sampleArr));
console.log(add(sampleArr));

const arr = [1, 2, 3];

let arr2 = [];

for (let num of arr) {
  arr2.push(num);
}

arr2[0] = 99;

console.log("Orginal:[" + arr + "]Copy:[" + arr2 + "]");

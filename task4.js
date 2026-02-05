const statement = "I am a hard working person";
let str = "";
for (let ele of statement.split(" ")) {
  str = ele + " " + str;
}

console.log(str);

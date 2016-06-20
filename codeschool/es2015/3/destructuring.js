let buildUser = require("./buildUser.js");

let z = buildUser("Zachary", "Cameron Lynch");

let zFirst = z.first;
let zLast = z.last;
let zFullName = z.fullName;

console.log(zFirst, zLast, zFullName);


let {first, last} = buildUser("Kasia", "Koscielak");
console.log("firts & last");
console.log(first, last);

let {fullName} = buildUser("Kasia", "Koscielak");
console.log("full");
console.log(fullName);

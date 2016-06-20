function buildUserOldSchool(first, last){
    let fullName = first + " " + last;
    return {first: first, last: last, fullName: fullName};
}

let z = buildUserOldSchool("Zachary", "Cameron Lynch");

console.log(z.first);
console.log(z.last);
console.log(z.fullName);

let buildUser = require("./buildUser.js");

let k = buildUserOldSchool("Kasia", "Koscielak");

console.log(k.first);
console.log(k.last);
console.log(k.fullName);
let users = ["Sam", "Tyler", "Brook"];
let a = users[0];
let b = users[1];
let c = users[2];

console.log(a,b,c);

let [a2,b2,c2] = users;

console.log(a2,b2,c2);


let [a3,,c3] = users;

console.log(a3,c3);

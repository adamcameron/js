let names = ["Sam", "Tyler", "Brook"];

console.log(typeof names[Symbol.iterator]);

let post = {
    title : "New Features in JS",
    replies : 19,
    lastReply : "Sam"
};
console.log(typeof post[Symbol.iterator]);
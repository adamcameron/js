"use strict";

let post = {
    title : "New Features in JS",
    replies : 19
};
post[Symbol.iterator] = function *(){
    let properties = Object.keys(this);

    for (let p of properties) {
        yield this[p];
    }
}

for (let prop of post) {
    console.log(prop);
}
console.log("=====");

let values = [...post];
console.log(values);
console.log("=====");

let [title, replies] = post;
console.log(title);
console.log(replies);
console.log("=====");

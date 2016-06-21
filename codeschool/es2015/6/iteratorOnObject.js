"use strict";

let post = {
    title : "New Features in JS",
    replies : 19
};
post[Symbol.iterator] = function(){
    let properties = Object.keys(this);
    let index = 0;
    let next = () => {
        return {
            done : index >= properties.length,
            value : this[properties[index++]]
        };
    };
    return {next};
}

for (let prop of post) {
    console.log(prop);
}

let values = [...post];
console.log(values);

let [title, replies] = post;
console.log(title);
console.log(replies);

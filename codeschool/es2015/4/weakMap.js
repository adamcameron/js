let user = {};
let comment = {};

let mapSettings = new WeakMap();
mapSettings.set(user, "user");
mapSettings.set(comment, "comment");

console.log(mapSettings.get(user));
console.log(mapSettings.get(comment));

// mapSettings.set("title", "ES2015"); // error

for ([key, value] of mapSettings) { // error
    console.log(`${key} = ${value}`);
}
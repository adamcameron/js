let mapSettings = new Map();

mapSettings.set("user", "Sam");
mapSettings.set("topic", "ES2015");
mapSettings.set("replies", ["Can't wait!", "So cool"]);

for (let [key, value] of mapSettings){
    console.log(`${key} = ${value}`);
}

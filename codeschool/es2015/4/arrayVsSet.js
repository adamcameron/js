let tags = [];
tags.push("JavaScript");
tags.push("Programming");
tags.push("Web");
tags.push("Web");

console.log(`Total items: ${tags.length}`);

tags = new Set();
tags.add("JavaScript");
tags.add("Programming");
tags.add({version:"2015"});
tags.add("Web");
tags.add("Web");

console.log(`Total items: ${tags.size}`);

for (let tag of tags) {
    console.log(tag);
}

let [a,b,c,d] = tags;
console.log(a,b,c,d);
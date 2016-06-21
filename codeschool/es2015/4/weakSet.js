let weakTags = new WeakSet();

try {
    weakTags.add("JavaScript");
} catch (e){
    console.log(e);
}

weakTags.add({name: "JavaScript"});

let iOs = {name: "iOS"};

weakTags.add(iOs);
console.log(`has iOS: ${weakTags.has(iOs)}`);
console.log(`delete iOS: ${weakTags.delete(iOs)}`);
console.log(`has iOS: ${weakTags.has(iOs)}`);

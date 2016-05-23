var setPageThread = function(name, {popular, expires, activeClass}) {
    console.log("Name:", name);
    console.log("Popular:", popular);
    console.log("Expires:", expires);
    console.log("Active:", activeClass);
};

console.log("\nAll options");
setPageThread("New version out soon!", {
    popular : true,
    expires : 10000,
    activeClass : "is-page-thread"
});

console.log("\nSome options");
setPageThread("New version out soon!", {
    popular : true
});


console.log("\nNo options");
try {
    setPageThread("New version out soon!"); // error
} catch (e){
    console.log(e);
}

var setPageThread = function(name, {popular, expires, activeClass}={}) {
    console.log("Name:", name);
    console.log("Popular:", popular);
    console.log("Expires:", expires);
    console.log("Active:", activeClass);
};

console.log("\nNo options (revised)");
setPageThread("New version out soon!");
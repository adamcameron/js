var setPageThread = function(name, options={}) {
    let popular = options.popular;
    let expires = options.expires;
    let activeClass = options.activeClass;

    console.log([popular, expires,activeClass]);
};


setPageThread("New version out soon!", {
    popular : true,
    expires : 10000,
    activeClass : "is-page-thread"
});

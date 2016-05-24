let getRequest = function(url, callBack){
    console.log("URL:", url);
    callBack({tags: ["Rāhina", "Rātū", "Rāapa", "Rāpare", "Rāmere", "Rāhoroi", "Rātapu"]});
};

let displayTags = function (element, ...tags) {
    console.log("Target element", element);
    for (let i in tags) {
        let tag = tags[i];
        _addToTopic(tag);
    }
};

let _addToTopic = function(tag) {
    console.log("_addToTopic:", tag);
};

module.exports = {
    getRequest : getRequest,
    displayTags : displayTags
};
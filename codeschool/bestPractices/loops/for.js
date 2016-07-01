let treasureChest = {
    goldCoins : 10000,
    magicalItems : "Crown of Speed",
    necklaces : ["ruby", "pearl", "sapphire", "diamond"],
    openLid : function (){
        console.log("Creeeeak!");
    }
};

for (let i=0; i < treasureChest.necklaces.length; i++) {
    console.log(treasureChest.necklaces[i]);
}
console.log("===========");

let numberOfNecklaces = treasureChest.necklaces.length;
for (i=0; i < numberOfNecklaces; i++) {
    console.log(treasureChest.necklaces[i]);
}
console.log("===========");

for (let i=0, numberOfNecklaces = treasureChest.necklaces.length; i < numberOfNecklaces; i++) {
    console.log(treasureChest.necklaces[i]);
}
console.log("===========");

for (let i=0, listOfNecklaces = treasureChest.necklaces, numberOfNecklaces = listOfNecklaces.length; i < numberOfNecklaces; i++) {
    console.log(listOfNecklaces[i]);
}
console.log("===========");


let user1 = {name: "Sam"};
let user2 = {name: "Tyler"};

let totalReplies = new Map();
totalReplies.set(user1, 5);
totalReplies.set(user2, 42);

console.log(totalReplies.get(user1));
console.log(totalReplies.get(user2));

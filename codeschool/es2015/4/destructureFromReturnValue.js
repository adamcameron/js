function activeUsers(){
    let users = ["Sam", "Tyler", "Brook"];
    return users;
}

let [first, ...rest] = activeUsers();

console.log(first, rest);

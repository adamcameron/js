let users = [
    {login:"Sam", admin: false},
    {login:"Brook", admin: true},
    {login:"Tyler", admin: true}
];

let firstAdmin = users.find((user)=>{
    return user.admin;
});

console.log(firstAdmin);


let firstNonAdmin = users.find(user=>!user.admin);

console.log(firstNonAdmin);
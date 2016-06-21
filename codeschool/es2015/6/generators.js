function *nameList(){
    yield "Sam";
    yield "Tyler";
}

for (let name of nameList()){
    console.log(name);

}

names = nameList()
console.log(names.next().value);
console.log(names.next().value);
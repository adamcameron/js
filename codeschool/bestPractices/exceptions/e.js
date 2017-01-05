// l = "0"
// l = 0
try {
	a = [1,2,3]
	l.concat(a)
}catch(e){
	if (e instanceof ReferenceError) console.log(`ReferenceError: ${e}`);
	if (e instanceof TypeError) console.log(`TypeError: ${e}`);
}
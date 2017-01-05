"use strict";

let f=a=>a.map((_,i,a)=>a.slice(i)).reduce((m1,s)=>{
	let t=s[0],m2=s.reduce((m,v)=>(t+=v)>m?t:m)
	return Math.max(m1||m2,m2)
},null)

module.exports = f;
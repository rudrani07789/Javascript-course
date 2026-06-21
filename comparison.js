//console.log(2>1);
//console.log(2>=1);
//console.log(2<1);
//console.log(2==1)
//console.log(2!=1)

//datatypes- summary
// 1. Primitive data types: String, Number, Boolean, null,undefined,Symbol,Bigint
let num=23
let str1="1234"
let isLogged=true
let tep=null
let emailId;

const id=Symbol('123');
const symbolId=Symbol('123')
console.log(id===symbolId) //Not same

const bigNumber=3456729267391382n

// 2. Reference (Non Primitive): Array, Objects, Functions
let arr1=[1,3,7,8,9]
let obj={
    name:'Rini',age:12,weight:57
}

const myFunction=function(){
    console.log("hello world")
}
// Stack Memory-Primitive (Copy) change in copy
// Heap Memory -Non primitive (Reference)-change in original value

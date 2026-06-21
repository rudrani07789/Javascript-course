let score="33";

//console.log(typeof score);
//console.log(typeof(score));

//string to number
let valueNumber =Number(score);
//console.log(typeof valueNumber);
//console.log(valueNumber);

//"33"=> 33
//"33abc" => NaN
// true => 1, false=>0
//undefined => NaN

let isBool=1
let boolenisBool=Boolean(isBool);
//console.log(boolenisBool)

// 1=> true , 0=>false
//"" => false
//"rini"=> true

let someNumber =23;
let stringNumber =String(someNumber);
//console.log(someNumber);
//console.log(typeof stringNumber)


//*************************** Operations********************** */

let value=33;
let numberVal=-value;
console.log(numberVal)

let str1="hello";
let str2=" Rini";
let str3= str1+str2;
console.log(str3)

//this is not a good practice
console.log("1"+2)
console.log(1+"2")
console.log(1+2+"2")
console.log("1"+2+2)

//not a good practice
let num1,num2,num3;
num1=num2=num3=2+2;

let gameCounter=100;
console.log(gameCounter)
gameCounter++;
console.log(gameCounter)
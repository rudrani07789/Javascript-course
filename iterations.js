//for loop

/*for(let i=0;i<=10;i++){
   const ele=i;
   if(ele ==5){
    console.log("5 is best");
   }
   console.log(ele)
}*/

/*for( let i=0;i<=10;i++){
    console.log(`Value of outer loop ${i}`)
    for( let j=0;j<=10;j++){
        console.log(`Value of in inner loop ${j}`)
    }
}*/

//while loop
/*let i=0
while(i<=10){
    console.log(`Value of index is ${i}`)
    i=i+2
}*/
/*let arr=[2,4,5,6]
let i=0
while(i<arr.length){
    console.log(`Value is ${arr[i]}`);
    i++
}*/

//do while
/*let score=1;
do{
  console.log(`Score is ${score}`);
  score++
}while(score<=10);*/

//for of
/*const arr=[1,2,3,45,7]
for (const num of arr) {
    console.log(num)
}
const greeting="Hello World"
for (const i of greeting) {
    console.log(`Each char is ${i}`)
}*/

//Maps
/*const map = new Map()
map.set("IN","India")
map.set("JP","japan")
map.set("FR","France")
//console.log(map)

for (const [key,value] of map) {
    console.log(key)
}*/

/*const myObj={
    game1:'NFS',
    game2:'Spiderman'
}
for (const [key,value] of myObj) {
    console.log(key)
}*/ 
// objects are not iteratble in for of loop

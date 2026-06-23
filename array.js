//array
const myArr=[0,1,2,3,4] // elements can been of different  data types
// array can be resizeble
const myHeros=["hero1","hero2"]

const myArr2= new Array(1,2,3,4)
//console.log(myArr2[1])

//Array methods
//myArr.push(6)
//myArr.pop() // remove the last element
//myArr.unshift(9)
//myArr.shift() // remove first element
//console.log(myArr.includes(0))
//console.log(myArr.indexOf(0))

//const newArr=myArr.join()
//console.log(myArr)
//console.log(typeof newArr)

//slice and splice
//const myn1=myArr.slice(1,3)
//console.log(myArr)
//console.log(myn1)

//const myn2=myArr.splice(1,3) // it change the original array
//console.log(myArr)
//console.log(myn2)

const marvelHeros=["thor","Ironman","spiderman"]
const dcHeros=["superman","flash","batman"]

//marvelHeros.push(dcHeros)
//const allHeros=marvelHeros.concat(dcHeros)
//console.log(allHeros)

//Spreed operator
//const allHeros=[...marvelHeros,...dcHeros]
//console.log(allHeros)

//const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
//const newanother_array=another_array.flat(Infinity)
//console.log(newanother_array)

console.log(Array.isArray("Rudrani"))
console.log(Array.from("Rudrani"))
console.log(Array.from({name:"Rudrani"}))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))

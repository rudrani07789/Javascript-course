let myDate= new Date();
//console.log(myDate.toString())
//console.log(myDate.toDateString())
//console.log(myDate.toLocaleString())

//console.log(typeof myDate)

//let newDate= new Date(2026,0,23)
//console.log(myDate.toDateString())

//let newDate= new Date(2026,0,23,5,3)
let newDate1= new Date("2026-01-14")
//console.log(newDate1.toDateString())

let mytimeStamp= Date.now();
//console.log(mytimeStamp)
//console.log(newDate1.getTime())

//console.log(Math.floor(Date.now()/1000))

let newdate= new Date()
//console.log(newdate.getMonth())
//console.log(newdate.getDay())

console.log(newdate.toLocaleString('default',{
    weekday: "long"
}))


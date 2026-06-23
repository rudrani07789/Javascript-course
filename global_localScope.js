//global scope
let a=300

if(true){
 let a=10;
const b=20
//console.log(a) // this is block scope
}
//console.log(a)
//console.log(b)
//console.log(a)

//nested scope
function one(){
    const username="Rini"

    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website) give you error
    two()
}
//one()

if (true){
    const name="Rini"
    if(name==="Rini"){
           const web="youtube"
           //console.log(name + web)
    }
    //console.log(web)
}
//console.log(name)

//Intresting
console.log(addOne(2))
function addOne(num){
   return num+1
}

//console.log(addTwo(2))
const addTwo= function(num){
    return num+2
}
console.log(addTwo(2))
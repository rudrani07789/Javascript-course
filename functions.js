//function addTwonumber(num1, num2){// parameters
      //console.log(num1+num2)
//}

function addTwonumber(num1, num2){// parameters
      //let res=num1+num2
      //return res;
      return num1+num2
}

const result=addTwonumber(2,3) //arguments
//console.log(`Result: ${result}`)

function loginUser(name="sam"){
    if(name===undefined){
    console.log("please enter your username")
    return
    }
    return `${name} just logged in`
}
//console.log(loginUser("Rudrani"))

function calculateCartPrice(val1,val2,...num1){ //rest operator
    return num1
}

//console.log(calculateCartPrice(200,400,500,202,3003))

const user={
    name:"Rudrani",
    price:2009
}

function handleObj(anyobj){
    console.log(`Username is ${anyobj.name} and price is ${anyobj.price}`)
}
//handleObj(user)
handleObj({
    name:"Rini",
    price:2890
})

const myArr=[200,300,500,400]
function secondVAlue(getarr){
     return getarr[1]
}

//console.log(secondVAlue(myArr))
console.log(secondVAlue([200,300,300,400]))
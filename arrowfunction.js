const users={
    username:"Rudrani",
    price: 999,
    welcome: function(){
        console.log(`${this.username} , welcome to website`);
        //console.log(this)
    }
}
//users.welcome()
//users.username="sam"
//users.welcome()
//console.log(this)

//function chai(){
    //console.log(this)
//}
//chai()


/* chai =()=>{
   let name="rini"
   console.log(this.name)
}
chai()*/

/*const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4))*/

//const addTwo =(num1,num2) => num1+num2

//const addTwo =(num1,num2) => (num1+num2)
const addTwo =(num1,num2) => ({username:"rini"})

console.log(addTwo(3,5))

//const arr=[1,2,3,4,5]
//arr.forEach()
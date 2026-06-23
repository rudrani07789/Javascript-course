

//objects literal
const myKey=Symbol("key1")
const user={
    name:"Rudrani",
    age:18,
    email:"rudrani.google.com",
    [myKey]:"mykey1",
    login: false,
    city:"Bangalore"

}

//console.log(user[myKey])

//user.email="rudrani.gmail.com"
//Object.freeze(user)
//user.email="rudrani.microsoft.com"
//console.log(user)

user.greetings= function(){
    console.log("Hello JS users")
}

user.greeting2=function(){
    console.log(`Hello JS User,${this.name}`)
}

//console.log(user.greeting2())


//signleton
//Object.create
//const tenderuser=new Object()

const tenderuser={}
tenderuser.id="12345"
tenderuser.name="Sammy"
tenderuser.isLoggedin=false

//console.log(tenderuser)

const reguser={
    email:"user.gmail.com",
    fullname: {
         username:{
            fullname:"Rini",
            lastname:"Roy"
         }
    }
}
//console.log(reguser.fullname.username.fullname)

const obj1={
    1:"a",2:"b"
}
const obj2={
    3:"c",4:"c"
}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2) //for joining 2 objects
const obj3={...obj1,...obj2} //90% we use syntax
//console.log(obj3)

const users=[
    {
        id:"1234",
        name:"Rini"
    },
    {
        id:"1234",
        name:"Rini"
    },
    {
        id:"1234",
        name:"Rini"
    },
    {
        id:"1234",
        name:"Rini"
    }
]

users[2].id

//console.log(tenderuser)
//console.log(Object.values(tenderuser));
//console.log(Object.keys(tenderuser));
//console.log(Object.entries(tenderuser));
//console.log(tenderuser.hasOwnProperty('isLoggedin'));

//destructring 
const course={
    name:"JS",
    price:999,
    courseInstructor:"Rini"
}

const {courseInstructor :instructor}=course
//console.log(instructor)

//APIs
//it comes in form of JASON
/*{
    "name":"Rini",
    "course":"JS",
    "price":"free"

}*/


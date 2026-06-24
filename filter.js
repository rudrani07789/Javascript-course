//For each
/* coding=["js","python","ruby","java","cpp","c++"]

const values=coding.forEach((item)=>{
    console.log(item)
    return item
})
console.log(values)*/

/*const nums=[1,2,3,4,5,6,7,8,9,10]
//const newnums=nums.filter((n)=> n>4)
//console.log(newnums)

const newnums =nums.filter((i)=>{
     return i>4
})
console.log(newnums)*/
/*const num=[1,2,3,4,5,6,7,8,9,10]
const myNum=[]
num.forEach((num)=>{
    if(num>4){
        myNum.push(num)
    }
})
console.log(myNum)*/


//map function
/*const mynum=[1,2,3,4,5,6,7,8,9,10]
//const newnum=mynum.map((n)=>n+10)
const newnums=mynum.map((num)=>num*10).map((num)=> num+1).filter((num)=> num>=40)
console.log(newnums)*/


//reduce function
const num=[1,2,3]
/*const newnum=num.reduce(function (acc,crr){
    console.log(`acc: ${acc} and current value ${crr}`)
    return acc+ crr
},0)*/

const newnum=num.reduce((acc,crr)=>acc+crr,0)
console.log(newnum)

const shoppingcart=[
    {
        item:"Js course",
        price:9999
    },
    {
        item:"Python course",
        price:9998
    },
    {
        item:"Game course",
        price:999
    },
    {
        item:"Data course",
        price:9998
    },
]
 const totalprice=shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(totalprice)
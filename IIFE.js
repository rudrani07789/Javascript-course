//Immediately Involed function expression (IIFE)
(function chai(){
    console.log(`DB contuned`);
})();

( (name)=>{
    console.log(`DB connected ${name}`)
}

)('Rini')

//*******************JS execution context**********
//1.Global execution context
//2. Function EC
//3. Eval EC
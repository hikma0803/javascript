console.log('hello world!')
//variables
var a =10;
console.log(a)
let b = 20;
b=88;
console.log(b)
const c =9;
//c=89             //throw an error
console.log(c)

//global scoped 
function add(){
    console.log(a+b)
}
add()

//shadowing
function add(){
    a=2
    console.log(a+b)
}
add()

function local(){
    var x=1   // local scoped(accessible throughout the function)
    let y=2     // local scoped
    const z=3   // local scoped
    console.log(x+y+z)

}
local()

function block (){
    if (true) {
    var u = 3 //function scoped
    let w=9 //block scoped(automatically function scoped)
    const i=10 //block scoped
    console.log(w) 
    console.log(i)
}
console.log(u)
//console.log(w) //throw error 
//console.log(i)  //throw error 

}
block()
//console.log(u) //throw error 
//console.log(w) //throw an error 
//console.log(i)  //throw an error


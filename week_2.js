/* var x=10
var y='9'
var z='a'
//it will have string concatenate with '+' sign 
console.log(x+y) 

// for other math operations it try to convert string to num 
console.log(x-y)    
console.log(y-true)

//if the string cannot be converted it will become NaN
console.log(x-z)    
 
// window
var o=9
console.log(o)      //variable
console.log(window.o)   //property
console.log(window)     //window

let a=9
let b='9'
console.log(a==b) //true
console.log(a===b)//false
*/


/*function set(){
    setInterval(()=>{console.log('executed')},100)
    setTimeout(()=>{console.log('executed')},100)
}
set()*/

let a = [2, 3, 4];
let b = [2, 2, ...a, 5]; //spread operator ...a 
let c = b.find(x => x % 2); //if return true(1),return first oddd number
console.log(c);


let obj={a:'hikma'}
let {a:variable}=obj
console.log(variable) //creating variable using the above method


var x=10
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

//let a =9
//let b ='9'
//console.log(a==b) //true
//console.log(a===b)//false


function set(){
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

//closure
//helps to access variable beyond the particular scope

function pizza(topping){
    let slices=6;
    return function(){
        slices--;
        console.log(`slices ate ${topping} pizza ,remaining : ${slices}`)
    }
}

let pineapplepizza=pizza('pineapple')
pineapplepizza()
pineapplepizza() 

//arrow functions

let kj={
    a:'object',
    norm(){             //norm is another way of creating functions
        console.log(this) // this return who is calling
    },
    arrow:()=>{
        console.log(this)   //lexically bounded 
    }
}
kj.norm()       //here, the functioned is called by object
kj.arrow()      //returns window





//IN GLOBAL SCOPE ONLY
let a=10                //create variable,block scoped
console.log(window.a)   //does not create window property

const b=10                //create variable,block scoped
console.log(window.b)   //does not create window property

var c=10                //create variable,block scoped
console.log(window.c)   //create window property

 
let x=5     //global x 
let obj={
    'x':10,
    func:(x)=>{
        this.x=x    //window x
    }
}
obj.func(20)

console.log(this.x,'and',obj.x,'and',x)


const obj = {
   name: 'Rohit',
    arrowFunction: null,
    normalfunction: function () {
        // console.log(this)
        this.arrowFunction = () => {
            console.log(this.name)
         }
     },
 }

obj.normalfunction()
//obj.arrowFunction()
console.log(obj.arrowFunction)

const a = {
         'x1': 10,
         func1: function () {
             console.log(this.x1);
         }
      }
      const b = {
          'x1': 20,
          func2: function () {
              c = a.func1;
              c.call();   //call, bind, apply function.call(context)
          }
      }
    
     const obj3 = {
      }
     x1: 20
    
    
b.func2();
    
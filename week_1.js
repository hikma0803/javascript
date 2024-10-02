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

//hoisting
//let,const are TDZ
function hoisting(){
    //console.log(w)  //Uncaught ReferenceError: Cannot access 'w' before initialization
    let w
    console.log(w)  //undefined
    //console.log(oiu)  //week_1.js:58 Uncaught ReferenceError: oiu is not defined
}
hoisting()
///hoisting is useful in functions
sub(10,8)
function sub(a,b){
    console.log(a-b)
}

//mus()  //error
let mus=function(a,b){
    console.log(a+b)    //fuctional expression
} 
mus(9,8)



//primitive  datatypes
Number
BigInt
Symbol
Boolean
undefined
null
String

//objects
Array

let y=900
console.log(typeof(y))  //typpe of variable

//precendence left to right
//except expo right to left

console.log(2-5**7**0+90)
console.log('2' + 4)//concatenate for +
console.log('2'*4)//other than + the sting will be converted to num
console.log(2+2+'2')
console.log(2+2+true)
console.log(2+2+false)
console.log(2*undefined) //anything to undefined ==> NaN

//and &&
//or ||
//not !

//if(){}
//else if (){}
//else(){}
 
let arr=[1,3,5,'a']
for (let i in arr){     //index
    console.log(i)
}

for (let i of arr){     //item
    console.log(i)
}

const obj={'1':'oiu',
    it: function(a,b){
        console.log(a+b)
    }
} //key-->string
obj.time=10
console.log(obj)
//obj={}//error

for (let item in obj){
    console.log(obj[item])

}
console.log(obj.time)
obj.it(8,9)


let obj1={
    name1:'oiup',
    name2:function(a,b){
        console.log(this.name1+a+b)     //this referes to the property inside the object
    }
}
obj1.name2('a','b')
const obj2 = {
    fruit: 'apple',
    price: 50,
    // say() {
    // },
    // say : function say(){

    // },
    say() {
        console.log(`${this.fruit} is priced ${this.price}`)
    },
    sayArrow: () => {
        console.log(`${this.fruit} is priced ${this.price}`)
    }
}

this.fruit = 'orange'



obj3 = {
    fruit: 'kiwi',
    price: 150,
}

// call bind and apply

obj2.say.call(obj3)

function add3(z, x) {
    console.log(this.x + this.y + z + x) }

obj5 = {
    x: 10,
    y: 20, }

add3.call(obj5, 30, 50)
add3.apply(obj5, [30, 50])

let bindedFunc = add3.bind(obj5, 10, 20)
bindedFunc()

// we cant change the context of arrow using
// call bind or apply



































































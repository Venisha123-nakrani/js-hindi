// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34567890567890567890n

// Reference (Non Primitive)

// types : Array, Objects, Functions

const heros = ["shaktiman","nagaraj","doga"]
let myobj = {
    name: "venisha",
    age: 21,
}

const myFunction = function()
{
    console.log("Hello World");
}

console.log(typeof bigNumber);
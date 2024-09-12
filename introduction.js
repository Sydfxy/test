// import the math function
// import {add,subtract,multiply,divide} from './math.js'
// console.log(add(2,3))
// console.log(subtract(2,3))
// console.log(multiply(2,3))
// console.log(divide(2,3))

// === Advanced ES6 ===
// 1. Arrow functions

// regular functions
// function add(a,b){
//     return a+b;
// }

// arrow function
// const add = (a,b) => {
//     return a+b;
// }



// 2. Regular vs anonymous functions
// regular function
// function add (a,b){
//     return a+b
// }

// function using anonymous function
// const add = function (a,b){
//     return a+b
// }

// 3. Const, let, template literals
// Learnt already

// 4. Single statement functions
// const add = (a,b) => a+b
// console.log(add(5,10))

// 5. Ternary operators (similar to if-else)
// const age = 26
// let type = null
// create an if-else to check if this age = "adult" or "minor"
// const type = 
// if (age >= 18){
//     console.log("Adult")
//     }else {
//     console.log("Minor")
//     }
// let type = age>18? "Adult":"Minor"
// let type = if-else condition?: true statement: false statement
// let type  = age >= 18 ? "Adult" : "Minor"
// const message = age >= 18 ? 'You are an adult' : 'You are a minor'
// console.log(type) // expected output is "adult"

// 6. Destructuring
// used when we want to extract one or more properties from an array or object

// 6a. Destructuring arrays
// const cars =["BMW","Proton","Toyota","Tesla"]
// const firstCar = cars [0]
// const thirdCar = cars [2]
// const [firstCar, secondCar , thirdCar, fourthCar] = cars

// console.log("first car is" , firstCar)
// console.log("second car is" , secondCar)
// console.log("third car is" , thirdCar)
// console.log("fourth car is" , fourthCar)

// Challenge: Use one console.log() and print out each car + it's corresponding msg

// 6b. Destructuring objects
// const gameCharacter = {
//     name: "Mario",
//     brother: "Luigi",
//     occupation:  "Plumber",
//     age: 27,
//     hasWife: false
// }
// extract 'name' and 'age' properties from the 'gameCharacter' object
// const {name, age} = gameCharacter
// console.log(name)
// console.log(age)

// 7. Spread Operators
// const fruits = ["Banana","Apple","Orange"]
// const newFruits = [...fruits,"Grape","Kiwi"]
// console.log(newFruits)

// 8. Rest parameter
function sumTotal(...numbers){
    console.log(numbers)

let total = 0

for(let number of numbers){
    total += number
}
console.log(total)
}

// Calculate the sum total by looping through the numbers array and adding each item

sumTotal(1,2,3,4,5,6)
sumTotal(8,9,10)

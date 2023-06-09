"use strict";
console.log("-----------------types--------------------------");
const username = "john";
console.log('username :>> ', username);
// functions
function calc(value) {
    return 2 * value;
}
console.log(calc(5));
console.log("-----------------arrays--------------------------");
let cities = ["Stuttgart", "Berlin", "München"];
// cities.push(6);
cities.push("Köln");
let mixed = ["Stuttgart", 5, "Köln", "Berlin", 2];
mixed.push(6);
console.log('mixed :>> ', mixed);
console.log("--------------- objects----------------------------");
let user = {
    name: "Ömer",
    password: "abc123.",
    age: 40
};
// user.age="john"
user.age = 41;
console.log('user :>> ', user);
console.log("------------------explicit types-------------------------");
let hostName;
let age;
let isMarried;
//--------------arrays-------------
let countries = [];
countries.push("Turkey"); //I'm having an error, to avoid from this array it musst have initial value
// countries=[1];
countries[1] = "germany";
console.log('countries :>> ', countries);
//union types
let uid; //uid can taje string or number
let mixed2 = []; // this array can take string or number
mixed2.push(2);
mixed2.push("istanbul");
// mixed.push(true);
//--------------objects-------------
let employee;
employee = {
    name: "Ömer",
    lastName: "Iliski",
    age: 40
};
console.log('employee :>> ', employee);
let employee2;
employee2 = { name: "john", "lastname": "doe", age: 35 };
console.log("------------------any-------------------------");
let myAny = 5;
myAny = "fünf";
console.log('myAny :>> ', myAny);
console.log("------------------functions-------------------------");
let greet;
greet = () => {
    console.log("hallo");
};
const add = (a, b, c) => {
    return a + b; // : means, this function will return a number
}; // void means, it returns nothing
console.log('add(5,6); :>> ', add(5, 6));
console.log("------------------type-------------------------");
const minus = (a, b, c) => {
    return a - b;
};
console.log("------------------function signatures---------------------");
let calc2;
calc2 = (numOne, numTwo) => {
    return numOne + numTwo;
};
// let logDetails:(obj:Object)=>void;
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};

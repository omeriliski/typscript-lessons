console.log("-----------------types--------------------------");
const username : string="john";
console.log('username :>> ', username);

// functions
function calc(value: number) {
    return 2 * value;
}

console.log(calc(5));
console.log("-----------------arrays--------------------------");

let cities=["Stuttgart","Berlin","München"];
// cities.push(6);
cities.push("Köln");

let mixed=["Stuttgart", 5, "Köln", "Berlin", 2];
mixed.push(6);
console.log('mixed :>> ', mixed);

console.log("--------------- objects----------------------------");

let user = {
    name:"Ömer",
    password:"abc123.",
    age:40
}

// user.age="john"
user.age = 41;
console.log('user :>> ', user);

console.log("------------------explicit types-------------------------");
let hostName:string;
let age:number;
let isMarried:true;

//--------------arrays-------------
let countries:string[]=[]
countries.push("Turkey");        //I'm having an error, to avoid from this array it musst have initial value
// countries=[1];
countries[1] = "germany";
console.log('countries :>> ', countries);

//union types
let uid:string|number;      //uid can taje string or number

let mixed2:(string|number)[]=[];    // this array can take string or number
mixed2.push(2);
mixed2.push("istanbul");
// mixed.push(true);

//--------------objects-------------
let employee:object;
employee={
    name:"Ömer",
    lastName:"Iliski",
    age:40
}
console.log('employee :>> ', employee);

let employee2:{
    name:string,
    lastname:string,
    age:number
}
employee2={name:"john", "lastname":"doe", age:35};

console.log("------------------any-------------------------");
let myAny:any=5;
myAny="fünf";
console.log('myAny :>> ', myAny);
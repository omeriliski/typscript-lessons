import {Invoice} from "./classes/Invoice.js"
import { IPerson, MyPerson } from "./classes/interfaces.js";

const invOne = new Invoice("Mario", "work on the Marios web site", 250);
const invTwo = new Invoice("Luigi", "work on the Luigis web site", 300);
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(invoice => {
    // invoice.client="John"        // we can not change the value, as it is readonly
    console.log(
        invoice.client,
        // invoice.details,         // we can not access to detail, as it is private
        invoice.amount,
        invoice.format()
    );
})

const person1:IPerson={
    username:"Ömer",
    email:"omeriliski06@gmail.com",
    age:40,
    speak:()=>{
        console.log(`${username} speaks`);
    },
    getAge():number{
        return this.age;
    },
    getName():string{
        return this.username;
    }
}
console.log('person1 :>> ', person1.getName());
console.log(person1.getAge());

const myPerson1: IPerson = new MyPerson("ömer", "omer@gmail.com", 40);
console.log('myPerson1 :>> ', myPerson1);
myPerson1.speak();

// const form = document.querySelector("form");
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
})
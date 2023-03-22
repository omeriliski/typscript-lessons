import { Invoice } from "./classes/Invoice.js";
import { MyPerson } from "./classes/interfaces.js";
const invOne = new Invoice("Mario", "work on the Marios web site", 250);
const invTwo = new Invoice("Luigi", "work on the Luigis web site", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(invoice => {
    // invoice.client="John"        // we can not change the value, as it is readonly
    console.log(invoice.client, 
    // invoice.details,         // we can not access to detail, as it is private
    invoice.amount, invoice.format());
});
const person1 = {
    username: "Ömer",
    email: "omeriliski06@gmail.com",
    age: 40,
    speak: () => {
        console.log(`${username} speaks`);
    },
    getAge() {
        return this.age;
    },
    getName() {
        return this.username;
    }
};
console.log('person1 :>> ', person1.getName());
console.log(person1.getAge());
const myPerson1 = new MyPerson("ömer", "omer@gmail.com", 40);
console.log('myPerson1 :>> ', myPerson1);
myPerson1.speak();
// const form = document.querySelector("form");
const form = document.querySelector(".new-item-form");
// console.log(form);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

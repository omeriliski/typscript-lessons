import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { MyPerson } from "./classes/interfaces.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { mySort } from "./classes/generics.js";
import { Stack } from "./classes/generics.js";
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
let docOne;
let docTwo;
docOne = new Invoice("ömer", "web work", 5);
docTwo = new Payment("john", "app work", 3);
const docArr = [];
docArr.push(docOne);
docArr.push(docTwo);
console.log('docArr :>> ', docArr);
console.log("-------------------------form--------------------------------");
// const form = document.querySelector("form");
const form = document.querySelector(".new-item-form");
// console.log(form);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice")
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    else
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    list.render(doc, type.value, "end");
    console.log(doc);
});
console.log("-------------------------generics--------------------------------");
const stringArr = ["a", "c", "d", "b", "h", "d"]; // generics bir kod blogunu (function oder class) farkli tiplerle kullanmaya olanak tanir
console.log(mySort(stringArr));
const numberArr = [2, 4, 5, 1, 8, 3];
console.log(mySort(numberArr));
const myStack1 = new Stack();
myStack1.push("first element");
myStack1.push("second element");
console.log('myStack1.pop() :>> ', myStack1.pop());

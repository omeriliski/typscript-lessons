// class Invoice {
//     readonly client: string;
//     private details: string;
//     public amount: number;
//     constructor(client: string, details: string, amount: number) {
//         this.client = client;
//         this.details = details;
//         this.amount = amount;
//     }
//     format() {
//         return `${this.client} owes ${this.amount}€ for ${this.details}`;
//     }
// }

//instead of this class we can write it like this shortly
export class Invoice {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) { }
    format() {
        return `${this.client} owes ${this.amount}€ for ${this.details}`;
    }
}
// finished, it will assign the values automatically
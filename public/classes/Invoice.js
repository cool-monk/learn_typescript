export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes Rs.${this.amount} for ${this.details}`;
    }
}
//   shorthand for above constructor and variable declaration
// constructor(readonly client: string, private details: string, public amount: number){
// }

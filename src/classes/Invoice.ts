import { HasFormatter } from "../interfaces/HasFormatter";

export class Invoice implements HasFormatter {
  client: string;
  details: string;
  amount: number;
  constructor(client: string, details: string, amount: number) {
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

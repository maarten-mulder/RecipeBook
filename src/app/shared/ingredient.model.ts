export class Ingredient {
   // constructor(public name: string, public amount: number) { }
   // Also possible in stead of all code below.
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }
}
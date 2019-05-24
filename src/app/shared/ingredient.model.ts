export class Ingredient {
   // constructor(public name: string, public amount: number) { }
   // Also possible in stead of all code below.
    public id: number;
    public name: string;
    public amount: number;

    private static nextId: number = 0;

    constructor(name: string, amount: number) {
        this.id = Ingredient.nextId;
        this.name = name;
        this.amount = amount;
        
        Ingredient.nextId++;
        console.log(Ingredient.nextId);
    }
}
export const mySort = <T>(arr:T[]):T[]=>{
    return arr.sort();
}

export class Stack <T> {
    private items:T[]=[];

    push(item:T){
        this.items.push(item);
    }
    pop(){
        return this.items.pop();
    }
}
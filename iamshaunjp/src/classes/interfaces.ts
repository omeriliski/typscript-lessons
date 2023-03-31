export interface IPerson {
    username: string,
    email: string,
    age: number,
    speak: () => void,
    getAge: () => number,
    getName: () => string
}

export class MyPerson implements IPerson {
  
    constructor(
        public username: string,
        public email: string,
        public age: number
    ) {}
  
    speak() {
        console.log(`${this.username} speaks`);
    }
    getAge() {
        return age;
    }
    getName() {
        return username
    }
}



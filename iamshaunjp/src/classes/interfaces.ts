export interface IPerson {
    username: string,
    email: string,
    age: number,
    speak: () => void,
    getAge: () => number,
    getName: () => string
}

export class MyPerson implements IPerson {
    // username: string;
    // email: string;
    // age: number;
    constructor(
        public username: string,
        public email: string,
        public age: number
    ) {
        // this.username=username;
        // this.email=email;
        // this.age=age;
    }
  
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



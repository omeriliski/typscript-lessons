export class MyPerson {
    // username: string;
    // email: string;
    // age: number;
    constructor(username, email, age) {
        this.username = username;
        this.email = email;
        this.age = age;
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
        return username;
    }
}

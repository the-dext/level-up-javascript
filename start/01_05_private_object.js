// Write your code here
class User {    
    #username ;
    #password;
    constructor(username, password, age) {
        this.#username = username;
        this.#password = password;
        this.age = age;
    }
}

let u = new User("chris", "123P", 21);
console.log(u.username);
console.log(u.password);
console.log(u.age);


// for an object you can use a symbol. But class is much clearer.
// Todo. 
const  username = Symbol('username');
const  password = Symbol('password');
let u2 = { [username] : username, [password]: "123", age:21, printPassword : ()=> {this[password]}};
console.log(u2.username);
console.log(u2.password);
console.log(u2.age);
console.log(u2.printPassword());
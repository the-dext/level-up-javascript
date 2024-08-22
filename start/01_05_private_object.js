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
// read symbol value from the object using the array style accessor.
// ...so is it really private !? 
const  username = Symbol('username');
const  password = Symbol('password');
let u2 = { 
    [username] : 'chris', 
    [password]: "123abc", 
    age:21
};

console.log('reading symbol direct' + u2.username);
console.log('reading symbol direct' + u2.password);
console.log(u2[username]);
console.log(u2[password]);
console.log(u2.age);
class user  {
createdAt = new Date();
#password

    constructor(id, username, email, password, role = 'user') {
    this.id = id;
    this.username = username;
    this.email = email;
    this.#password = password;
    this.role = role;
    }

    getInfo() {
        return `${this.username} (${this.email})`
    }

    getRole(){
        return `user role: ${this.role}`
    }

    getSafeInfo(){
        return {
            id: this.id,
            username: this.username,
            email: this.email,
            role: this.role
        }
    }
}

let user1 = new user(1, 'first', 'first@gmail.com', '123455asw', 'user')
let user2 = new user(2, 'second', 'second@gmail.com', '12qwe123qwe', 'user')
let admin1 = new user(3, 'third', 'third@gmail.com', '12q123qwwe123qwe', 'admin')

console.log('User 1:', user1)
console.log('User 2:', user2)
console.log('Admin 1:', admin1)

console.log('User 1 info:', user1.getInfo())

console.log('User 2 role:', user2.getRole())

console.log('Admin 1 safe info:', admin1.getSafeInfo())

console.log('user1 instanceof User:', user1 instanceof User);
console.log('user1 instanceof Object:', user1 instanceof Object);
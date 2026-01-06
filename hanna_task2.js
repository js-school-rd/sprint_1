function User(id, username, email, password, role) {
this.id = id;
this.username = username;
this.email = email;
this.password = password;
this.role = role ?? 'user';
this.createdAt = new Date().toISOString();

this.getInfo = function(){
    return this.username + " (" + this.email + ")";
}

this.getRole = function(){
    return this.role;
}

this.getSafeInfo = function(){
    const {password, ...safeObject} = this;
    return safeObject;
}
}

let newUser1 = new User (1, 'Фродо', 'frodo@vk.ru', 123);
let newUser2 = new User (2, 'Бильбо', 'bilbo@vk.ru', 456);
let admin1 = new User (3, 'Сэм', 'sam@vk.ru', 789, 'admin');
document.getElementById('user1').innerHTML = JSON.stringify(newUser1, null, 2) 
document.getElementById('user2').innerHTML = JSON.stringify(newUser2, null, 2) 
document.getElementById('user3').innerHTML = JSON.stringify(admin1, null, 2);

console.log('User 1:', newUser1);
console.log('User 2:', newUser2);
console.log('Admin 1:', admin1);

console.log('User 1 info:', newUser1.getInfo());
console.log('User 2 role:', newUser2.getRole());
console.log('Admin safe info:', admin1.getSafeInfo());

console.log('newUser1 instanceof User:', newUser1 instanceof User);
console.log('newUser1 instanceof Object:', newUser1 instanceof Object);

console.log('newUser1.username:', newUser1.username);
console.log('newUser1["email"]:', newUser1['email']);
console.log('newUser1.role:', newUser1.role);

// Измените свойство
newUser1.username = 'FFFrodo';
console.log('Updated username:', newUser1.username);
console.log('Updated info:', newUser1.getInfo());

// Добавьте новое свойство bio у newUser1 = 'Software developer'
newUser1.bio = 'Software developer';
console.log('New property bio:', newUser1.bio);


console.log('newUser2.getInfo():', newUser2.getInfo());
console.log('newUser2.getInfo.call(newUser1):', newUser2.getInfo.call(newUser1));

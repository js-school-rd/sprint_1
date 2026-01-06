function User(id, username, email, password, role = 'user') {
  this.id = id;
  this.username = username;
  this.email = email;
  this.password = password;
  this.role = role;
  this.createdAt = new Date();
  this.getInfo = function () {
    return `${this.username} (${this.email})`;
  };
  this.getRole = function () {
    return this.role;
  };
  this.getSafeInfo = function () {
    let obj = {};
    for (let key in this) {
      if (key === 'password') continue;
      obj[key] = this[key];
    }
    return obj;
  }
}

let user1 = new User(1, 'user1', 'user1@mail.com', 'pw1');
let user2 = new User(2, 'user2', 'user2@mail.com', 'pw2');
let admin1 = new User(3, 'admin1', 'admin1@mail.com', 'pw3', 'admin');

console.log('================================');
console.log('user1: ', user1);
console.log('user2: ', user2);
console.log('admin1: ', admin1);

console.log('================================');
console.log('user1 info: ', user1.getInfo());
console.log('user2 role: ', user2.getRole());
console.log('admin1 safe info: ', admin1.getSafeInfo());

console.log('================================');
console.log('user1 instanceof User: ', user1 instanceof User)
console.log('user1 instanceof Object: ', user1 instanceof Object)

console.log('================================');
console.log('user1.username:', user1.username);
console.log('user1["email"]:', user1['email']);
console.log('user1.role:', user1.role);

console.log('================================');
user1.username = 'updatedUsername';
console.log('Updated username:', user1.username);
console.log('Updated info:', user1.getInfo());

console.log('================================');
user1.bio = 'Software developer';
console.log('New property bio:', user1.bio);

console.log('================================');
console.log('user2.getInfo():', user2.getInfo());
console.log('user2.getInfo.call(user1):', user2.getInfo.call(user1));




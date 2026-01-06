let name1 = prompt('Как величать первого?')
if (name1 === null) {
    name1 = 'Guest'
}

let name2 = prompt('Как величать первого?')
if (name2 === null) {
    name2 = 'Guest'
}

let user1 = {
    name: name1,
    balance: 100,
    isBlocked: false,
    isLoggedIn: true
}

let user1output = document.getElementById('user1');
user1output.textContent =
`Name: ${user1.name}
Balance: ${user1.balance}
Is Blocked?: ${user1.isBlocked}
Is Logged In?: ${user1.isLoggedIn}`;

class user {
    constructor(name, balance, isBlocked, isLoggedIn) {
this.name = name;
this.balance = balance;
this.isBlocked = isBlocked;
this.isLoggedIn = isLoggedIn;
}
}

let user2 = new user (name2, 0, true, false)

const getUserStatus = (userObj) => {
    if (userObj.isBlocked === true) {
        return 'Blocked'
    } else if (userObj.balance <= 0) {
        return 'No funds' 
    } else {
        return 'Active'
    }

}

let user2output = document.getElementById('user2');
user2output.textContent =
`Name: ${user2.name}
Balance: ${user2.balance}
Is Blocked?: ${user2.isBlocked}
Is Logged In?: ${user2.isLoggedIn}`;

const canUserProceed = (userObj) => {
    if (userObj.balance <= 0) {
        return false
    } else if (userObj.isBlocked == true) {
        return false
    } else if (userObj.isLoggedIn == false) {
        return false
    } else {
        return true
    }
}

const buildUserViewModel = (userObj) => {
    let responseUser = {
        name: userObj.name,
        status: getUserStatus(userObj),
        canProceed: canUserProceed(userObj)
    }

    return responseUser
}

const checkStatus = (userObj) => {
    if (canUserProceed(userObj) === true) {
        alert(`Welcome, ${userObj.name}!`)
    } else {
        alert("Access denied")
    }
}

document.getElementById('getUserStatus1').addEventListener('click', () => {
    alert(getUserStatus(user1));
})

document.getElementById('anUserProceed1').addEventListener('click', () => {
    alert(canUserProceed(user1));
})

document.getElementById('buildUserViewModel1').addEventListener('click', () => {
  alert(JSON.stringify(buildUserViewModel(user1)))
})

document.getElementById('checkStatus1').addEventListener('click', () => {
    checkStatus(user1)
})

document.getElementById('getUserStatus2').addEventListener('click', () => {
    alert(getUserStatus(user2));
})

document.getElementById('anUserProceed2').addEventListener('click', () => {
    alert(canUserProceed(user2));
})

document.getElementById('buildUserViewModel2').addEventListener('click', () => {
  alert(JSON.stringify(buildUserViewModel(user2)))
})

document.getElementById('checkStatus2').addEventListener('click', () => {
    checkStatus(user2)
})
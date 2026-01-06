/парсинга вводных данных нет!/

let input = prompt("Enter two names separated by a space");
let inputName1 = "";
let inputName2 = "";

if (input === null || input.length <= 0){
    inputName1 = "Guest";
    inputName2 = "Guest";
}

else{
    input = input.trim(); //не через ?? 'Guest', потому что надо чтобы срабатывало не только в случае esc
    inputName1 = input.split(" ")[0];
    inputName2 = input.split(" ")[1];
}

let statusVariant = [true, false];

let max = 100;
let min = -100;

function getRandomBalance(min, max){
 return Math.floor(Math.random()*(max-min+1))+min;
}

function getRandomBooleanValue(statusVariant){
    return statusVariant[Math.floor(Math.random()*statusVariant.length)];
}
let balance1 = getRandomBalance(min, max);
let balance2 = getRandomBalance(min, max);

let isBlocked1 = getRandomBooleanValue(statusVariant);
let isBlocked2 = getRandomBooleanValue(statusVariant);

let isLogged1 = getRandomBooleanValue(statusVariant);
let isLogged2 = getRandomBooleanValue(statusVariant);

// создание первого юзера
const user1 = {
    name: inputName1,
    balance: balance1,
    isBlocked: isBlocked1,
    isLogged: isLogged1
}
 
// это надо вынести в отдельную функцию
document.getElementById("user1Name").innerHTML = user1.name;
document.getElementById("user1Balance").innerHTML = user1.balance;
document.getElementById("user1IsBlocked").innerHTML = user1.isBlocked;
document.getElementById("user1IsLoggedIn").innerHTML = user1.isLogged;

// создание второго юзера
function User(name, balance, isBlocked, isLogged){
    this.name = name;
    this.balance = balance;
    this.isBlocked = isBlocked;
    this.isLogged = isLogged;
}

let user2 = new User (inputName2, balance2, isBlocked2, isLogged2);

// это надо вынести в отдельную функцию
document.getElementById("user2Name").innerHTML = user2.name;
document.getElementById("user2Balance").innerHTML = user2.balance;
document.getElementById("user2IsBlocked").innerHTML = user2.isBlocked;
document.getElementById("user2IsLoggedIn").innerHTML = user2.isLogged;

// 1. 
function getUserStatus(user){
    if (user.isBlocked === true){
        return "Blocked";
    }

    if (user.balance <=0){
        return "No funds";
    }

    return "active";
}

// 2.
function canUserProceed(user){
    return (user.isLogged === true && user.isBlocked === false && user.balance > 0);   }

// 3.
function buildUserViewModel(user){
    return {
        name: user.name,
        status: getUserStatus(user),
        canProceed: canUserProceed(user)
    }
}


// 4.
function checkStatus(user){
    if (canUserProceed(user)){
        alert("Welcome, " + user.name);
    }
    else{
    alert("Access denied");}
}

function checkStatusOnButtonClick(buttonId, user){
    const button = document.getElementById(buttonId);
    button.addEventListener("click", function(){
    checkStatus(user);
    })    
    }

checkStatusOnButtonClick("checkStatusBtn1", user1);
checkStatusOnButtonClick("checkStatusBtn2", user2);

console.log("get User2 Status: " + getUserStatus(user2));
console.log("can User2 Proceed: " + canUserProceed(user2));
console.log(JSON.stringify(buildUserViewModel(user2), null, 2));

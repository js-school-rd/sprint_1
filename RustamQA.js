const user1 = { name: "John", balance: 100, isBlocked: false, isLoggedIn: true };

function User(name, balance = 100, isBlocked = false, isLoggedIn = true) {
  this.name = name || "Guest";
  this.balance = balance;
  this.isBlocked = isBlocked;
  this.isLoggedIn = isLoggedIn;
}

const name = (prompt("Enter name") || "").trim();
const user2 = new User(name || "Guest");

const getUserStatus = u => (u.isBlocked ? "Blocked" : u.balance <= 0 ? "No funds" : "Active");
const canUserProceed = u => u.isLoggedIn && !u.isBlocked && u.balance > 0;
const buildUserViewModel = u => ({ name: u.name, status: getUserStatus(u), canProceed: canUserProceed(u) });

const checkStatus = u => {
  const vm = buildUserViewModel(u);
  console.log(vm);
  alert(vm.canProceed ? `Welcome, ${vm.name}!` : "Access denied");
};

document.getElementById("btn").onclick = () => checkStatus(user2);

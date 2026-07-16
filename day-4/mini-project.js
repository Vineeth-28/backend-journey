const users = ["aman", "rahul", "rohit", "vee"];

function searchUser(username) {
  if (users.includes(username)) {
    console.log("user found");
  } else {
    console.log("user not found");
  }
}

searchUser("aman");

const orders = [1200, 4500, 800, 9000, 1500];

function totalRevenue() {
  let sum = 0;
  for (let i = 0; i < orders.length; i++) {
    sum += orders[i];
  }
  console.log(sum);
}

totalRevenue();

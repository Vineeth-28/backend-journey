// // //Rate Limiter

// // function createRateLimiter(limit){
// //     let requests =0;
// //     return {
// //         request(){
// //             if(requests <limit){
// //                 requests ++;
// //                 console.log(`Request Allowed (${requests}/${limit})`);
// //             }
// //             else{
// //                 console.log("Rate Limited Exceeded");
// //             }
// //         }
// //     };
// // }

// // const api =createRateLimiter(3);
// // api.request();
// // api.request();
// // api.request();
// // api.request();

// //user session

// function createSession(username) {
//   let logginIn = false;
//   return {
//     login() {
//       logginIn = true;
//       console.log(`${username} logged out`);
//     },
//     logout() {
//       loggedIn = false;
//       console.log(`${username} logged out`);
//     },
//     status() {
//       console.log(logginIn);
//     },
//   };
// }

// const user = createSession("Aman");
// user.status();
// user.login();
// user.status();
// user.logout();
// user.status();
function apiKey() {
  let key = "abc123";
  return {
    showKey() {
      return key;
    },
    changeKey(newKey) { // Added newKey parameter here
      return (key = newKey);
    },
    validateKey(input) {
      return input === key;
    },
  };
}

const manager = apiKey();
console.log(manager.showKey());         // Output: abc123
console.log(manager.validateKey("abc123")); // Output: true

manager.changeKey("xyz789");
console.log(manager.showKey());         // Output: xyz789
console.log(manager.validateKey("abc123")); // Output: false
console.log(manager.validateKey("xyz789")); // Output: true

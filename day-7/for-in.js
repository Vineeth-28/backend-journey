const user = {
    name: "aman",
    age: 27,
    role: "Backend Engineer",
    city: "Delhi"
};

for (const key in user ){
 console.log(`${key} : ${user[key]}`);
}

// for (const key in user ){
//  console.log(keys , x[keys]);
//}
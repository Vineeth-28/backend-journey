//Fetch User

function fetchUser(){
    return Promise.resolve("Aman")
}
async function getUser(){
     try{
        const user = await fetchUser();
        console.log(user);
     }
     catch(error){
        console.log(error)
     }
}
getUser();

//login api

function login(){
    return Promise.resolve("Login Successful")

}
async function authenticate(){
    try{
      const message = await login();
      console.log(message)
    } 
    catch(error){  
        console.log(error)

    }
}
authenticate()

//Database Query
function getUser(){
    return Promise.resolve(["Aman" ,"Rahul" ,"Jay"])

}
async function showUsers(){
    try{
        const users = await getUser();
        console.log(users);
    }
    catch(error){

        console.log(error)
    }
}

showUsers()

//Api Error
function fetchData(){
    return Promise.reject("Server Error")
}
async function api(){
    try{
        const data = await fetchData()
        console.log(data);

    }
    catch(error){
        console.log(error);
    }
}

api()
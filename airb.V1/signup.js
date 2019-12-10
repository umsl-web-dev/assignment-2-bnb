window.onload = () => {
   if ((JSON.parse(window.localStorage.getItem("authenticated")) == true) && (JSON.parse(window.localStorage.getItem("authUser")) !== (null || ""))) {
      location.assign("./airb.V1/home.html")
   } else {
      //Do nothing
   }
}

let users = []

function signUp() {
   let email = document.getElementById("email").value;
   let password = document.getElementById("pass").value;
   let cPass = document.getElementById("cPass").value;

   if (((email && password && cPass) !== (null || "")) && (password === cPass)) {
      let tempObj = {
         email: email,
         password: password
      };
      saveToLocalStorage(tempObj)
      location.assign("./airb.V1/home.html")
      authenticated = true;
      localStorage.setItem("authenticated", JSON.stringify(authenticated));
      let authUser = users[i];
      localStorage.setItem("authUser", JSON.stringify(authUser));
   } else if ((email !== null) && (password !== cPass)) {
      window.alert("Your Passwords do not match.")
   }
   else {
      window.alert("Please enter a valid email and Password")
   }
};

function login() {
   location.assign("../login.html")
}


function saveToLocalStorage(user) {
   users.push(user)
   localStorage.setItem("users", JSON.stringify(users));
}
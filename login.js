
window.onload = () => {
   //let users = JSON.parse(window.localStorage.getItem("users"))
   if ((JSON.parse(window.localStorage.getItem("authenticated")) == true) && (JSON.parse(window.localStorage.getItem("authUser")) !== (null || ""))) {
      location.assign("./airb.V1/home.html")
   } else {
      //Do nothing
   }
};

function login() {
   let email = document.getElementById("email").value;
   let password = document.getElementById("pass").value;
   let users = JSON.parse(window.localStorage.getItem("users"))
   let authenticated = false;

   //console.log(users)

   for (i = 0; i < users.length; i++) {
      sEmail = users[i].email;
      //console.log(sEmail)
      sPass = users[i].password;
      //console.log(sPass)
      if ((email === sEmail) && (password === sPass)) {
         location.assign("./airb.V1/home.html")
         authenticated = true;
         localStorage.setItem("authenticated", JSON.stringify(authenticated));
         let authUser = users[i];
         localStorage.setItem("authUser", JSON.stringify(authUser));
      } else if ((email === sEmail) && (password !== sPass)) {
         window.alert("Incorrect Password")
      } else if (i < users.length && ((email !== sEmail) && (password !== sPass))) {
         //keep running the loop without providing alert
         continue;
      } else {
         window.alert("Incorrect Username and Password");
      }
   }

};

function signUp() {
   location.assign("./airb.V1/signup.html")
};
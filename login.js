window.onload(
   function isAuth() {

   }
)

function login() {
   let email = document.getElementById("email").value;
   let password = document.getElementById("pass").value;
   sEmail = JSON.parse(window.localStorage.getItem("email"))
   sPass = JSON.parse(window.localStorage.getItem("password"))

   if ((email === sEmail) && (password === sPass)) {
      window.open('./airb.V1/home.html');
      window.close('./login.html');
   } else {
      window.alert("Please enter a valid email and Password")
   }

};

function signUp() {
   window.open('./airb.V1/signup.html');
   window.close('./login.html');
};

window.onload = () => {
   function isAuth() {
      sEmail = JSON.parse(window.localStorage.getItem("email"))
      sPass = JSON.parse(window.localStorage.getItem("password"))
      if ((sEmail && sPass) !== (null || "")) {
         //User is authenticated
         //redirect to home page and authenticate
      } else {
         //User is not authenticated
         //remain on page
      }
   }
}

function signUp() {
   let email = document.getElementById("email").value;
   let password = document.getElementById("pass").value;
   let cPass = document.getElementById("cPass").value;

   if (((email && password && cPass) !== (null || "")) && (password === cPass)) {
      window.open('../airb.V1/home.html');
      window.close('../airb.V1/signup.html');
      localStorage.setItem("email", JSON.stringify(email))
      localStorage.setItem("password", JSON.stringify(password))
   } else if ((email !== null) && (password !== cPass)) {
      window.alert("Your Passwords do not match.")
   }
   else {
      window.alert("Please enter a valid email and Password")
   }
};

function login() {
   window.close("../airb.V1/signup.html")
   window.open("../login.html")
}
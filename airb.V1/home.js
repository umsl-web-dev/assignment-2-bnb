window.onload = () => {
   isAuth();
};

let search = () => {
   let sDate = document.getElementById("startDate").value;
   let eDate = document.getElementById("endDate").value;

   if ((sDate && eDate) !== (null || "")) {
      location.assign("../searchResults.html")
      localStorage.setItem("sDate", JSON.stringify(sDate))
      localStorage.setItem("eDate", JSON.stringify(eDate))
   } else {
      window.alert("Please Select a valid set of Date!")
   }
}

let isAuth = () => {
   authUser = JSON.parse(window.localStorage.getItem("authUser"));
   loggedUser = document.getElementById("authUser")
   if ((JSON.parse(window.localStorage.getItem("authenticated")) == true) && (JSON.parse(window.localStorage.getItem("authUser")) !== (null || ""))) {
      loggedUser.innerHTML = "Signed In As: " + authUser.email;
   } else {
      loggedUser.innerHTML = `<a href="./login.html">Sign Up: </a>`;
   }
};
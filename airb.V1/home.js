window.onload = () => {
   let isAuth = false;

   //if ()

   if (isAuth === true) {
      let h3 = document.createElement("h3");
      h3.innerHTML = "Logged in as: ";
   } else {
      let h3n = document.createElement("h3");
      h3n.innerHTML = `<a href="../login.html">Login Now: </a>`;
   }
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

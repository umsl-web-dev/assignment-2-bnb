window.onload = () => {
   isAuth();

   //fetch apartment listing on load
   let fetchApartment = fetch('./apartments.json')
   fetchApartment.then(res => {
      return res.json();
   }).then(data => {
      let apartment = data;
      displayApartment(apartment);
      //console.log(apartment)
   }).catch(err => {
      console.log('Fetch problem: ' + err)
   })

   let startDate = document.getElementById("startDate");
   let endDate = document.getElementById("endDate");
   sDate = JSON.parse(window.localStorage.getItem("sDate"));
   eDate = JSON.parse(window.localStorage.getItem("eDate"));
   startDate.value = sDate;
   endDate.value = eDate;
};

function displayApartment(fetchApartment) {
   index = JSON.parse(window.localStorage.getItem("index"))
   //console.log("Value of Index from Local Storage: " + index)
   let photoDiv = document.getElementById("photo");
   let titleDiv = document.getElementById("title");
   let ul = document.getElementById("deets")

   //title
   let pTitle = document.createElement("h1");
   pTitle.innerHTML = fetchApartment[index].title;
   titleDiv.appendChild(pTitle);

   //Price
   let liP = document.createElement("li");
   liP.innerHTML = "Price: " + fetchApartment[index].price;
   ul.appendChild(liP);

   //Description
   let liD = document.createElement("li");
   liD.innerHTML = "Description: " + fetchApartment[index].description;
   ul.appendChild(liD);

   //Address
   let liADD = document.createElement("li");
   liADD.innerHTML = "Address: " + fetchApartment[index].address;
   ul.appendChild(liADD);

   //IMG
   let img = document.createElement("img");
   img.src = fetchApartment[index].photo;
   photoDiv.appendChild(img);
}


//open confirmation page and save dates
let saveDate = () => {
   let sDate = document.getElementById("startDate").value;
   let eDate = document.getElementById("endDate").value;
   console.log("In Save Date")

   if ((sDate && eDate) !== (null || "")) {
      console.log("INside top of IF")
      localStorage.setItem("sDate", JSON.stringify(sDate))
      localStorage.setItem("eDate", JSON.stringify(eDate))
      location.assign("./bookConf.html")
   } else {
      console.log("inside alert")
      window.alert("Please Select a valid Date!")
   }
}

let goBack = () => {
   window.localStorage.removeItem("index");
   window.location.assign("./searchResults.html")
}

let isAuth = () => {
   authUser = JSON.parse(window.localStorage.getItem("authUser"));
   loggedUser = document.getElementById("authUser")
   if ((JSON.parse(window.localStorage.getItem("authenticated")) == true) && (JSON.parse(window.localStorage.getItem("authUser")) !== (null || ""))) {
      loggedUser.innerHTML = "Signed In As: " + authUser.email;
   } else {
      loggedUser.innerHTML = `<a href="./login.html">Login Now: </a>`;
      document.getElementById("subBut").disabled = true;
   }
};

let logout = () => {
   window.localStorage.setItem("authenticated", false)
   window.localStorage.removeItem("authUser")
}
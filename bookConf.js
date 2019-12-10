window.onload = () => {
   index = JSON.parse(window.localStorage.getItem("index"));
   sDate = JSON.parse(window.localStorage.getItem("sDate"));
   eDate = JSON.parse(window.localStorage.getItem("eDate"));

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
   });

   function isAuth() {
      sEmail = JSON.parse(window.localStorage.getItem("email"))
      sPass = JSON.parse(window.localStorage.getItem("password"))
      if ((sEmail && sPass) !== (null || "")) {
         //User is authenticated
         //continue on
      } else {
         //User must make an account and sign in
         //DO we need isAuth here? they should be verified in bnbDetails before coming here 
      }
   }

};


function displayApartment(fetchApartment) {
   //console.log(fetchApartment[index])
   let photoDiv = document.getElementById("photo");
   let info = document.getElementById("conf");

   //title
   let pTitle = document.createElement("h1");
   pTitle.innerHTML = fetchApartment[index].title;
   info.appendChild(pTitle);

   //IMG
   let img = document.createElement("img");
   img.src = fetchApartment[index].photo;
   photoDiv.appendChild(img);

   //Dates
   let start = document.createElement("h3");
   start.innerHTML = "Start Date: " + sDate;
   info.appendChild(start);
   let end = document.createElement("h3");
   end.innerHTML = "End Date: " + eDate;
   info.appendChild(end);

   //generate and display random confirmation number
   let conf = "";
   for (let i = 0; i < 10; i++) {
      conf += Math.floor(Math.random() * 10);
   };
   let confirmation = document.createElement("h3");
   confirmation.innerHTML = "Confirmation Number: " + conf;
   info.appendChild(confirmation);

};

function goHome() {
   location.assign("./airb.V1/home.html")
   window.localStorage.removeItem(index);
   window.localStorage.removeItem(eDate);
   window.localstorage.removeItem(sDate);
};
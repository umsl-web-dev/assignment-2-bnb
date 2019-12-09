window.onload = () => {
   index = JSON.parse(window.localStorage.getItem("index"))
   console.log("Value of Index from Local Storage: " + index)

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
};

function displayApartment(fetchApartment) {
   //console.log(fetchApartment[index])
   //let mainDiv = document.getElementById("main");
   let photoDiv = document.getElementById("photo");
   //let childDiv = document.getElementById("child");
   let titleDiv = document.getElementById("title");
   //let infoDiv = document.getElementById("info");
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

   if ((sDate && eDate) !== (null || "")) {
      window.open('./bookConf.html');
      window.close('./bnbDetails.html');
   } else {
      window.alert("Please Select a valid Date!")
   }

   localStorage.setItem("sDate", JSON.stringify(sDate))
   localStorage.setItem("eDate", JSON.stringify(eDate))
}

let goBack = () => {
   window.open('./searchResults.html');
   window.close('./bnbDetails.html');
   storage.removeItem(index);
}
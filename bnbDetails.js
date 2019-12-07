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


//open confirmation page and check date selection
//Not working currently
let confPage = () => {
   let confDate = document.getElementByName("date");

   console.log(confDate)

   // if (confDate === null) {
   //    window.alert("Please Select a valid Date!")
   //    console.log("confDate").value
   // } else {
   //    window.open("./bookConf.html");
   //    console.log("confDate").value
   // }
}
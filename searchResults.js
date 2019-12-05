
let fetchApartments = fetch('./apartments.json')

fetchApartments.then(res => {
   return res.json();
}).then(data => {
   let apartment = data;
   displayApartments(apartment);
   console.log(apartment[0])
}).catch(err => {
   console.log('Fetch problem: ' + err)
})


function displayApartments(fetchApartments) {
   var mainContainer = document.getElementById("apartments");
   for (var i = 0; fetchApartments.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = `<a href="./bnbDetails.html"> Title: ${fetchApartments[i].title}</a>`;
      mainContainer.appendChild(div);

      //create UL with li for other props
      let ul = document.createElement("ul");
      div.appendChild(ul);
      let liA = document.createElement("li");
      liA.innerHTML = "Availability: " + fetchApartments[i].availability;
      ul.appendChild(liA);
      let liP = document.createElement("li");
      liP.innerHTML = "Price: " + fetchApartments[i].price;
      ul.appendChild(liP);
      let liD = document.createElement("li");
      liD.innerHTML = "Description: " + fetchApartments[i].description;
      ul.appendChild(liD);
      let liADD = document.createElement("li");
      liADD.innerHTML = "Address: " + fetchApartments[i].address;
      ul.appendChild(liADD);
      let liPH = document.createElement("li");
      liPH.innerHTML = "Photo: " + fetchApartments[i].photo;
      ul.appendChild(liPH);
   }
}


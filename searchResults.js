
let fetchApartments = fetch('./apartments.json')

fetchApartments.then(res => {
   return res.json();
}).then(data => {
   let apartment = data;
   displayApartments(apartment);
   //console.log(apartment)
}).catch(err => {
   console.log('Fetch problem: ' + err)
})

//Function not working
//window.open  Search how to navigate and send them through this function
function saveIndexValue(index) {
   console.log(index);
   localStorage.setItem("index", JSON.stringify(index))
};

function displayApartments(fetchApartments) {
   var mainContainer = document.getElementById("apartments");
   for (let i = 0; fetchApartments.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = `<a onclick="saveIndexValue(${i})"> Title: ${fetchApartments[i].title}</a>`;
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


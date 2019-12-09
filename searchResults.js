
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

//save index to local storage and open bnbDetails page
function saveIndexValue(index) {
   //console.log(index);
   localStorage.setItem("index", JSON.stringify(index))
   window.open("./bnbDetails.html");
};

//Display list of apartments
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
      let img = document.createElement("img");
      img.src = fetchApartments[i].photo;
      ul.appendChild(img);
   }
}

let goHome = () => {
   window.open('./airb.V1/home.html');
   window.close('./bookConf.html');
}
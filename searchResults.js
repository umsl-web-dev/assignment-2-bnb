// let data = [
//    { "title": "BNB", "availability": "Open", "price": "$100", "description": "Full apartment", "address": "UMSL", "photo": "xxx" },
//    { "title": "BnB", "availability": "Open", "price": "$100", "description": "Just a couch", "address": "St. Louis", "photo": "xxx" },
//    { "title": "bNB", "availability": "Open", "price": "$100", "description": "Basement", "address": "St. Charles", "photo": "xxx" },
//    { "title": "bnb", "availability": "Open", "price": "$100", "description": "Condo", "address": "Somewhere", "photo": "xxx" },
//    { "title": "bnB", "availability": "Open", "price": "$100", "description": "House", "address": "UMSL", "photo": "xxx" },
// ]

// console.log(data)
// console.log(data.length)

// renderdata = () => {
//    for (places of data) {
//       let li = document.createElement("li");
//       let nUL = document.createElement("ul");
//       let title = document.createTextNode(places.title);
//       li.appendChild(title);
//       let price = document.createTextNode(places.price);
//       li.appendChild(price);
//       let avail = document.createTextNode(places.availability);
//       li.appendChild(avail);
//       let desc = document.createTextNode(places.description);
//       li.appendChild(desc);
//       let address = document.createTextNode(places.address);
//       li.appendChild(address);
//       let photo = document.createTextNode(places.photo);
//       li.appendChild(photo);
//       document.getElementById("resultsUL").appendChild(li);
//       //document.getElementsByTagName("li").setAttribute("id", "nestedUL");
//       //document.getElementById("nestedUL").appendChild(nUL);
//    }
// };

// renderdata();

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
      div.innerHTML = "Title: " + fetchApartments[i].title;
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
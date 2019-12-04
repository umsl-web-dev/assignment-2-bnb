// // Converting JSON object to JS object
// let apartment = JSON.stringify(apartments);

// // console.log(apartment)
// // console.log(apartments)

// for (var i = 0; i < apartments.length; i++) {
//   console.log(apartments[i])
// }



// let request = new XMLHttpRequest();
// request.open('GET', 'apartments.json', true)
// request.onload = function () {
//   let apartments = JSON.parse(this.response);

//   for (var i = 0; i < apartments.length; i++) {
//     console.log(apartments[0])
//   }
// }

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
  }
}
window.onload = () => {
  isAuth();

};

let fetchApartments = fetch('./apartments.json')

fetchApartments.then(res => {
  return res.json();
}).then(data => {
  let apartment = data;
  console.log(apartment);
  displayApartments(apartment);
  //console.log(apartment);
}).catch(err => {
  console.log('Fetch problem: ' + err)
})

//save index to local storage and open bnbDetails page
function saveIndexValue(index) {
  localStorage.setItem("index", JSON.stringify(index))
  location.assign("./bnbDetails.html");
};

//Display list of apartments
function displayApartments(fetchApartments) {
  var mainContainer = document.getElementById("apartments");
  for (let i = 0; fetchApartments.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = `<a onclick="saveIndexValue(${i})"> ${fetchApartments[i].title}</a>`;
    mainContainer.appendChild(div);


      //create UL with li for other props
      let ul = document.createElement("ul");
      div.appendChild(ul);
      let img = document.createElement("img");
      img.src = fetchApartments[i].photo;
      ul.appendChild(img);
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
  }

}

let goHome = () => {
  window.location.assign("./airb.V1/home.html");
  window.localStorage.removeItem("sDate");
  window.localStorage.removeItem("eDate");
}

let isAuth = () => {
  authUser = JSON.parse(window.localStorage.getItem("authUser"));
  loggedUser = document.getElementById("authUser")
  if ((JSON.parse(window.localStorage.getItem("authenticated")) == true) && (JSON.parse(window.localStorage.getItem("authUser")) !== (null || ""))) {
    loggedUser.innerHTML = "Signed In As: " + authUser.email;
  } else {
    loggedUser.innerHTML = `<a href="./login.html">Login Now: </a>`;
  }
}

let logout = () => {
  window.localStorage.setItem("authenticated", false)
  window.localStorage.removeItem("authUser")
}


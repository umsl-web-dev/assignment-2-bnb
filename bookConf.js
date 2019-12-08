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
};



function displayApartment(fetchApartment) {
   console.log(fetchApartment[index])
   //let mainDiv = document.getElementById("main");
   let photoDiv = document.getElementById("photo");
   //let childDiv = document.getElementById("child");
   let info = document.getElementById("conf");
   //let infoDiv = document.getElementById("info");

   //title
   let pTitle = document.createElement("h1");
   pTitle.innerHTML = fetchApartment[index].title;
   info.appendChild(pTitle);

   //IMG
   let img = document.createElement("img");
   img.src = fetchApartment[index].photo;
   photoDiv.appendChild(img);
}

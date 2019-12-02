let data = [
   { "title": "BNB", "availability": "Open", "price": "$100", "description": "Full apartment", "address": "UMSL", "photo": "xxx" },
   { "title": "BnB", "availability": "Open", "price": "$100", "description": "Just a couch", "address": "St. Louis", "photo": "xxx" },
   { "title": "bNB", "availability": "Open", "price": "$100", "description": "Basement", "address": "St. Charles", "photo": "xxx" },
   { "title": "bnb", "availability": "Open", "price": "$100", "description": "Condo", "address": "Somewhere", "photo": "xxx" },
   { "title": "bnB", "availability": "Open", "price": "$100", "description": "House", "address": "UMSL", "photo": "xxx" },
]

console.log(data)

renderdata = () => {
   document.getElementById("resultsUL").innerHTML = ""
   for (places of data) {
      let li = document.createElement("li");
      let text = document.createTextNode(data.title);
      li.appendChild(text);
      document.getElementById("resultsUL").appendChild(li)
   }
};

renderdata();
console.log(customers);


let container = document.querySelector(".container");

let template = ``;

for (var i = 0; i < customers.results.length; i++) {

  template += `<div id="customer"><div
              id="info">
              <img src= ${customers.results[i].picture.large}>
              <h3>${customers.results[i].name.first} ${customers.results[i].name.last}</h3>
              <h4>${customers.results[i].email}</h4>
              </div>
              <div id=location>
                <p>${customers.results[i].location.street}</p>
                <p>${customers.results[i].location.city} ${customers.results[i].location.state}, ${customers.results[i].location.postcode}</p>
                <p>${customers.results[i].phone}</p>
              </div>
              </div>`;


}

  container.innerHTML = template;

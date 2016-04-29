/* globals CarLot */
'use strict';

(function() {
  var carlotDiv = document.getElementById("carlot");
  function populatePage(inventory) {
    inventory.forEach(function(car) {
      var carCard = document.createElement("div");
      carCard.className = "car-card";
      carCard.innerHTML = `
        <p><span class="car-label">Make</span>${car.make}</p>
        <p><span class="car-label">Model</span>${car.model}</p>
        <p><span class="car-label">Year</span>${car.year}</p>
        <p><span class="car-label">Price</span>${car.price}</p>
        <p><span class="car-label">Color</span>${car.color}</p>
        <p><span class="car-label">Purchased</span>${car.purchased}</p>
        <p><span class="car-label">Description</span>${car.description}</p>`;
      carlotDiv.appendChild(carCard);
    });
  }

  CarLot.loadInventory(populatePage);
}());


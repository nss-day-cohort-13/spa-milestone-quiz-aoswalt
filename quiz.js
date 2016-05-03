/* globals CarLot */
'use strict';

(function() {
  var carlotDiv = document.getElementById("carlot");
  function populatePage(inventory) {
    let row;
    for(let carI = 0; carI < inventory.length; ++carI) {
      //NOTE(adam): new row for every 3 cards
      if(carI % 3 === 0) {
        row = document.createElement("div");
        row.className = "row";
        carlotDiv.appendChild(row);
      }

      let car = inventory[carI];
      let carCard = document.createElement("div");
      carCard.className = "car-card col-xs-4";
      carCard.innerHTML = `
        <p><span class="car-label">Make</span>${car.make}</p>
        <p><span class="car-label">Model</span>${car.model}</p>
        <p><span class="car-label">Year</span>${car.year}</p>
        <p><span class="car-label">Price</span>${car.price}</p>
        <p><span class="car-label">Color</span>${car.color}</p>
        <p><span class="car-label">Purchased</span>${car.purchased}</p>
        <p><span class="car-label">Description</span><span class="car-desc">${car.description}</span></p>`;
      row.appendChild(carCard);
      carCard.style.borderColor = car.color;
    }
    CarLot.resetStyles();
    CarLot.activateEvents();
  }

  CarLot.loadInventory(populatePage);
}());

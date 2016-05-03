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
      let carCardContainer = document.createElement("div");
      carCardContainer.className = "col col-xs-4";
      carCardContainer.innerHTML = `
        <div class="car-card">
          <p><span class="car-label">Make</span>${car.make}</p>
          <p><span class="car-label">Model</span>${car.model}</p>
          <p><span class="car-label">Year</span>${car.year}</p>
          <p><span class="car-label">Price</span>${car.price}</p>
          <p><span class="car-label">Color</span>${car.color}</p>
          <p><span class="car-label">Purchased</span>${car.purchased}</p>
          <p><span class="car-label">Description</span><span class="car-desc">${car.description}</span></p>
        </div>`;
      row.appendChild(carCardContainer);
      carCardContainer.children[0].style.borderColor = car.color;
    }
    CarLot.resetStyles();
    CarLot.activateEvents();
  }

  CarLot.loadInventory(populatePage);
}());

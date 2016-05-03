/* globals CarLot */
'use strict';

(function() {
  var carlotDiv = document.getElementById("carlot");
  function populatePage(inventory) {
    for(let carI = 0; carI < inventory.length; ++carI) {
      let car = inventory[carI]
      let carCard = document.createElement("div");
      carCard.className = "car-card col-xs-12 col-sm-6 col-md-4";
      carCard.innerHTML = `
        <p><span class="car-label">Make</span>${car.make}</p>
        <p><span class="car-label">Model</span>${car.model}</p>
        <p><span class="car-label">Year</span>${car.year}</p>
        <p><span class="car-label">Price</span>${car.price}</p>
        <p><span class="car-label">Color</span>${car.color}</p>
        <p><span class="car-label">Purchased</span>${car.purchased}</p>
        <p><span class="car-label">Description</span><span class="car-desc">${car.description}</span></p>`;
      carlotDiv.appendChild(carCard);
      carCard.style.borderColor = car.color;

      //NOTE(adam): clearfix for small 2 column layout
      if(carI % 2 === 1) {
        let clearFix = document.createElement("div");
        clearFix.className = "clearfix visible-sm-block";
        carlotDiv.appendChild(clearFix);
      }

      //NOTE(adam): clearfix for medium+ 3 column layout
      if(carI % 3 === 2) {
        let clearFix = document.createElement("div");
        clearFix.className = "clearfix visible-md-block visible-lg-block";
        carlotDiv.appendChild(clearFix);
      }
    }
    CarLot.resetStyles();
    CarLot.activateEvents();
  }

  CarLot.loadInventory(populatePage);
}());

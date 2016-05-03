'use strict';

var CarLot = (function(carlot) {
  var descInput = document.getElementById("desc-input");
  var selectedCard = null;

  carlot.activateEvents = function() {
    function cardClick(event) {
      if(selectedCard === event.currentTarget) {
        carlot.resetStyles();
        selectedCard.classList.remove("selected");
        selectedCard = null;
      } else {
        if(selectedCard) {
          carlot.resetStyles();
          selectedCard.classList.remove("selected");
        }

        selectedCard = event.currentTarget;
        carlot.addStyle(selectedCard, "lightblue");
        selectedCard.classList.add("selected");
      }
      descInput.value = "";
      descInput.focus();
    }

    for(var card of Array.from(document.getElementsByClassName("car-card"))) {
      card.addEventListener("click", cardClick);
    }

    descInput.addEventListener("input", function() {
      if(selectedCard) {
        selectedCard.getElementsByClassName("car-desc")[0].innerHTML = event.target.value;
      }
    });
  };

  return carlot;
}(CarLot || {}));

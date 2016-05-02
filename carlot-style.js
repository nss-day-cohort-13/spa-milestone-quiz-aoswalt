'use strict';

var CarLot = (function(carlot) {
  //TODO(adam): change to add/remove class?
  var defaultBorderWidth = "3px";
  var largerBorderWidth = "5px";
  var defaultBgColor = "papayawhip";

  //borders and bgs
  carlot.resetStyles = function() {
    for(let card of Array.from(document.getElementsByClassName("car-card"))) {
      card.style.borderWidth = defaultBorderWidth;
      card.style.backgroundColor = defaultBgColor;
    }
  };

  carlot.addStyle = function(element, color) {
    element.style.borderWidth = largerBorderWidth;
    element.style.backgroundColor = color;
  };

  return carlot;
}(CarLot || {}));

'use strict';

var CarLot = (function(carlot) {
  var inventory = [];

  carlot.getInventory = function() { return inventory; };
  carlot.loadInventory = function(callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
      inventory = JSON.parse(this.responseText).cars;
      callback(inventory);
    });
    xhr.open("GET", "inventory.json");
    xhr.send();
  };

  return carlot;
}(CarLot || {}));

const Park = function (name, price) {
  this.name = name;
  this.price = price;
  this.dinosaursCollected = [];
};

Park.prototype.addDinosaur = function (dino) {
  this.dinosaursCollected.push(dino);
};

Park.prototype.removeDinosaur = function (name) {
  const indexOfDino = this.dinosaursCollected.indexOf(name);
  this.dinosaursCollected.splice(indexOfDino, 1);
};

module.exports = Park;

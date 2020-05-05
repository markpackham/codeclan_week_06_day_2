const Park = function (name, price) {
  this.name = name;
  this.price = price;
  this.dinosaursCollected = [];
};

Park.prototype.addDinosaur = function () {
  this.dinosaursCollected.push;
};

Park.prototype.removeDinosaur = function (name) {
  const indexOfDino = this.dinosaursCollected.indexOf(name);
  this.dinosaursCollected.splice(indexOfDino, 1);
};

module.exports = Park;

// codeclan_week_06_day_2
// CodeClan Week 06 Day 2 Jurassic Park

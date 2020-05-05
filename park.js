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

Park.prototype.mostPopular = function () {
  this.dinosaursCollected.guestsAttractedPerDay;
};

Park.prototype.totalDayVisits = function () {
  let visits = 0;
  let dinos = this.dinosaursCollected;
  for (let i = 0; i < dinos.length; i++) {
    visits += dinos[i].guestsAttractedPerDay;
  }

  return visits;
};

Park.prototype.totalYearVisits = function () {
  const day_visit = this.totalDayVisits();
  const year_visits = 365 * day_visit;
  return year_visits;
};

module.exports = Park;

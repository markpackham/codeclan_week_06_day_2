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
  const dinos = this.dinosaursCollected.slice(0);
  let visits = [];
  for (let i = 0; i < dinos.length; i++) {
    visits.push(dinos[i].guestsAttractedPerDay);
  }
  max_visit = Math.max.apply(null, visits);
  for (let i = 0; i < dinos.length; i++) {
    if (dinos[i].guestsAttractedPerDay === max_visit) {
      return dinos[i].species;
    }
  }
};

Park.prototype.findSpecies = function (dino_type) {
  const dinos = this.dinosaursCollected.slice(0);
  let types = [];
  for (let i = 0; i < dinos.length; i++) {
    if (dinos[i].species === dino_type) {
      types.push(dinos[i].species);
    }
  }
  return types;
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

Park.prototype.totalYearRevenue = function () {
  const visits = this.totalYearVisits();
  const revenue = this.price * visits;
  return revenue;
};

module.exports = Park;

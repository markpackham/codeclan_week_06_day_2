const assert = require("assert");
const Park = require("../park.js");
const Dinosaur = require("../dinosaur.js");

describe("Park", function () {
  let park;
  let dinosaur1;
  let dinosaur2;
  beforeEach(function () {
    park = new Park("Yellow Stone", 100);
    dinosaur1 = new Dinosaur("t-rex", "carnivore", 50);
    dinosaur2 = new Dinosaur("raptor", "carnivore", 10);
  });

  it("should have a name", function () {
    const actual = park.name;
    assert.strictEqual(actual, "Yellow Stone");
  });

  it("should have a ticket price", function () {
    const actual = park.price;
    assert.strictEqual(actual, 100);
  });

  it("should have a collection of dinosaurs", function () {
    const actual = park.dinosaursCollected;
    assert.deepStrictEqual(actual, []);
  });

  it("should be able to add a dinosaur to its collection", function () {
    park.addDinosaur("Stegasaurus");
    const actual = park.dinosaursCollected;
    assert.deepStrictEqual(actual, ["Stegasaurus"]);
  });

  it("should be able to remove a dinosaur from its collection", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const expected = dinosaur2;
    const actual = park.dinosaursCollected;
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to find the dinosaur that attracts the most visitors");

  it("should be able to find all dinosaurs of a particular species");

  it("should be able to calculate the total number of visitors per day");

  it("should be able to calculate the total number of visitors per year");

  it("should be able to calculate total revenue for one year");
});

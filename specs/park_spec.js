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
    dinosaur3 = new Dinosaur("raptor", "carnivore", 9);
    dinosaur4 = new Dinosaur("megazord", "power", 9999);
  });

  it("should have a name", function () {
    const actual = park.name;
    assert.strictEqual(actual, "Yellow Stone");
  });

  it("should have a ticket price", function () {
    const actual = park.price;
    assert.strictEqual(actual, 100);
  });

  it("should be able to calculate the total number of visitors per day", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalDayVisits();
    assert.strictEqual(actual, 69);
  });

  it("should be able to calculate the total number of visitors per year", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalYearVisits();
    assert.strictEqual(actual, 25185);
  });

  it("should be able to calculate total revenue for one year", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalYearRevenue();
    assert.strictEqual(actual, 2518500);
  });

  describe("Park Dinosaurs", function () {
    it("should have a collection of dinosaurs", function () {
      const actual = park.dinosaursCollected;
      assert.deepStrictEqual(actual, []);
    });

    it("should be able to add a dinosaur to its collection", function () {
      park.addDinosaur(dinosaur1);
      const actual = park.dinosaursCollected[0].species;
      assert.strictEqual(actual, "t-rex");
    });

    it("should be able to remove a dinosaur from its collection", function () {
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.removeDinosaur(dinosaur1);
      const actual = park.dinosaursCollected.length;
      assert.strictEqual(actual, 1);
    });

    it("should be able to find the dinosaur that attracts the most visitors", function () {
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur3);
      park.addDinosaur(dinosaur4);
      const actual = park.mostPopular();
      assert.strictEqual(actual, "megazord");
    });

    it("should be able to find all dinosaurs of a particular species", function () {
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur3);
      park.addDinosaur(dinosaur4);
      const actual = park.findSpecies("raptor");
      assert.deepStrictEqual(actual, ["raptor", "raptor"]);
    });
  });
});

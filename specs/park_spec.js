const assert = require("assert");
const Park = require("../park.js");
const Dinosaur = require("../dinosaur.js");

describe("Park", function () {
  let park;
  beforeEach(function () {
    park = new Park("Yellow Stone", 100);
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

  it("should be able to remove a dinosaur from its collection");

  it("should be able to find the dinosaur that attracts the most visitors");

  it("should be able to find all dinosaurs of a particular species");

  it("should be able to calculate the total number of visitors per day");

  it("should be able to calculate the total number of visitors per year");

  it("should be able to calculate total revenue for one year");
});

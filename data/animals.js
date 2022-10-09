var Chance = require("chance");

// Instantiate Chance so it can be used
var chance = new Chance();

module.exports = (type) => {
  const animals = [];
  // Create 1000 animals
  for (let i = 0; i < 1000; i++) {
    animals.push({
      id: chance.guid({ version: 5 }),
      name: chance.animal({ type }),
      age: chance.age({ type: "child" }),
      type: `${type} animal`,
    });
  }
  return animals;
};

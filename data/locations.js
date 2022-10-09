var Chance = require("chance");

// Instantiate Chance so it can be used
var chance = new Chance();

module.exports = () => {
  const locations = [];
  // Create 1000 locations
  for (let i = 0; i < 1000; i++) {
    locations.push({
      id: chance.guid({ version: 5 }),
      latitude: chance.latitude(),
      longitude: chance.longitude(),
    });
  }
  return locations;
};

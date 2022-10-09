var Chance = require("chance");

// Instantiate Chance so it can be used
var chance = new Chance();

module.exports = () => {
  const profiles = [];
  // Create 1000 profiles
  for (let i = 0; i < 1000; i++) {
    profiles.push({
      id: chance.guid({ version: 5 }),
      name: chance.name(),
      age: chance.age(),
      email: chance.email(),
      address: {
        street: chance.address(),
        city: chance.city(),
        country: chance.country({ full: true }),
        zipcode: chance.zip(),
      },
      company: chance.company(),
      phone: chance.phone(),
      website: chance.url(),
      twitter: chance.twitter(),
    });
  }
  return profiles;
};

var Chance = require("chance");

// Instantiate Chance so it can be used
var chance = new Chance();

module.exports = () => {
  const employees = [];
  // Create 1000 employees
  for (let i = 0; i < 1000; i++) {
    employees.push({
      id: chance.guid({ version: 5 }),
      name: chance.name(),
      age: chance.age(),
      email: chance.email(),
      joiningDate: chance.date({ string: true }),
      profession: chance.profession(),
      salary: chance.dollar({ min: 10000, max: 200000 }),
      address: {
        street: chance.address(),
        city: chance.city(),
        country: chance.country({ full: true }),
        zipcode: chance.zip(),
      },
      company: chance.company(),
      phone: chance.phone(),
      website: chance.url(),
    });
  }
  return employees;
};

var Chance = require("chance");

// Instantiate Chance so it can be used
var chance = new Chance();

module.exports = () => {
  const userLogins = [];
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const today = new Date().getDate();
  // Create 1000 userlogins
  for (let i = 0; i < 1000; i++) {
    userLogins.push({
      id: chance.guid({ version: 5 }),
      name: chance.name(),
      email: chance.email(),
      password: chance.string({ length: 15, alpha: true, numeric: true }),
      activity: {
        lastLogin: chance.date({
          year: currentYear,
          month: currentMonth,
          date: today - 1,
        }),
        updated: chance.date({ year: currentYear, month: currentMonth - 1 }),
        created: chance.date({ year: currentYear - 2 }),
      },
    });
  }
  return userLogins;
};

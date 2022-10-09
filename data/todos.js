var Chance = require("chance");

// Instantiate Chance so it can be used
var chance = new Chance();

module.exports = () => {
  const todos = [];
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const today = new Date().getDate();
  // Create 1000 todos
  for (let i = 0; i < 1000; i++) {
    const card = chance.cc_type({ raw: true });
    todos.push({
      id: chance.guid({ version: 5 }),
      userId: chance.natural({ min: 1, max: 10 }),
      title: chance.sentence({ word: 8 }),
      description: chance.paragraph({ sentences: 1 }),
      completed: chance.bool(),
      activity: {
        updated: chance.date({
          year: currentYear,
          month: currentMonth,
          date: today,
        }),
        created: chance.date({ year: currentYear, month: currentMonth - 1 }),
      },
    });
  }
  return todos;
};

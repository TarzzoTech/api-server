var Chance = require("chance");

// Instantiate Chance so it can be used
var chance = new Chance();

module.exports = () => {
  const cards = [];
  // Create 1000 cards
  for (let i = 0; i < 1000; i++) {
    const c = chance.cc_type({ raw: true });
    const cardNumber = chance.cc({ type: c.short_name });
    cards.push({
      id: chance.guid({ version: 5 }),
      ...c,
      cardNumber,
      expiry: {
        month: chance.exp_month({ future: true }),
        year: chance.exp_year(),
      },
    });
  }
  return cards;
};

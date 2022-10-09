var Chance = require("chance");

// Instantiate Chance so it can be used
var chance = new Chance();

module.exports = () => {
  const posts = [];
  // Create 1000 posts
  for (let i = 0; i < 1000; i++) {
    const card = chance.cc_type({ raw: true });
    posts.push({
      id: chance.guid({ version: 5 }),
      userId: chance.natural({ min: 1, max: 10 }),
      title: chance.sentence(),
      body: chance.paragraph({ sentences: 3 }),
    });
  }
  return posts;
};

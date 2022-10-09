var Chance = require("chance");

// Instantiate Chance so it can be used
var chance = new Chance();

module.exports = () => {
  const list = [
    "Power drills",
    "Impact drivers",
    "Circular saws",
    "Table saws",
    "Polishers",
    "Sanders",
    "Training toys",
    "Chew toys",
    "Squeaky toys",
    "Stuffed plush toys",
    "Rope toys",
    "Pirate boots",
    "Witch boots",
    "Superhero boots",
    "Vintage-era footwear",
    "Gladiator sandals",
    "Laptop batteries",
    "Shot glasses",
    "Slipcovers",
    "Wall plates",
    "Outlet cover",
    "Decorative wall plates",
    "Screwless wall plates",
    "Luxury switch plates",
    "Baby t-shirts",
    "Funny baby shirts",
    "Baby shark shirts",
    "Baby shower shirts",
    "Baby fishing shirts",
    "Custom baby shirts",
    "Cute baby shirts",
    "Shower curtain rings",
    "Wooden curtain rings",
    "Eyelet curtain rings",
    "Metal curtain rings",
    "Curtain rings black",
    "Cabinet knobs",
    "Cabinet handles",
    "Watch repair kits",
    "Watch display cases",
    "Travel cases",
    "Watch winders",
    "Watch back remover tools",
    "Glass tumblers",
    "Tumbler cups",
    "Tumbler with straws",
    "Model trains sets",
    "Wedding dresses",
    "Table runners",
    "Car Batteries",
    "Transmissions",
    "Radiators",
    "Engines",
    "Breaks",
    "Front steering and suspension",
  ];

  const reviews = [];
  // Create 1000 reviews
  for (let i = 0; i < 1000; i++) {
    const card = chance.cc_type({ raw: true });
    reviews.push({
      id: chance.guid({ version: 5 }),
      productId: chance.guid({ version: 5 }),
      productName: chance.pickone(list),
      rating: chance.natural({ min: 0, max: 5 }),
      comments: chance.paragraph({ sentences: 3 }),
    });
  }
  return reviews;
};

const getUserLogins = require("./data/user-logins");
const getCards = require("./data/cards");
const getEmployees = require("./data/employees");
const getProfiles = require("./data/profiles");
const getLocations = require("./data/locations");
const getProducts = require("./data/products");
const getReviews = require("./data/reviews");
const getQuotes = require("./data/quotes");
const getAnimals = require("./data/animals");
const getPosts = require("./data/posts");
const getTodos = require("./data/todos");

module.exports = () => {
  return {
    "user-logins": getUserLogins(),
    cards: getCards(),
    employees: getEmployees(),
    profiles: getProfiles(),
    locations: getLocations(),
    products: getProducts(),
    reviews: getReviews(),
    quotes: getQuotes(),
    "sea-animals": getAnimals("ocean"),
    "desert-animals": getAnimals("desert"),
    "grassland-animas": getAnimals("grassland"),
    "forest-animals": getAnimals("forest"),
    "farm-animals": getAnimals("farm"),
    "pet-animals": getAnimals("pet"),
    "zoo-animals": getAnimals("zoo"),
    posts: getPosts(),
    todos: getTodos(),
  };
};

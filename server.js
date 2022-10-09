const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
// const getData = require("./index");

// var fs = require("fs");
// fs.writeFile("db.json", JSON.stringify(getData()), "utf8", function (err) {
//   if (err) throw err;
//   console.log("complete");
// });

server.use(middlewares);
server.use(router);

server.listen(port);

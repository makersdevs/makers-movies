const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
// const axios = require("axios");
// const fs = require("fs");

// let localDb = fs.readFileSync("db.json");
// let movieDetails = {
//   items: [],
// };
// const getDetails = async () => {
//   const { items } = JSON.parse(localDb);
//   const API = "https://imdb-api.com/ru/API/Title/k_laz3y4f4/";
//   for (let item = 0; item < items.length; item++) {
//     if (item < 40) {
//       await axios(API + items[item].id).then((res) => {
//         movieDetails.items.push(res.data);
//       });
//     }
//   }
//   fs.writeFileSync("movieDetails.json", JSON.stringify(movieDetails));
// };
// getDetails();

server.use(middlewares);
server.use(router);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.listen(port, () => {
  console.log("JSON Server is running");
});

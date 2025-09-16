// const express = require("express");
// const axios = require("axios"); // Make sure to install axios: npm install axios
// const app = express();

// app.get("/users", async (req, res) => {
//   try {
//     const response = await axios.get("https://randomuser.me/api");
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch user data" });
//   }
// });

// app.listen(8000, () => {
//   console.log("Server is running on port 8000");
// });
const http = require("http"); // http module is used to create an HTTP server and client in Node.js.
const createServer = http.createServer(async (req, res) => {
  //createServer method is used to create an HTTP server.
  console.log("Request made", req.headers);
  res.end("Hello World");
});
createServer.listen(8000, () => {
  // listen is used to bind and listen the connections on the specified host and port.
  console.log("Server is running on port 8000");
});

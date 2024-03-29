require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const ModelClass = require("./model.js");
const Model = new ModelClass();

let p = __dirname + "/public/";
app.use(express.static(p));

app.get("/stores/all", async (req, res) => {
  const stores = await Model.getStores();
  res.json(stores);
});

const server = async () => {
  await Model.connectDatabase();
  //await Model.setupDatabase();

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
};

server();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;
require("dotenv").config();

app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect(process.env.URI);

  app.get("/", (req, res) => {
    res.send("hello world");
  });
}
main()
  .then(() => console.log("mongoDB connected sucess"))
  .catch((err) => console.log(err));

//routes
const ItemRoutes = require("./src/routes/itemRoute");
const CategoryRoute = require("./src/routes/categoryRoute");

app.use("/api", ItemRoutes);
app.use("/api", CategoryRoute);

app.listen(port, () => {
  console.log(`server start on port ${port}`);
});

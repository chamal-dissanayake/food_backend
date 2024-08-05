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
}
main()
  .then(() => console.log("mongoDB connected sucess"))
  .catch((err) => console.log(err));

//routes
const ItemRoutes = require("./src/routes/itemRoute");
const CategoryRoute = require("./src/routes/categoryRoute");

app.use("/api", ItemRoutes);
app.use("/api", CategoryRoute);

app.get("/", (req, res) => {
  res.send("Running the Food Recipe App");
});

app.listen(port, () => {
  console.log(`server start on port ${port}`);
});

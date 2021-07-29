// create the server with all the required things
const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const mongoose = require("mongoose")

const apiRoutes = require("./controllers/api/api-routes")
const htmlRoutes = require("./controllers/html-routes")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessTracker", 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// console.log(apiRoutes);
// console.log(htmlRoutes);

app.use(apiRoutes)
app.use(htmlRoutes)

// const databaseUrl = "fitnessTracker";
// const collections = ["exercises"];

// const db = mongojs(databaseUrl, collections);

// db.on("error", error => {
//     console.log("Database Error:", error);
//   });

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}!`);
});
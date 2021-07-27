// create the server with all the required things
const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "fitnessTracker";
const collections = ["exercises"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
  });
  
// POST exercise to most recent workout plan


// POST new excercise to new workout plan


// GET combined weight of multiple exercises from the past seven workouts on the stats page.
// GET total duration of each workout from the past seven workouts on the stats page.

// APP IS listening on....
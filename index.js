require('dotenv').config();

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT;

app.use(express.json());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blog-single", (req, res) => {
  res.render("blog-single");
});

app.get("/blog", (req, res) => {
  res.render("blog");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/index-2", (req, res) => {
  res.render("index-2");
});

app.get("/project", (req, res) => {
  res.render("project");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/team", (req, res) => {
  res.render("team");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

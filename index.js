const express = require("express");
const app = express();

const query = require("./query.js");

app.get("/", (req, res) => res.send("Hello World"));
app.get("/y", (req, res) => res.send("Yoshimura"));
//app.get("/q", (req, res) => res.send(query.getAllCars((res) => console.log(res))));
app.get("/q", (req, res) => query.getAllCars((resq) => res.send(resq)));

app.listen(80);
console.log("listen!!");

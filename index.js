const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {res.render("login");});
app.get("/singup", (req, res) => {res.render("singup");});
app.get("/recover", (req, res) => {res.render("recover");});




app.listen(4000, () => {console.log("App funfando");});
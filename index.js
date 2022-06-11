const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {res.render("index");});
app.get("/register", (req, res) => {res.render("register");});




app.listen(4000, () => {console.log("App funfando");});
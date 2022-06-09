//Create 
const express = require("express");
const app = express();


app.set('view engine', "ejs");
app.use(express.static('public'));
//app.use(bodyParser.urlencoded({extend: false}));
//app.use(bodyParser.json);


 //Create routes.
 app.get("/index", (req,res) => {res.render("index");});
 app.get("/login", (req,res) => {res.render("login");});
 app.get("/register", (req,res) => {res.render("register");});


app.listen(8080, () => {console.log("App Funfando!!!")});
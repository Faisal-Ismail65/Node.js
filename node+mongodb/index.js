// 1 :  importing different packages to our app
const connection = require("./model");
const express = require("express");
const path = require("path");
const expressHandlebars = require("express-handlebars").engine;
const bodyparser = require("body-parser");
const courseController = require("./controllers/courses");

// 2 :  creating an express app
const app = express();

// 3 :  using bodyParser to encode url
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

// 4 : using courses to our root url
app.use("/",courseController);

// 5 :  set folder to view in our app
app.set('views',path.join(__dirname,"./views/"));

// 6 : defining our app engine to express-handlebars

app.engine("hbs", expressHandlebars({
    extname : "hbs",
    defaultLayout : "mainlayout",
    layoutsDir : __dirname + "/views/layouts"
}));

// 7 :  setting up our app engine
app.set("view engine","hbs");

// 8 :  get request of our app 

// app.get('/', (req,res) => {
//     res.render("index",{});
// });


// 9 :  defining listening port or our app 

app.listen(7000,()=>{
    console.log("server is running");
})
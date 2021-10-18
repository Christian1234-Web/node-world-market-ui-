const express = require('express');
const exhbs = require('express-handlebars');
const path = require('path');
const app = express();

const PORT = 3004;
const VIEWS = path.resolve(__dirname, "views");
const LAYOUTS = path.join(VIEWS, "layouts");
const LAYOUTSDIR = path.join(VIEWS,"pages");
const DEFAULTLAYOUT = path.join(LAYOUTS,"main");

console.log(VIEWS);

app.engine("hbs",exhbs({
	layoutsDir: LAYOUTSDIR,
	defaultLayout: DEFAULTLAYOUT,
	extname: "hbs"
}));

app.set("view engine", "hbs");
app.set("views", VIEWS);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
	res.render("pages/index");
});

app.get("/furniture",(req,res)=>{
	res.render("pages/furniture")
});

app.get("/outdoors",(req,res)=>{
	res.render("pages/outdoors")
});

app.get("/rugs",(req,res)=>{
	res.render("pages/rugs")
});

app.get("/sign",(req,res)=>{
	res.render("pages/signin")
});


app.post("/",(req,res)=>{
	
});
app.listen(PORT);
console.log("App is runing on port"+ " " + PORT);
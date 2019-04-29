const express = require("express");
//const busboy = require("connect-busboy");\
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ extname: ".hbs" });
//const Tesseract = require("tesseract.js");
const app = express();
const tesseract = require("node-tesseract-ocr");


app.engine("handlebars", hbs.engine);

app.set("views", __dirname + "/views/");
app.set("view engine", "hbs");
app.set("port", process.env.PORT || 4141);
//app.use(busboy());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + "/public"));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(require("./routes/index"));
app.use(fileUpload());
//hbs.registerPartials(__dirname + "/views/partials");
app.post("/person/upload", function(req, res) {
    //take file from request and run tesseract.
    let samplefile = req.files.evaluation;
    console.log("sample file " + samplefile);
    samplefile.mv(__dirname + '/images/test.jpg', function(err){

		tesseract.recognize(__dirname + '/images/test.jpg', {
			load_system_dawg: 0,
			tessedit_char_whitelist: '0123456789',
			presets: ['hocr', 'digits']
		}).then(text => {
			console.log('result:', text)
		})
    });


});
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

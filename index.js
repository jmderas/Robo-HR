const express = require("express");
//const busboy = require("connect-busboy");
const fileUpload = require("express-fileupload");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ extname: ".hbs" });
const Tesseract = require("tesseract.js");
const app = express();

app.engine("handlebars", hbs.engine);

app.set("views", __dirname + "/views/");
app.set("view engine", "hbs");
app.set("port", process.env.PORT || 4141);
//app.use(busboy());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + "/public"));
// app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(require("./routes/index"));
app.use(fileUpload());
// hbs.registerPartials(__dirname + "/views/partials");
app.post("/person/upload", function(req, res) {
  Tesseract.recognize(req.files.evaluation)
    .progress(function(message) {
      console.log("progress is: ", message);
    })
    .then(result => console.log(result));
});
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

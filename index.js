const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ extname: ".hbs" });
const tesseract = require("tesseract.js");
const app = express();

app.engine("handlebars", hbs.engine);

app.set("views", __dirname + "/views/");
app.set("view engine", "hbs");
app.set("port", process.env.PORT || 4141);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(require("./routes/index"));
// hbs.registerPartials(__dirname + "/views/partials");

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

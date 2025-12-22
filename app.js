import express from "express";
import { engine } from "express-handlebars";
const app = express();
const PORT = 3000;

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: false, // jelas tidak pakai layout
  })
);
app.set("view engine", "hbs");
app.set("views", "src/views");
app.use("/public", express.static("src/public"));

app.get("/", (req, res) => res.render("index"));

app.listen(PORT, console.log(`running in localhost:${PORT}`));

import express from "express"
import bodyParser from "body-parser"
import viewEngine from "./config/viewEngine"
import initWebRoute from "./route/web"


let app = express()

app.use(bodyParser.json()); // Parse JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app)
initWebRoute(app)

require("dotenv").config();
let port = process.env.PORT || 3000

app.listen(port, () => {
  console.log("server is running on port", port)
})


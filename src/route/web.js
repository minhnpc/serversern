import express from "express"
import controller from "../controller/controller"
let router = express.Router()

let initWebRoute = (app) => {
  app.get("/", controller.homePage)


  return app.use("/", router)
}
module.exports = initWebRoute

const express = require("express")
const app = express()
const ejs = require("ejs")

app.set("view engine", "ejs")

app.get("/", (res, req) => req.render("index")) // a

app.listen(process.env.PORT || 80, console.log("Site iniciado com sucesso <3"))
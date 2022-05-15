const express = require("express")
const app = express()
const ejs = require("ejs")

app.set("view engine", "ejs")

app.get("/", (req, res) => res.render("index"))
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 80, console.log("Site iniciado com sucesso <3"))
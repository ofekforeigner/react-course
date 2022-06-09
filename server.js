require("dotenv").config();
const { request } = require("express");
const express = require("express");

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.send("Fullstack React Course");
});

app.post("/name", (req, res) => {
    if (req.body.name) {
        return res.json({ name: req.body.name });
    } else {
        return res.status(400).json({ error: "No name provided" });
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server runing on ${process.env.PORT}`);
});
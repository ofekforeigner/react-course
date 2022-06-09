require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// import routes
const authRoutes = require("./routes/auth");

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded());

app.get("/api", (req, res) => {
    res.send("Fullstack React Course");
});

app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to DB');

    app.listen(process.env.PORT, () => {
        console.log(`Server running on ${process.env.PORT}`);
    });
}).catch((error) => {
    console.log(error);
})
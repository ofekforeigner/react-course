require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// import routes
const authRoutes = require("./routes/auth");
const toDosRoutes = require("./routes/todos");

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.get("/api", (req, res) => {
    res.send("Fullstack React Course");
});

app.use("/api/auth", authRoutes);
app.use("/api/todos", toDosRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to DB');

    app.listen(process.env.PORT, () => {
        console.log(`Server running on ${process.env.PORT}`);
    });
}).catch((error) => {
    console.log(error);
})
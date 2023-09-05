const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config/config");
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const moviesRouter = require('./routes/movies')
const cors = require('cors')

app.set("port", process.env.PORT || 8090);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())



mongoose.connect(config.path, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Connected to MongoDB successfully.");
});

app.use('/auth', authRoutes);

// Define user routes
app.use('/user', userRoutes);

app.use('/movies', moviesRouter)


app.listen(app.get("port"), () => {
  console.log(`Server listening on ${app.get("port")}`);
});

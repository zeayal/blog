const express = require("express");
require('dotenv').config();
const app = express();
const { fetchIssues } = require("./fetchIssues");
const Issue = require("./model/Issue");
const homeRouter = require('./router/home');
const postRouter = require('./router/post');

var bodyParse = require('body-parser');
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: false}))

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "pug");

console.log("enter app.js", Date.now());
console.log('process.env.MONGON_DB_URL', process.env.MONGON_DB_URL)


const mongoose = require("mongoose");
mongoose.connect(process.env.MONGON_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connect success", Date.now());
});

app.get("/", function (req, res) {
  res.redirect('/home');
});

app.use('/home', homeRouter);

app.use('/post', postRouter);

app.get("/fetchIssue", function (req, res) {
  fetchIssues()
    .then((data) => {
      console.log("获取issue到数据库", Date.now(), data);
      Issue.insertMany(data, function (err, docs) {
        if (err) {
          res.json({
            code: "1",
            message: "插入数据库失败",
          });
        }

        res.json(docs);
      });
    })
    .catch((e) => {
      res.json({
        code: "1",
        message: "获取issue 失败",
        error: e,
      });
    });
});



const port = 3000;
app.listen(port, console.log(`app is running http://localhost:${port}`));

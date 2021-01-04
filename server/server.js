var mysql = require("mysql");
var config = require("./config.js");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

var pool = mysql.createPool(config);

app.post("/user_registration", function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var dob = req.body.dob;
  var password = req.body.password;

  var sqlQuery = `INSERT INTO users (Name,DOB,Phone,Email,Password) VALUES (?,?,?,?,?)`;

  pool.query(sqlQuery, [name, dob, phone, email, password], (err, result) => {
    console.log(result);
  });

  console.log(name, email, phone, dob, password);
});

app.post("/user_login", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  var sqlQuery = `SELECT * FROM users WHERE email=? AND password=?`;

  pool.query(sqlQuery, [email, password], (err, result) => {
    if (result.length === 1) {
      if (result[0].Email === email && result[0].Password === password) {
        res.status(200).send({
          status: true,
          data: result,
        });
      } else {
        res.status(-1).send(false);
      }
    }
  });
});

app.get("/get_products", function (req, res) {
  var sqlQuery = `SELECT * FROM products`;

  pool.query(sqlQuery, (err, result) => {
    if (result) {
      res.json(result);
    }
  });
});

app.get("/get_categories", function (req, res) {
  var sqlQuery = `SELECT * FROM categories`;

  pool.query(sqlQuery, (err, result) => {
    if (result) {
      res.json(result);
    }
  });
});

app.get("/", (req, res) => {
  res.status(200).send("Server Working!");
});

app.listen(port, () => {
  console.log(`app listening at ${port}`);
});

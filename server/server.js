var mysql = require("mysql");
var config = require("./config.js");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const { json } = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

var pool = mysql.createPool(config);

app.post("/user_registration", async function (req, res) {
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

app.post("/user_login", async function (req, res) {
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

app.post("/get_products", async function (req, res) {
  var page = req.body.page;

  if (page === undefined) {
    items = 0;
  } else if (page == 1) {
    items = 0;
  } else {
    var items = page * 10 - 10;
  }
  console.log(items);
  var sqlQuery = `SELECT * FROM products ORDER BY Prod_name ASC LIMIT ?,10`;
  pool.query(sqlQuery, [items], (err, result) => {
    if (result) {
      res.json(result);
    }
  });
});

app.get("/total_products", async function (req, res) {
  var sqlQuery = `SELECT COUNT(prod_id) FROM products`;
  pool.query(sqlQuery, (err, result) => {
    if (result) {
      result = JSON.stringify(result);
      result = JSON.parse(result);
      res.json(result[0]["COUNT(prod_id)"]);
    }
  });
});

app.post("/search_products", async function (req, res) {
  var prodName = req.body.prodname;
  var sqlQuery = `SELECT * FROM products WHERE Prod_name LIKE '${prodName}%' ORDER BY Prod_name ASC`;
  console.log(prodName);
  pool.query(sqlQuery, (err, result) => {
    if (result) {
      console.log(result);
      res.json(result);
    }
  });
});

// const shuffle = (array) => {
//   var currentIndex = array.length;

//   while (0 !== currentIndex) {
//     var randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex = -1;
//     var temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// };

app.get("/get_categories", async function (req, res) {
  var sqlQuery = `SELECT * FROM categories`;

  pool.query(sqlQuery, (err, result) => {
    if (result) {
      res.json(result);
    }
  });
});

app.post("/add_to_cart", async function (req, res) {
  var prod_id = req.body.prodid;
  var sqlQuery = `INSERT `;
});

app.get("/", (req, res) => {
  res.status(200).send("Server Working!");
});

app.listen(port, () => {
  console.log(`app listening at ${port}`);
});

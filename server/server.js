var mysql = require("mysql");
var config = require("./config.js");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const { v4: uuidv4 } = require("uuid");

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
    if (result) {
      res.send("Registered!");
    }
  });
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

  var sqlQuery = `SELECT * FROM products ORDER BY Prod_name ASC LIMIT ?,10`;
  pool.query(sqlQuery, [items], (err, result) => {
    if (result) {
      console.log(result);
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

function arrayUnique(array) {
  var a = array.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i].Prod_id === a[j].Prod_id) {
        a.splice(j--, 1);
      }
    }
  }

  return a;
}

app.post("/search_products", async function (req, res) {
  var prodName = req.body.prodname;
  var sqlQuery = `SELECT * FROM products WHERE Prod_name LIKE '${prodName}%' ORDER BY Prod_name ASC; SELECT * FROM products WHERE Prod_name LIKE '%${prodName}%' ORDER BY Prod_name ASC;`;
  pool.query(sqlQuery, (err, result, fields) => {
    if (result) {
      var array1 = JSON.stringify(result[0]);
      var resarray1 = JSON.parse(array1);
      var array2 = JSON.stringify(result[1]);
      var resarray2 = JSON.parse(array2);
      var total_res = arrayUnique(resarray1.concat(resarray2));
      res.json(total_res);
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

app.get("/get_latest", async function (req, res) {
  var sqlQuery = `SELECT * FROM products ORDER BY Prod_name ASC LIMIT 4`;
  pool.query(sqlQuery, (err, result) => {
    if (result) {
      res.json(result);
    }
  });
});

app.post("/add_to_cart", async function (req, res) {
  var item = req.body.cartItem;
  var user = req.body.user;
  var uuid = req.body.uuid;
  var sqlQuery = `INSERT INTO Cart(Email, Prod_id, UUID) VALUES(?,?,?)`;

  pool.query(sqlQuery, [user, item, uuid], (err, result) => {
    if (result) {
    }
    if (err) {
    }
  });
});

app.post("/remove_from_cart", async function (req, res) {
  var item = req.body.cartItem;
  var user = req.body.user;
  var uuid = req.body.uuid;

  var sqlQuery = `DELETE FROM Cart WHERE Prod_id=? AND Email=? AND UUID=?`;
  pool.query(sqlQuery, [item, user, uuid], (err, result) => {
    if (err) {
    }
  });
});

app.post("/get_cart_products", async function (req, res) {
  var user = req.body.user;
  var sqlQuery = `select * from products inner join cart on products.prod_id=cart.prod_id where cart.email=?`;
  pool.query(sqlQuery, [user], (err, result) => {
    if (result) {
      result = JSON.stringify(result);
      result = JSON.parse(result);
      res.json(result);
    }
  });
});

app.post("/place_orders", async function (req, res) {
  var user = req.body.user;
  var basket = req.body.basket;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var address = req.body.address;
  var city = req.body.city;
  var state = req.body.state;
  var pinCode = req.body.pinCode;
  var phone = req.body.phone;
  const today = new Date();
  var order_uuid = uuidv4();
  var order_total = 0;
  basket.forEach((each) => {
    order_total = order_total + each.Prod_price;
  });

  var addressQuery = `INSERT INTO address(Email,First_name,Last_name,address,city,state,Pincode,Phone,address_uuid) VALUES(?,?,?,?,?,?,?,?,?)`;

  pool.query(
    addressQuery,
    [
      user,
      firstName,
      lastName,
      address,
      city,
      state,
      pinCode,
      phone,
      order_uuid,
    ],
    (err, result) => {
      if (result) {
      }
      if (err) {
        console.log(err);
      }
    }
  );

  basket.forEach((each, index) => {
    var sqlQuery = `INSERT INTO orders(Order_uuid,Email,Prod_id,Order_date,Order_price) VALUES(?,?,?,?,?)`;

    pool.query(
      sqlQuery,
      [order_uuid, user, each.Prod_id, today, order_total],
      (err, result) => {
        if (result) {
        }
      }
    );
    if (basket.length - 1 === index) {
      var sqlQuery1 = `DELETE FROM CART WHERE email=?`;
      pool.query(sqlQuery1, [user], (err, result1) => {
        if (result1) {
          res.send("Ordered");
        }
      });
    }
  });
});

app.post("/recent_orders", async function (req, res) {
  var user = req.body.user;

  var sqlQuery = `select o.order_id,o.Order_uuid,o.Order_date,o.Order_price,a.*, GROUP_CONCAT(DISTINCT p.Prod_name ORDER BY o.order_date DESC) AS prod_names,GROUP_CONCAT(DISTINCT p.Prod_id ORDER BY o.order_date DESC) AS prod_ids,GROUP_CONCAT(DISTINCT p.Prod_img_url ORDER BY o.order_date DESC) AS prod_imgs,GROUP_CONCAT(DISTINCT p.Prod_price ORDER BY o.order_date DESC) AS prod_prices from address AS a, orders AS o inner join products AS p on 
  o.prod_id=p.prod_id where o.email=? and a.address_uuid=o.Order_uuid group by o.order_uuid order by o.order_date DESC`;
  pool.query(sqlQuery, [user], (err, result) => {
    result = JSON.stringify(result);
    result = JSON.parse(result);

    result.forEach((each, index) => {
      result[index].prod_names = each.prod_names.split(",");
      result[index].prod_ids = each.prod_ids.split(",");
      result[index].prod_imgs = each.prod_imgs.split(",");
      result[index].prod_prices = each.prod_prices.split(",");
      if (result.length - 1 === index) {
        res.json(result);
      } else {
      }
    });
  });
});

app.post("/delete_all_cart", async function (req, res) {
  var user = req.body.user;

  var sqlQuery = `DELETE FROM CART WHERE email=?`;
  pool.query(sqlQuery, [user], (err, result) => {
    if (result) {
      res.send("deleted");
    }
  });
});

app.post("/cancelOrder", async function (req, res) {
  var user = req.body.user;
  var order_uuid = req.body.uuid;
  var sqlQuery = `DELETE FROM Orders WHERE email=? and Order_uuid=?`;
  pool.query(sqlQuery, [user, order_uuid], (err, result) => {
    if (result) {
      res.send("Order Canclled");
    }
  });
});

app.post("/recent_address", async function (req, res) {
  var user = req.body.user;
  var sqlQuery = `SELECT * FROM address where email=? ORDER BY address_id DESC LIMIT 1`;
  pool.query(sqlQuery, [user], (err, result) => {
    if (result) {
      res.json(result);
    }
  });
});

app.post("/get_products_by_category", async function (req, res) {
  var cat_name = req.body.cat_name;
  var sqlQuery = `SELECT * FROM products where Categories_name=?`;
  pool.query(sqlQuery, [cat_name], (err, result) => {
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

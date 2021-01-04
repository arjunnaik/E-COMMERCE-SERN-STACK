import "./App.css";
import Header from "./components/Header/Header";
import Mainpage from "./components/Mainpage/Mainpage";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import ProductsList from "./components/ProductsList/ProductsList";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import Pagination from "react-js-pagination";
import { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import axios from "axios";

function App() {
  const [{ apiKey }, dispatch] = useStateValue();
  const [productJSON, setProductsJSON] = useState([]);

  useEffect(() => {
    setActivePage(1);
    axios.get(`${apiKey}/get_products`).then((res) => {
      console.log(res.data);
      setProductsJSON(res.data);
    });
  }, []);
  const [activePage, setActivePage] = useState();
  const changePagination = (pageNumber) => {
    console.log(pageNumber);
    setActivePage(pageNumber);
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/products/">
            <Header />
            <br></br>
            <Search />
            {/* <ProductsList />
            <ProductsList />
            <ProductsList />
            <ProductsList />
            <ProductsList /> */}
            {productJSON.map((each) => {
              return (
                <ProductsList
                  key={each.Prod_id}
                  prod_id={each.Prod_id}
                  cat_name={each.Categories_name}
                  prod_img={each.Prod_img_url}
                  prod_name={each.Prod_name}
                  prod_price={each.Prod_price}
                  prod_rating={each.Prod_rating}
                  prod_specs={each.Prod_specs}
                />
              );
            })}
            <Pagination
              className="pagination"
              itemClass="page-item"
              linkClass="page-link"
              activePage={activePage}
              itemsCountPerPage={10}
              totalItemsCount={450}
              onChange={changePagination.bind(this)}
              pageRangeDisplayed={15}
            />

            <Footer />
          </Route>

          <Route path="/user_login">
            <Header />
            <Login />
          </Route>

          <Route path="/user_registration">
            <Header />
            <Register />
          </Route>

          <Route path="/">
            <Header />
            <Mainpage latest_prod={productJSON.slice(0, 4)} />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

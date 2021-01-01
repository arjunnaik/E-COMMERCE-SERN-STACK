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

function App() {
  useEffect(() => {
    setActivePage(1);
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
          <Route path="/products">
            <Header />
            <br></br>
            <Search />
            <ProductsList />
            <ProductsList />
            <ProductsList />
            <ProductsList />
            <ProductsList />
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
            <Mainpage />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

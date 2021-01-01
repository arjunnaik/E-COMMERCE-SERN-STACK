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

function App() {
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
              activePage={1}
              itemsCountPerPage={10}
              totalItemsCount={450}
              pageRangeDisplayed={5}
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

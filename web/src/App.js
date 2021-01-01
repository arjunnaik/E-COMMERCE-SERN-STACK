import "./App.css";
import Header from "./components/Header/Header";
import Mainpage from "./components/Mainpage/Mainpage";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
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

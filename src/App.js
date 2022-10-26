import "./App.css";
import stores from "./data/stores";
import items from "./data/items";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Store</h1>
        <p>I hope your hungry :)</p>
      </header>
      <Router>
        <nav>
          <Nav />
        </nav>
        <main>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/order" exact>
            <OrderPage />
          </Route>
        </main>
      </Router>
      <footer>© 2022 Forest Schwartz.</footer>
    </div>
  );
}

export default App;

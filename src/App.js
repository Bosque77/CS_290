import "./App.css";
import stores from "./data/stores";
import items from "./data/items";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Store</h1>
        <p>I hope your hungry :)</p>
      </header>
      <Router>
        <nav>

        </nav>
        <main>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </main>
      </Router>
      <footer>© 2022 Forest Schwartz.</footer>
    </div>
  );
}

export default App;

import React from "react";
import HomeScreen from "./screen/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginScreen from "./screen/LoginScreen";

function App() {
  const user = null
  // {name: ' tek '}
  ;
  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;

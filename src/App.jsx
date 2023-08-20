import React from "react";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <Footer />
      </Router>
    </>
  );
}

export default App;

import React from "react";
// import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/FoodCard/Carousel";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  // const app_data = useSelector((store) => store);

  return (
    <div className="App" onScroll={(e) => console.log("test")}>
      <Navbar />

      <div style={{ marginTop: "200px" }}></div>

      <Carousel />

      <div style={{ height: "200px" }}></div>

      <Footer />
    </div>
  );
}

export default App;

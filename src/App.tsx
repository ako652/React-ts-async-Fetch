import React from "react";
import "./App.css";
import ProductList from "./components/products/ProductList";
import CountryList from "./components/countries/CountryList";

function App() {
  return (
    <div className="App" >
      <ProductList />
      <CountryList />
    </div>
  );
}

export default App;

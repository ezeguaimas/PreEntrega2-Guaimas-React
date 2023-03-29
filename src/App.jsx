import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Header from "./components/Header";
import ErrorPNF from "./components/ErrorPNF";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryid" element={<ItemListContainer />} />
        <Route path="/product/:productid" element={<ItemDetailContainer />} />
        <Route path="*" element={<ErrorPNF />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

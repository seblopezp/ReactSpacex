import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./components/searchBar/searchBar";
import Home from "./Home/home";
import Launch from "./Launch/launch";
const Pages = () => {
  return (
    <BrowserRouter>
    <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch/:id" element={<Launch />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Pages;

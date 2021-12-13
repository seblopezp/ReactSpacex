import React from "react";
import { BrowserRouter, Switch, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Launch from "./launch";
const Webpages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch/:id" element={<Launch />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Webpages;

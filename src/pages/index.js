import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./components/searchBar/searchBar";
import Home from "./Home/home";
import Launch from "./Launch/launch";
import { LatestLaunches } from "./latestLaunches/LatestLaunches";
import { NextLaunch } from "./nextLaunch/NextLaunch";
import { UpcomingLaunch } from "./upcomingLaunch/UpcomingLaunch";
const Pages = () => {
  return (
    <BrowserRouter>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launch/:id" element={<Launch />} />
        <Route path="latest" element={<LatestLaunches />} />
        <Route path="upcoming" element={<UpcomingLaunch />} />
        <Route path="next" element={<NextLaunch />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Pages;

import React from 'react';
import { Routes, Route } from "react-router-dom";


import { Search } from "./pages/Search";
import { GitHubUser } from "./pages/GitHubUser";

const AppRoutes = () => {
  return (
    <Routes>
      
        <Route exact path="/" element={<Search />} />
        <Route path="/about" element={<GitHubUser />} />
   
    </Routes>
  );
};

export default AppRoutes;

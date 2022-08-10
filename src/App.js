import React from "react";
import './App.css';
import { HomePage } from "./pages/homepage/homepage.component"
import { Routes, Route } from 'react-router-dom';


const CarPage = () => (
  <div>
    <h1>CARS Page</h1>
  </div>
);



function App() {
  return (
    <div>
      <Routes >
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/cars" element = {<CarPage />} />
      </Routes>
    </div>
  );
}

export default App;

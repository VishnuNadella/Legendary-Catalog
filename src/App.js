import React from "react";
import './App.css';
import { HomePage } from "./pages/homepage/homepage.component"
import { Routes, Route } from 'react-router-dom';
import ShowPage from "./pages/show/show.component"
import Header from "./components/header/header.component"
import Auth from "./pages/authentication/auth.component"

const CarPage = () => (
  <div>
    <h1>CARS Page</h1>
  </div>
);



function App() {
  return (
    <div>
      <Header />
      <Routes >
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/cars" element = {<CarPage />} />
        <Route path = "/show" element = {<ShowPage />} />
        <Route path = "/signin" element = {<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
import React, { Component } from "react";
import './App.css';
import { HomePage } from "./pages/homepage/homepage.component"
import { Routes, Route } from 'react-router-dom';
import ShowPage from "./pages/show/show.component"
import Header from "./components/header/header.component"
import Auth from "./pages/authentication/auth.component"
import { gAuth } from "./firebase/firebase.utils"




const CarPage = () => (
  <div>
    <h1>CARS Page</h1>
  </div>
);



class App extends Component {
  
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = gAuth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser = { this.state.currentUser } />
        <Routes >
          <Route path = "/" element = {<HomePage />} />
          <Route path = "/cars" element = {<CarPage />} />
          <Route path = "/show" element = {<ShowPage />} />
          <Route path = "/signin" element = {<Auth />} />
        </Routes>
      </div>
    );
  }
}

export default App;
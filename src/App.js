import './App.css';
import React, { Component } from 'react';
import NavSide from './Components/NavSide';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Card from './Components/Card';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavSide />
        <Card />
        <Footer />
      </div>
    );
  }
}

export default App;

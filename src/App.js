import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Home from './pages/home/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
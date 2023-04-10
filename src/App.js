import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Button from 'react-bootstrap/Button';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Container from "react-bootstrap/Container";

import Header from './components/Header';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';



function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        
      </Routes>
    </Router>
     
      
      
    </div>
  );
}

export default App;

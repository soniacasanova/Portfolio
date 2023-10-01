import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Blog from './pages/Blog';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import './styles.scss'; 



function App() {
  return (
    <div className="App">
    <Header />
    <div className="content">
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    </div>
    <Footer />
  </div>
  );
}

export default App;

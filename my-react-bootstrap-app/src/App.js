import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'animate.css';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
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
      <Route path="/bloglist" element={<BlogList />} />
      <Route path="/post/:id" element={<BlogPost />} />
    </Routes>
    </div>
    <Footer />
  </div>
  );
}

export default App;

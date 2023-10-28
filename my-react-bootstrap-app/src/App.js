import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'animate.css';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Nutrific from './pages/Nutrific';
import './App.css';
import './styles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
          <Routes>
            <Route path="/project/:projectId" element={<Nutrific />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/bloglist" element={<BlogList />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="*" element={<Home />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

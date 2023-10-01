import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';
import './styles.scss'; 

function App() {
  return (
    <div className="App">
    <Header />
    <div className="content">
        <Home />
    </div>
    <Footer />
  </div>
  );
}

export default App;

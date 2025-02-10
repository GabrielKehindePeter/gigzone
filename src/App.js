import logo from './logo.svg';
import './App.css';
import Navbar from './Composer/Navbar';
import Home from './Composer/home';
import Footer from './Composer/footer';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
  
    </Routes>
    
    <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;

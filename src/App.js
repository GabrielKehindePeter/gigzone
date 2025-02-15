import logo from './logo.svg';
import './App.css';
import Navbar from './Composer/Navbar';
import Home from './Composer/home';
import Footer from './Composer/footer';
import { Routes, Route } from 'react-router-dom';  // No BrowserRouter here!
import About from './Composer/About';
import HowItWorks from './Composer/HowItWork';
import Jobs from './Composer/Jobs';
import Contact from './Composer/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

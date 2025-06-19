import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Specials from './pages/Specials';
import About from './pages/About';
import Admin from './pages/admin/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
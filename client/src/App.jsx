import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Catagory from './components/Catagory';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RenderItemByid from './components/RenderItemByid';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Catagory />} />
          <Route path="/item/:id" element={<RenderItemByid />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
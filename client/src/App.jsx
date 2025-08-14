import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import Catagories from './pages/Catagories';
import ByidRender from './pages/ByidRender';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Catagories />} />
          <Route path="/item/:id" element={<ByidRender />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
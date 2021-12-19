import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/home/Home';
import Navigation from './pages/Shared/Navigation/Navigation';
import Footer from './pages/Shared/Footer/Footer';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>,
    </div>
  );
}

export default App;

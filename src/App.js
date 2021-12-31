import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/home/Home';
import Navigation from './pages/Shared/Navigation/Navigation';
import Footer from './pages/Shared/Footer/Footer';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart/Cart';
import ShippingPage from './pages/ShippingPage/ShippingPage/ShippingPage';
import AuthProvider from './context/AuthProvider';
// import DashBordHome from "./pages/DashBord/DashBordHome/DashBordHome";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" >
            <Route path="/home" element={<Home />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shippingPage" element={<ShippingPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>,
    </AuthProvider>
  );
}

export default App;

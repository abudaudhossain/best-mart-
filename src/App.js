import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart/Cart';
import ShippingPage from './pages/ShippingPage/ShippingPage/ShippingPage';
import AuthProvider from './context/AuthProvider';
import DashBoard from './pages/DashBoard/DashBoard/DashBoard';
import DashBoardHome from './pages/DashBoard/DashBoardHome/DashBoardHome';
import Users from './pages/DashBoard/Users/Users';
import Orders from './pages/DashBoard/Orders/Orders';
import Category from './pages/DashBoard/Category/Category';
import ManagesProducts from './pages/DashBoard/ManageProducts/ManagesProducts';
import LogIn from './pages/LogIn/Login/LogIn';
import ClientView from './pages/ClientView/ClientView';





function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<ClientView />} >
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shippingPage" element={<ShippingPage />} />
            <Route path="/login" element={<LogIn />} />
          </Route>

          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="*" element={<DashBoardHome />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
            <Route path="category" element={<Category />} />
            <Route path="managesProducts" element={<ManagesProducts />} />
            <Route path="users" element={<Users />} />
            {/* <Route path="*" element={<Dashboard />} /> */}

          </Route>


        </Routes>

      </BrowserRouter>,
    </AuthProvider>
  );
}

export default App;

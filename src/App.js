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
import ClientView from './pages/ClientView/ClientView';
import CategoryProducts from './pages/CategoryProducts/CategoryProducts';
import AllProducts from './pages/AllProducts/AllProducts';
import Contact from './pages/Contact/Contact';
import LogInPage from './pages/LogIn/LogInPage/LogInPage';
import Register from './pages/LogIn/Register/Register';
import LogIn from './pages/LogIn/LogIn/LogIn';
import MyOrders from './pages/MyOrders/MyOrders/MyOrders';
import PrivateRoute from './PrivateRoute/PrivateRoute';





function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<ClientView />} >
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path="/login" element={<LogInPage />} >
              <Route path="" element={<LogIn />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="/categoryProducts/:category" element={<CategoryProducts />} />
            <Route path="/products" element={<AllProducts />} />

            <Route path="/" element={<PrivateRoute />} >
              <Route path="/cart" element={<Cart />} />
              <Route path="/shippingPage" element={<ShippingPage />} />
              <Route path="/myOrder" element={<MyOrders />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Route>
          <Route path="/" element={<PrivateRoute />} >
            <Route path="/dashboard" element={<DashBoard />}>
              <Route path="" element={<DashBoardHome />} />
              <Route path="orders" element={<Orders />} />
              <Route path="users" element={<Users />} />
              <Route path="category" element={<Category />} />
              <Route path="managesProducts" element={<ManagesProducts />} />
              <Route path="users" element={<Users />} />
              <Route path="*" element={<DashBoardHome />} />

            </Route>
          </Route>



        </Routes>

      </BrowserRouter>,
    </AuthProvider>
  );
}

export default App;

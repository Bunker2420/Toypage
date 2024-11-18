import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import WebLayout from './layout/WebLayout';
import AdminLayout from './layout/AdminLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminProducts from './pages/Admin/AdminProducts';
import AdminOrders from './pages/Admin/AdminOrders';
import AdminUsers from './pages/Admin/AdminUsers';
import AdminSettings from './pages/Admin/AdminSettings';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Toys0to3 from './pages/Toys0to3';
import Toys4to8 from './pages/Toys4to8';
import Toys9to12 from './pages/Toys9to12';

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const role = localStorage.getItem('role');

  return (
    <BrowserRouter>
      <Routes>
        {/* Login and Signup Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route element={<WebLayout />}>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Home, Products, and Contact Pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />

          {/* Age-Based Toy Routes */}
          <Route path="/toys/0-3-years" element={<Toys0to3 />} />
          <Route path="/toys/4-8-years" element={<Toys4to8 />} />
          <Route path="/toys/9-12-years" element={<Toys9to12 />} />
        </Route>

        {/* Admin Routes */}
        <Route element={isLoggedIn && role === 'ADMIN' ? <AdminLayout /> : <Navigate to="/login" />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

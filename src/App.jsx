import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './pages/Products'
import WebLayout from './layout/WebLayout'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import TwClasses from './pages/TwClasses'
import AdminProducts from './pages/Admin/AdminProducts'
import AdminOrders from './pages/Admin/AdminOrders'
import AdminUsers from './pages/Admin/AdminUsers'
import AdminSettings from './pages/Admin/AdminSettings'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Login and Signup Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />

                    {/* Protected Routes */}
                    <Route element={<WebLayout />}>
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/temp" element={<TwClasses />} />
                    </Route>

                    {/* Admin Routes */}
                    <Route element={<AdminLayout />}>
                        <Route path="/admin/dashboard" element={<AdminDashboard />} />
                        <Route path="/admin/products" element={<AdminProducts />} />
                        <Route path="/admin/orders" element={<AdminOrders />} />
                        <Route path="/admin/users" element={<AdminUsers />} />
                        <Route path="/admin/settings" element={<AdminSettings />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
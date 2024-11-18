import React, { useEffect, useState } from 'react';
import AdminDashboardHomeCards from '../../components/Admin/AdminDashboardHomeCards';
import { getOrdersCount, getProductsCount, getUsersCount } from '../../api/api';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const AdminDashboard = () => {
  const [users, setUsers] = useState(0);
  const [products, setProducts] = useState(0);
  const [orders, setOrders] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const userresponse = await getUsersCount();
      if (userresponse.status === 200) {
        setUsers(userresponse.data.count);
      }
      const productresponse = await getProductsCount();
      if (productresponse.status === 200) {
        setProducts(productresponse.data.count);
      }
      const orderresponse = await getOrdersCount();
      if (orderresponse.status === 200) {
        setOrders(orderresponse.data.count);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='w-screen h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-purple-200 via-indigo-300 to-pink-500'>
        <Loader2 className='text-white h-14 w-14 animate-spin' />
        <p className="text-white mt-4 font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-100'>
      <div className="w-full max-w-7xl p-8 space-y-8">
        <h1 className="text-3xl font-semibold text-gray-800 text-center animate__animated animate__fadeIn">
          Welcome to Admin Dashboard
        </h1>

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-indigo-200">
            <h2 className="text-xl font-bold text-gray-700 mb-2">Products</h2>
            <p className="text-4xl font-semibold text-indigo-600">{products}</p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-green-200">
            <h2 className="text-xl font-bold text-gray-700 mb-2">Orders</h2>
            <p className="text-4xl font-semibold text-green-600">{orders}</p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-yellow-200">
            <h2 className="text-xl font-bold text-gray-700 mb-2">Users</h2>
            <p className="text-4xl font-semibold text-yellow-600">{users}</p>
          </div>
        </div>

        {/* Cards with smooth hover animations */}
        <div className="w-full flex justify-center items-center mt-8">
          <AdminDashboardHomeCards products={products} orders={orders} users={users} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

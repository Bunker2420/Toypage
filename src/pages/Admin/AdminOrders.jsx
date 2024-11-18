import React, { useEffect, useState } from 'react';
import AdminPageHeader from '../../components/Admin/AdminPageHeader';
import { Loader2, Pencil, Trash, TriangleAlert } from 'lucide-react';
import { toast } from 'sonner';

const AdminOrders = () => {
    const [orders, setOrders] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await getOrders();
            if (res.status === 200) {
                setOrders(res.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await deleteOrder(id);
            if (response.status === 200) {
                toast.success('Order Deleted');
                fetchData();
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className='w-screen h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 via-purple-300 to-pink-400'>
                <Loader2 className='text-white h-14 w-14 animate-spin' />
            </div>
        );
    }

    if (!orders || orders.length === 0) {
        return (
            <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
                <TriangleAlert className='text-orange-400 h-12 w-12' />
                <p className="text-lg text-gray-700">No Orders Available!</p>
            </div>
        );
    }

    return (
        <div className='w-full flex flex-col justify-start items-start bg-gradient-to-br from-gray-100 via-indigo-200 to-pink-100'>
            <div className='w-full flex flex-row justify-between items-center my-4 shadow-md rounded-md p-4 bg-white'>
                <AdminPageHeader title='Orders' />
            </div>

            <table className='w-full border-collapse border shadow-lg rounded-md bg-white'>
                <thead className='text-lg font-semibold text-purple-500 bg-gradient-to-br from-purple-400 to-blue-500'>
                    <tr>
                        <th className='p-6'>UID</th>
                        <th className='p-6'>PID</th>
                        <th className='p-6'>Phone</th>
                        <th className='p-6'>Total</th>
                        <th className='p-6'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index} className='hover:bg-gray-100 transition-all duration-300'>
                            <td className='p-4'>{order.uid}</td>
                            <td className='p-4'>{order.pid}</td>
                            <td className='p-4'>{order.phone}</td>
                            <td className='p-4'>{order.total}</td>
                            <td className='p-4 flex gap-4'>
                                <button 
                                    className='h-10 w-10 border-red-500 border-2 p-2 rounded-md text-red-500 shadow-md hover:bg-red-500 hover:text-white hover:scale-105 hover:shadow-red-500 transition-all duration-300'
                                    onClick={() => { handleDelete(order._id) }}>
                                    <Trash className='h-6 w-6' />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminOrders;

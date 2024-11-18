import React, { useEffect, useRef, useState } from 'react';
import AdminPageHeader from '../../components/Admin/AdminPageHeader';
import { Loader2, Pencil, Plus, Trash, TriangleAlert, X } from 'lucide-react';
import { getProducts, addProduct, deleteProduct, editProduct } from '../../api/api';
import { toast } from 'sonner';

const AdminProducts = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const titleRef = useRef('');
  const imgRef = useRef('');
  const priceRef = useRef(0);

  const fetchData = async () => {
    try {
      const res = await getProducts();
      if (res.status === 200) {
        setProducts(res.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const product = {
      title: titleRef.current.value,
      img: imgRef.current.value,
      price: priceRef.current.value,
    };
    try {
      const response = await addProduct(product);
      if (response.status === 200) {
        toast.success('Product Added');
        setShowAdd(false);
        fetchData();
      }
    } catch (error) {
      toast.error("Error while Adding");
      console.error(error);
    }
  };

  const editHelper = (product) => {
    setCurrentProduct(product);
    setShowEdit(true);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const product = {
      title: titleRef.current.value,
      img: imgRef.current.value,
      price: priceRef.current.value,
    };
    try {
      const response = await editProduct(product, currentProduct._id);
      if (response.status === 200) {
        setShowEdit(false);
        fetchData();
        toast.info("Product Updated !");
      }
    } catch (error) {
      toast.error("Error while Updating");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteProduct(id);
      if (response.status === 200) {
        toast.success('Product Deleted');
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

  if (!products || products.length === 0) {
    return (
      <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
        <TriangleAlert className='text-orange-400 h-12 w-12' />
        <p className="text-lg text-gray-700">No Products Available!</p>
      </div>
    );
  }

  return (
    <div className='w-full flex flex-col justify-start items-start bg-gradient-to-br from-gray-100 via-indigo-200 to-pink-100'>
      <div className='w-full flex flex-row justify-between items-center my-4 shadow-md rounded-md p-4 bg-white'>
        <div className="flex flex-row items-center justify-start gap-2">
          <AdminPageHeader title='Products' />
        </div>
        <button 
          className='w-14 h-14 font-bold flex justify-center items-center border-2 border-green-500 rounded-full text-green-500 shadow-lg hover:text-white hover:bg-green-500 hover:scale-110 hover:rotate-45 transition-all duration-300'
          onClick={() => setShowAdd(!showAdd)}>
          <Plus className='w-10 h-10' />
        </button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4'>
        {products.map((product, index) => (
          <div key={index} className='transition-all duration-300 hover:scale-105 hover:bg-gray-200 shadow-lg rounded-lg p-4 bg-white'>
            <div className="flex justify-center items-center mb-4">
              <img src={product.img} alt={product.title} className='w-32 h-32 object-cover rounded-full shadow-md' />
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-gray-700">{product.title}</h3>
              <p className="text-lg text-green-500">{`$${product.price}`}</p>
              <div className="flex gap-4 mt-4">
                <button 
                  className='text-blue-500 hover:text-white hover:bg-blue-500 transition-all duration-300 p-2 rounded-md shadow-sm'
                  onClick={() => editHelper(product)}>
                  <Pencil />
                </button>
                <button 
                  className='text-red-500 hover:text-white hover:bg-red-500 transition-all duration-300 p-2 rounded-md shadow-sm'
                  onClick={() => handleDelete(product._id)}>
                  <Trash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showAdd && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40">
          <div className='h-[55%] w-1/3 flex flex-col justify-center items-center bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 shadow-2xl rounded-md'>
            <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
              <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                <h1 className='w-1/2 text-left text-xl my-6 font-bold text-white transition-all duration-300 transform hover:text-gray-200 hover:scale-105'>
                  Add Product
                </h1>
                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => setShowAdd(!showAdd)}>
                  <X className="h-8 w-8 border-2 p-1 border-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110" />
                </div>
              </div>
              <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleAdd}>
                <input 
                  ref={titleRef} 
                  type="text" 
                  placeholder='Title' 
                  className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-teal-400 rounded-sm transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 hover:border-teal-500'
                  required 
                  autoFocus 
                />
                <input 
                  ref={imgRef} 
                  type="text" 
                  placeholder='Image URL' 
                  className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-teal-400 rounded-sm transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 hover:border-teal-500'
                  required 
                />
                <input 
                  ref={priceRef} 
                  type="number" 
                  placeholder='Price' 
                  className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-teal-400 rounded-sm transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 hover:border-teal-500'
                  required 
                />
                <button 
                  type="submit" 
                  className="w-full h-[3rem] bg-teal-500 text-white rounded-sm outline-none shadow-lg hover:shadow-teal-400 hover:scale-105 hover:bg-teal-600 transition-all duration-300 transform">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {showEdit && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40">
          <div className='h-[55%] w-1/3 flex flex-col justify-center items-center bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 shadow-2xl rounded-md'>
            <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
              <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                <h1 className='w-1/2 text-left text-xl my-6 font-bold text-white transition-all duration-300 transform hover:text-gray-200 hover:scale-105'>
                  Edit Product
                </h1>
                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => setShowEdit(!showEdit)}>
                  <X className="h-8 w-8 border-2 p-1 border-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110" />
                </div>
              </div>
              <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleEdit}>
                <input 
                  ref={titleRef} 
                  type="text" 
                  placeholder='Title' 
                  defaultValue={currentProduct?.title} 
                  className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-teal-400 rounded-sm transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 hover:border-teal-500'
                  required 
                />
                <input 
                  ref={imgRef} 
                  type="text" 
                  placeholder='Image URL' 
                  defaultValue={currentProduct?.img} 
                  className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-teal-400 rounded-sm transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 hover:border-teal-500'
                  required 
                />
                <input 
                  ref={priceRef} 
                  type="number" 
                  placeholder='Price' 
                  defaultValue={currentProduct?.price} 
                  className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-teal-400 rounded-sm transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 hover:border-teal-500'
                  required 
                />
                <button 
                  type="submit" 
                  className="w-full h-[3rem] bg-teal-500 text-white rounded-sm outline-none shadow-lg hover:shadow-teal-400 hover:scale-105 hover:bg-teal-600 transition-all duration-300 transform">
                  Edit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;

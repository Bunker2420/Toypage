import React, { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import { Loader2, TriangleAlert, Search } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pincode: "",
    paymentMethod: "",
    mobileNumber: "",
    product: null,
  });

  async function fetchData() {
    try {
      const res = await getProducts();
      if (res.status === 200) {
        setProducts(res.data);
        setFilteredProducts(res.data); // Initialize filtered products
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  const handleBuyNow = (product) => {
    setFormData({
      ...formData,
      product,
    });
    setShowAdd(true); // Show the form modal
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.address && formData.pincode && formData.paymentMethod && formData.mobileNumber) {
      setShowAdd(false); // Close the form modal
      setShowConfirmation(true); // Show the confirmation message
    } else {
      alert("Please provide all the required details.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (loading) {
    return (
      <div className="w-screen h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400">
        <Loader2 className="text-purple-600 h-14 w-14 animate-spin" />
        <p className="text-purple-700 mt-4 font-semibold">Loading Products...</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="w-screen h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-300">
        <TriangleAlert className="text-orange-400 h-12 w-12" />
        <p className="text-gray-700 text-lg mt-2 font-semibold">
          No Products Available!
        </p>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 flex flex-col items-center py-10 px-6">
      {/* Search Input */}
      <div className="w-full max-w-3xl mb-8">
        <div className="relative flex items-center">
          <Search className="absolute left-4 text-purple-600 w-6 h-6 animate-pulse" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search products..."
            className="w-full py-3 pl-12 pr-4 rounded-full shadow-md outline-none bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition-all duration-300"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-full flex justify-center items-start flex-wrap gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={product._id}
              className={`w-72 h-[28rem] ${
                searchTerm ? "w-60 h-[24rem]" : ""
              } bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-between hover:scale-105 hover:shadow-2xl transform transition-all duration-300`}
            >
              {/* Animated Product Image */}
              <div className="w-full h-40 overflow-hidden rounded-lg mb-4 group">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transform transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="w-full flex flex-col items-start">
                <h1 className="text-lg font-bold text-gray-800 mb-2">
                  {product.title}
                </h1>
                <p className="text-gray-600 text-sm mb-4 truncate">
                  {product.description || "No description available"}
                </p>
                <p className="text-purple-500 font-bold text-lg">
                  ${product.price}
                </p>
              </div>

              {/* Buy Now Button */}
              <button
                className="w-full mt-4 py-2 bg-purple-600 text-white text-lg font-semibold rounded-lg hover:bg-purple-700 active:scale-95 transition-transform duration-300 shadow-md hover:shadow-lg"
                onClick={() => handleBuyNow(product)}
              >
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <div className="text-gray-700 font-semibold text-lg">
            No products match your search!
          </div>
        )}
      </div>

      {/* Modal for name, address, pincode, payment method, and mobile number */}
      {showAdd && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40">
          <div className="w-1/3 bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Enter your details</h2>
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              {/* Address Field */}
              <div className="mb-4">
                <label className="block text-gray-700">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              {/* Pincode Field */}
              <div className="mb-4">
                <label className="block text-gray-700">Pincode:</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              {/* Payment Method Field */}
              <div className="mb-4">
                <label className="block text-gray-700">Payment Method:</label>
                <input
                  type="text"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              {/* Mobile Number Field */}
              <div className="mb-4">
                <label className="block text-gray-700">Mobile Number:</label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowAdd(false)}
                  className="bg-red-500 text-white py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Confirmation message */}
      {showConfirmation && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40">
          <div className="w-1/3 bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold">Thank you for your order!</h2>
            <p className="text-gray-700 mt-4">
              We will process your order soon. The details have been sent to your mobile number.
            </p>
            <button
              onClick={() => setShowConfirmation(false)}
              className="bg-green-500 text-white py-2 px-4 rounded-md mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

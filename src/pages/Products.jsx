import React, { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import { Loader2, TriangleAlert, Search, Heart, Share2 } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [showAdd, setShowAdd] = useState(false); // Show order form
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
    mobile: "",
    paymentOption: "",
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false); // Track order submission
  const [orderMessage, setOrderMessage] = useState(""); // Message after order submission
  const [isLikeHovered, setIsLikeHovered] = useState(false); // Track hover state for the like button animation

  // Fetch product data
  async function fetchData() {
    try {
      const res = await getProducts();
      if (res.status === 200) {
        setProducts(res.data);
        setFilteredProducts(res.data);
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

  // Handle search input
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  // Handle like button click
  const handleLike = (e) => {
    const icon = e.target.closest("button");
    icon.classList.add("animate-like"); // Add animation class on click
    setTimeout(() => icon.classList.remove("animate-like"), 500); // Remove animation class after 500ms
  };

  // Handle mouse enter/leave for like button hover animation
  const handleLikeHover = (state) => {
    setIsLikeHovered(state);
  };

  // Handle "Buy Now" button click to show order form
  const handleBuyNow = (product) => {
    setIsModalOpen(true); // Open modal to enter details
    setShowAdd(true); // Show the order form
    setOrderSubmitted(false); // Reset order submission status
    setOrderMessage(""); // Reset order message
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({
      ...orderDetails,
      [name]: value,
    });
  };

  // Handle payment option change (redirect on PhonePe or GPay selection)
  const handlePaymentOptionChange = (e) => {
    const selectedOption = e.target.value;
    setOrderDetails({
      ...orderDetails,
      paymentOption: selectedOption,
    });

    if (selectedOption === "PhonePe") {
      window.location.href = `https://www.phonepe.com/pay?number=7416842005`; 
    } else if (selectedOption === "GPay") {
      window.location.href = `https://pay.google.com/payments/u/0/about?number=7416842005`; 
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderDetails.paymentOption === "COD") {
      setOrderSubmitted(true); // Set orderSubmitted to true to show the confirmation message
      setOrderMessage("We have received your order, we will dispatch soon."); // Set the confirmation message
      setShowAdd(false); // Hide the form after submission
      setTimeout(() => {
        setIsModalOpen(false); // Close the modal after a short delay to allow the message to be seen
      }, 2000); // Adjust the time delay (2 seconds in this case)
    } else {
      // Handle other payment methods (PhonePe, GPay) as redirects already happen
    }
  };

  // Handle sharing logic using Web Share API
  const handleShare = (product) => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description || "Check out this product!",
        url: window.location.href,
      })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      const shareMessage = `Check out this product: ${product.title}\n${product.description}\n${window.location.href}`;

      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
      const instagramUrl = `https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`;

      window.open(whatsappUrl, "_blank");
      window.open(facebookUrl, "_blank");
      window.open(instagramUrl, "_blank");
    }
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
        <p className="text-gray-700 text-lg mt-2 font-semibold">No Products Available!</p>
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
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="w-72 h-[28rem] bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-between transform hover:scale-105 hover:shadow-2xl hover:-rotate-1 transition-transform duration-300 group"
            >
              {/* Product Image */}
              <div className="w-full h-40 overflow-hidden rounded-lg mb-4 group">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transform transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="w-full flex flex-col items-start">
                <h1 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {product.title}
                </h1>
                <p className="text-gray-600 text-sm mb-4 truncate group-hover:text-gray-800 transition-colors duration-300">
                  {product.description || "No description available"}
                </p>
                <div className="flex items-center justify-between w-full mb-4">
                  <p className="text-purple-500 font-bold text-lg">
                    ₹{product.price}
                  </p>
                  {/* Like and Share Buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      className={`like-button text-red-500 hover:text-red-600 relative ${isLikeHovered ? 'animate-like-hover' : ''}`}
                      onClick={handleLike}
                      onMouseEnter={() => handleLikeHover(true)}
                      onMouseLeave={() => handleLikeHover(false)}
                    >
                      <Heart className="w-6 h-6" />
                    </button>
                    <button
                      className="text-blue-500 hover:text-blue-600"
                      onClick={() => handleShare(product)} // Share product when clicked
                    >
                      <Share2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleBuyNow(product)} // Open modal for order form
                  className="py-2 px-6 bg-purple-600 text-white font-semibold rounded-md w-full mt-auto"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No products found matching your search.</p>
        )}
      </div>

      {/* Modal for Order Form */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            {showAdd && (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={orderDetails.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full py-2 px-4 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="address"
                    value={orderDetails.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className="w-full py-2 px-4 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    name="mobile"
                    value={orderDetails.mobile}
                    onChange={handleInputChange}
                    placeholder="Mobile"
                    className="w-full py-2 px-4 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <select
                    name="paymentOption"
                    value={orderDetails.paymentOption}
                    onChange={handlePaymentOptionChange}
                    className="w-full py-2 px-4 border rounded-md"
                    required
                  >
                    <option value="">Select Payment Option</option>
                    <option value="COD">Cash on Delivery</option>
                    <option value="PhonePe">PhonePe</option>
                    <option value="GPay">GPay</option>
                  </select>
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    type="submit"
                    className="py-2 px-6 bg-purple-600 text-white font-semibold rounded-md"
                  >
                    Place Order
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="py-2 px-6 bg-gray-400 text-white font-semibold rounded-md"
                  >
                    Close
                  </button>
                </div>
              </form>
            )}

            {/* Order confirmation message */}
            {orderSubmitted && !showAdd && (
              <div className="text-lg text-green-500 font-semibold text-center">
                {orderMessage}
                <button
                  className="text-red-600 font-semibold ml-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

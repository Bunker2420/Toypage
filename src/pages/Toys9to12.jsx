import React, { useState } from "react";
import { Heart, Share } from "lucide-react";

const Toys9to12 = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pincode: "",
    paymentMethod: "",
    mobileNumber: "",
    toy: null,
  });
  const [liked, setLiked] = useState(false); // Track whether the like button was clicked
  const [animationClass, setAnimationClass] = useState(""); // Track animation state

  const toys = [
    { name: "Board Game", price: "1500", image: "/a1.jpg" },
    { name: "Smartivity Microscope 100x Zoom Toy", price: "900", image: "/z34.jpg" },
    { name: "Smartivity Pinball Machine", price: "2000", image: "/z35.jpg" },
    { name: "Smartivity Telescope Toy", price: "200", image: "/z36.jpg" },
    { name: "Smartivity Robotic Mechanical Hand Toy", price: "500", image: "/z37.jpg" },
    { name: "Funskool Games, Othello, Strategy Game, 2 players", price: "500", image: "/z38.jpg" },
    { name: "MONOPOLY Board Game (Multicolor) for Families and Kids", price: "2000", image: "/z39.jpg" },
    { name: "Hasbro Gaming Mastermind The Classic Code Cracking Game", price: "5000", image: "/z40.jpg" },
    { name: "LEGO Speed Champions Mercedes", price: "5000", image: "/z41.jpg" },
    { name: "LEGO Technic Bugatti Bolide", price: "1000", image: "/a7.webp" },
    { name: "LEGO Speed Champions 2", price: "1000", image: "/z43.jpg" },
    { name: "TRANSFORMERS (Bumblebee)", price: "500", image: "/z44.jpg" },
    { name: "Avishkaar Robotics Starter Kit", price: "200", image: "/z45.jpg" },
    { name: "Black Royal Original Rock Crawler", price: "500", image: "/z46.jpg" },
    { name: "LEGO Creator 3in1 Fish Tank", price: "500", image: "/z47.jpg" },
    
    // Add more toys here...
  ];

  const handleBuyNow = (toy) => {
    setFormData({ ...formData, toy });
    setShowAdd(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.address &&
      formData.pincode &&
      formData.paymentMethod &&
      formData.mobileNumber
    ) {
      setShowAdd(false);

      // Redirect to payment URL based on the selected method
      const upiId = "7416842005@ybl"; // UPI ID for payments
      const amount = formData.toy?.price || "0";

      if (formData.paymentMethod === "phonepe") {
        window.location.href = `phonepe://pay?pa=${upiId}&pn=Toy%20Store&mc=0000&tid=1234567890&tr=${Date.now()}&tn=Payment%20for%20${formData.toy?.name}&am=${amount}&cu=INR`;
      } else if (formData.paymentMethod === "gpay") {
        window.location.href = `upi://pay?pa=${upiId}&pn=Toy%20Store&mc=0000&tid=1234567890&tr=${Date.now()}&tn=Payment%20for%20${formData.toy?.name}&am=${amount}&cu=INR`;
      } else {
        setShowConfirmation(true);
      }
    } else {
      alert("Please provide all the required details.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleShare = (toy) => {
    if (navigator.share) {
      navigator
        .share({
          title: toy.name,
          text: `Check out this toy! Price: ₹${toy.price}`,
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      const whatsappURL = `https://wa.me/?text=Check out this toy: ${toy.name}. Price: ₹${toy.price}. ${window.location.href}`;
      window.open(whatsappURL, "_blank");
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    setAnimationClass("scale-110");
    setTimeout(() => {
      setAnimationClass("");
    }, 300);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleCloseModal = () => {
    setShowAdd(false);
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 rounded-lg">
      <h1 className="text-3xl font-semibold mb-6 text-white drop-shadow-lg">
        Toys for 9 to 12 Years
      </h1>
      <p className="text-lg mb-4 text-white">
        Toys for older children in this age range.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {toys.map((toy, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
            style={{ height: "480px", width: "100%" }}
          >
            <img
              src={toy.image}
              alt={toy.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex-grow flex flex-col justify-between">
              <h2 className="text-lg font-semibold text-gray-800">{toy.name}</h2>
              <div className="flex items-center justify-between mb-4">
                <p className="text-xl text-purple-600 font-bold">
                  <span className="text-xl">₹</span> {toy.price}
                </p>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleLike}
                    className={`text-red-500 hover:text-red-700 transition-all duration-300 ${animationClass}`}
                  >
                    <Heart className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => handleShare(toy)}
                    className="text-purple-500 hover:text-purple-700 transition-all duration-300"
                  >
                    <Share className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleBuyNow(toy)}
                className="w-full py-2 bg-gradient-to-br from-purple-500 to-purple-700 text-white text-lg font-semibold rounded-lg hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-800 active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Details Modal */}
      {showAdd && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40">
          <div className="w-1/3 bg-white rounded-lg p-6 shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">Enter your details</h2>
            <form onSubmit={handleSubmit}>
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
              <div className="mb-4">
                <label className="block text-gray-700">Payment Method:</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Payment Method</option>
                  <option value="cod">Cash on Delivery</option>
                  <option value="phonepe">PhonePe</option>
                  <option value="gpay">GPay</option>
                </select>
              </div>
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
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Order Confirmation Modal */}
      {showConfirmation && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Order Confirmed</h2>
            <p>Thank you for your order! We will dispatch soon.</p>
            <button
              onClick={handleCloseConfirmation}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toys9to12;

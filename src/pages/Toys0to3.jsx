import React, { useState } from "react";

const Toys0to3 = () => {
  const [showAdd, setShowAdd] = useState(false); // Show the form
  const [showConfirmation, setShowConfirmation] = useState(false); // Show the confirmation message
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pincode: "",
    paymentMethod: "",
    mobileNumber: "",
    toy: null,
  });

  const toys = [
    { name: "Soft Teddy Bear", price: "5000", image: "a8.webp" },
    { name: "Stacking Rings", price: "2000", image: "a9.webp" },
    { name: "Baby Rattle", price: "3000", image: "hello.webp" },
    { name: "Toy Car", price: "1500", image: "a10.jpg" },
    { name: "LCD Writing Pad", price: "300", image: "z2.jpg" },
    { name: "Flash Cards", price: "450", image: "z3.jpg" },
    { name: "Einstein Box", price: "800", image: "z4.jpg" },
    { name: "Nizomi Pup Buddies", price: "399", image: "z5.jpg" },
    { name: "Funskool Games Memory Alphabets", price: "545", image: "z6.jpg" },
    { name: "Funskool - Play & Learn-Vehicles", price: "564", image: "z7.jpg" },
    { name: "Funskool - Play & Learn-Animals", price: "445", image: "z8.jpg" },
    { name: "Funskool Keymon 4-in-1", price: "448", image: "z9.jpg" },
    { name: "Lego Chima Stinger Duel", price: "454", image: "z10.jpg" },
    { name: "Lego Chima Bat Strike", price: "646", image: "z11.jpg" },
    { name: "Funskool Keymon Chase Game", price: "454", image: "a12.jpg" },
    { name: "First's Block Shapes and Sorter", price: "500", image: "z13.jpg" },
    { name: "TOYKRAFTT 2 Piece Puzzles", price: "500", image: "z14.jpg" },
    { name: "TOYKRAFT 2 Piece Animal Puzzles", price: "600", image: "z15.jpg" },
    { name: "Funskool Giggles - Chain Links", price: "200", image: "z16.jpg" },
    { name: "Skillofun Take Apart Puzzle Hen Chick", price: "400", image: "z17.jpg" },
    { name: "Funskool Giggles", price: "300", image: "z18.jpg" },
  ];

  const handleBuyNow = (toy) => {
    setFormData({ ...formData, toy });
    setShowAdd(true); // Show the form to enter details
  };

  const handleShare = (toy) => {
    const shareText = `Check out this toy: ${toy.name} for ₹${toy.price}!`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      navigator
        .share({
          title: toy.name,
          text: shareText,
          url: shareUrl,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
        shareText + " " + shareUrl
      )}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.address &&
      formData.pincode &&
      formData.mobileNumber &&
      (formData.paymentMethod === "COD" || formData.paymentMethod)
    ) {
      setShowAdd(false); // Hide the form
      setShowConfirmation(true); // Show the confirmation
    } else {
      alert("Please provide all the required details.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentOptionChange = (e) => {
    const selectedOption = e.target.value;
    setFormData({ ...formData, paymentMethod: selectedOption });

    if (selectedOption === "PhonePe") {
      window.location.href = `https://www.phonepe.com/pay?number=7416842005`;
    } else if (selectedOption === "GPay") {
      window.location.href = `https://pay.google.com/payments/u/0/about?number=7416842005`;
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 rounded-lg">
      <h1 className="text-3xl font-semibold mb-6 text-white drop-shadow-lg">
        Toys for 0 to 3 Years
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {toys.map((toy, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-64 h-96 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={`/${toy.image}`}
              alt={toy.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{toy.name}</h2>
              <div className="flex items-center justify-between mb-4">
                <p className="text-xl text-purple-600 font-bold">₹{toy.price}</p>
                <div className="flex gap-4">
                  <button
                    className="text-red-500 hover:text-red-600 hover:scale-110 transform transition-all"
                    onClick={() => alert(`Liked: ${toy.name}`)}
                  >
                    ❤
                  </button>
                  <button
                    className="text-blue-500 hover:text-blue-600 hover:scale-110 transform transition-all"
                    onClick={() => handleShare(toy)}
                  >
                    🔗
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

      {/* Order Confirmation Message */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
            <h2 className="text-2xl font-semibold text-gray-800">
              Order Submitted Successfully!
            </h2>
            <p className="mt-4 text-gray-600">
              We’ve received your order! We will dispatch soon.
            </p>
            <button
              onClick={() => setShowConfirmation(false)}
              className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Order Form */}
      {showAdd && !showConfirmation && (
        <div className="fixed inset-0 bg-opacity-50 bg-gray-900 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-gray-800">Complete Your Order</h2>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Payment Method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handlePaymentOptionChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  <option value="">Select Payment Option</option>
                  <option value="COD">Cash on Delivery</option>
                  <option value="PhonePe">PhonePe</option>
                  <option value="GPay">Google Pay</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-br from-purple-500 to-purple-700 text-white text-lg font-semibold rounded-lg hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-800 active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Submit
              </button>
              <button
                  type="button"
                  onClick={() => setShowAdd(false)}
                  className="w-full py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                >
                  Close
                </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toys0to3;

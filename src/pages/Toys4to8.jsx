import React, { useState } from "react";

const Toys4to8 = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false); // State for confirmation message
  const [formData, setFormData] = useState({
    name: "", // Name field
    address: "",
    pincode: "",
    paymentMethod: "",
    mobileNumber: "",
    toy: null,
  });

  const toys = [
    {
      name: "Lego Building Set",
      price: "1500",
      image: "lego-building-set.jpg",
    },
    {
      name: "Action Figure",
      price: "1200",
      image: "action-figure.jpg",
    },
    {
      name: "Toy Car",
      price: "800",
      image: "image.webp",
    },
    {
      name:"Funskool Games, Snakes & Ladders",
      price:"900",
      image:"z19.jpg",
    },
    {
      name:"Funskool Handycrafts",
      price:"700",
      image:"z20.jpg",
    },
    {
      name:"Fisher Price Magnetic Puzzle",
      price:"900",
      image:"z21.jpg",
    },
    {
      name:"Little Genius Wood Alphabet Turtle Puzzle",
      price:"100",
      image:"z22.jpg",
    },
    {
      name:"Little Genius My Face Puzzle",
      price:"600",
      image:"z23.jpg",
    },
    {
      name:"Little Genius Number Butterfly Puzzle Strip",
      price:"900",
      image:"z24.jpg",
    },
    {
      name:"University Sort It Out",
      price:"100",
      image:"z25.jpg",
    },
    {
      name:"Ravensburger 121250 72 pieces",
      price:"1000",
      image:"z26.jpg",
    },
    {
      name:"Sunta ABC Puzzle Fun in Circle",
      price:"2000",
      image:"z27.jpg",
    },
    {
      name:"Skillofun Wooden Theme Puzzle",
      price:"950",
      image:"z28.jpg",
    },
    {
      name:"Skillofun Wooden Theme Puzzle Standard Teddy Bear ",
      price:"200",
      image:"z29.jpg"
    },
    {
      name:"Melissa & Doug 730 Pets Sound Puzzle",
      price:"500",
      image:"z30.jpg",
    },
    {
      name:"Funskool-Handycrafts Pot Mania",
      price:"4000",
      image:"z31.jpg",
    },
    {
      name:"Skillofun Wooden Theme Puzzle Standard Ship Knobs",
      price:"300",
      image:"z32.jpg",
    },
    {
      name:"Novo Baby Colorful Wooden Puzzle Set Featuring",
      price:"800",
      image:"z33.jpg",
    }

  ];

  // Handle "Buy Now" button click
  const handleBuyNow = (toy) => {
    setFormData({
      ...formData,
      toy,
    });
    setShowAdd(true); // Show the form modal
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.address &&
      formData.pincode &&
      formData.paymentMethod &&
      formData.mobileNumber
    ) {
      setShowAdd(false); // Close the form modal
      setShowConfirmation(true); // Show the confirmation message
    } else {
      alert("Please provide all the required details.");
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 rounded-lg">
      <h1 className="text-3xl font-semibold mb-6 text-white drop-shadow-lg">
        Toys for 4 to 8 Years
      </h1>
      <p className="text-lg mb-4 text-white">Toys for preschoolers and kids in this age range.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {toys.map((toy, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={`/${toy.image}`} // Corrected path for images in the public folder
              alt={toy.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{toy.name}</h2>
              <p className="text-xl text-purple-600 font-bold mb-4">
                <span className="text-lg">₹</span> {/* Decreased size of rupee symbol */}
                {toy.price}
              </p>
              <button
                onClick={() => handleBuyNow(toy)}
                className="w-full mt-4 py-2 bg-gradient-to-br from-purple-500 to-purple-700 text-white text-lg font-semibold rounded-lg hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-800 active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for user details */}
      {showAdd && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40">
          <div className="w-1/3 bg-white rounded-lg p-6 shadow-lg">
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
                <input
                  type="text"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
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
          <div className="w-1/3 bg-white rounded-lg p-6 shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">We've noticed your order!</h2>
            <p className="text-lg text-gray-700">
              Your order will be dispatched soon. Thank you for shopping with us!
            </p>
            <button
              onClick={() => setShowConfirmation(false)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toys4to8;

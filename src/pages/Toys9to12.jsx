import React, { useState } from "react";

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

  const toys = [
    {
      name: "Remote Control Car",
      price: "2500",
      image: "/remote-control-car.jpg", // Path from public directory
    },
    {
      name: "Puzzle Set",
      price: "1200",
      image: "/puzzle-set.jpg", // Path from public directory
    },
    {
      name: "Board Game",
      price: "1500",
      image: "/image.webp", // Path from public directory
    },
    {
      name:"Smartivity Microscope 100x Zoom Toy",
      price:"900",
      image:"z34.jpg",
    },
    {
      name:"Smartivity Pinball Machine",
      price:"2000",
      image:"z35.jpg",
    },
    {
      name:"Smartivity Telescope Toy",
      price:"200",
      image:"z36,jpg",
    },
    {
      name:"Smartivity Robotic Mechanical Hand Toy ",
      price:"500",
      image:"z37.jpg",
    },
    {
      name:"Funskool Games, Othello, Strategy Game, 2 players",
      price:"500",
      image:"z38.jpg",
    },
    {
      name:"MONOPOLY Board Game (Multicolor) for Families and Kids ",
      price:"2000",
      image:"z39.jpg",
    },
    {
      name:"Hasbro Gaming Mastermind The Classic Code Cracking Game",
      price:"5000",
      image:"z40.jpg",
    },
    {
      name:"LEGO Speed Champions Mercedes",
      price:"5000",
      image:"z41.jpg",
    },
    {
      name:"LEGO Technic Bugatti Bolide",
      price:"1000",
      image:"z42.jpg",
    },
    {
      name:"LEGO Speed Champions 2",
      price:"1000",
      image:"z43.jpg",
    },
    {
      name:"TRANSFORMERS (Bumblebee)",
      price:"500",
      image:"z44.jpg",
    },
    {
      name:"Avishkaar Robotics Starter Kit",
      price:"200",
      image:"z45.jpg",
    },
    {
      name:"ack Royal Original Rock Crawler",
      price:"500",
      image:"z46.jpg",
    },
    {
      name:"LEGO Creator 3in1 Fish Tank ",
      price:"500",
      image:"z47.jpg",
    }
  ];

  const handleBuyNow = (toy) => {
    setFormData({
      ...formData,
      toy,
    });
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
      setShowConfirmation(true);
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
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={toy.image} // Accessing image from public
              alt={toy.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {toy.name}
              </h2>
              <p className="text-xl text-purple-600 font-bold mb-4">
                <span className="text-xl">₹</span> {/* Reduced size of the rupee symbol */}
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
      {showConfirmation && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40">
          <div className="w-1/3 bg-white rounded-lg p-6 shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              We've noticed your order!
            </h2>
            <p className="text-lg text-gray-700">
              Your order will be dispatched soon. Thank you for shopping with
              us!
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

export default Toys9to12;

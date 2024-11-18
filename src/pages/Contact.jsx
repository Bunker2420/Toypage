import React, { useState } from 'react';
import { Mail, Phone, Pin } from 'lucide-react';

const Contact = () => {
  const [rippleEffect, setRippleEffect] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false); // State for "Thank You" message

  // For triggering ripple effect on button click
  const handleButtonClick = () => {
    setRippleEffect(true);
    setTimeout(() => setRippleEffect(false), 600); // Reset ripple animation

    // Show the Thank You message after feedback is sent
    setShowThankYou(true);

    // Optional: Hide the "Thank You" message after 3 seconds (adjust time as needed)
    setTimeout(() => setShowThankYou(false), 5000); 
  };

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 relative overflow-hidden py-10">
      {/* Animated Background Blobs */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-floating" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-floating" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-floating" />

      {/* Heading */}
      <div className="w-full h-40 flex justify-center items-center text-4xl text-white font-bold animate-fade-in">
        Contact Us
      </div>

      {/* Contact Section */}
      <div className="w-[85%] h-[50rem] bg-white shadow-2xl rounded-lg flex flex-row justify-center items-center gap-6 animate-slide-up">
        {/* Contact Information */}
        <div className="h-[90%] w-1/2 flex flex-col justify-center items-center gap-6">
          {[ 
            { Icon: Mail, label: 'toyspaget@gmail.com' },
            { Icon: Phone, label: '7416842005,7981215610' },
            { Icon: Pin, label: '9/12 Miyapur, Hyderabad' },
          ].map(({ Icon, label }, index) => (
            <div
              key={index}
              className="h-[28%] w-[75%] border rounded-lg flex flex-col justify-center items-center text-lg font-semibold gap-3 shadow-md bg-gradient-to-b from-purple-100 to-white hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <Icon className="h-10 w-10 text-purple-600" />
              <h1 className="text-gray-700 text-center">{label}</h1>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="h-[95%] w-1/2 flex flex-col justify-center items-center">
          <div className="h-full w-full flex flex-col justify-center items-center gap-6">
            <h1 className="w-[80%] text-left my-4 font-extrabold text-2xl text-purple-600">
              FeedBack
            </h1>
            <form
              className="h-[80%] w-[80%] flex flex-col justify-center items-center gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              {[ 
                { type: 'text', placeholder: 'Name' },
                { type: 'email', placeholder: 'Email' },
                { type: 'tel', placeholder: 'Phone' },
              ].map(({ type, placeholder }, index) => (
                <input
                  key={index}
                  type={type}
                  placeholder={placeholder}
                  className="w-full shadow-md outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-purple-400 focus:scale-105 rounded-md transition-all duration-300"
                />
              ))}
              <textarea
                placeholder="Give us your opinion"
                className="w-full shadow-md outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-purple-400 focus:scale-105 rounded-md transition-all duration-300"
                rows="6"
              />
              <button
                type="submit"
                onClick={handleButtonClick}
                className={`w-full p-3 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300 ${
                  rippleEffect && 'animate-ripple'
                }`}
              >
                Send FeedBack
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Thank You Message */}
      {showThankYou && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40">
          <div className="w-1/3 bg-white rounded-lg p-6 shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Thank you!</h2>
            <p className="text-lg text-gray-700">
              We've received your feedback and we'll definitely improvise it. Thanks for sharing your thoughts with us!
            </p>
            <button
              onClick={() => setShowThankYou(false)} // Close confirmation message
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

export default Contact;

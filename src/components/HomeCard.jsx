import React from "react";
import { Link } from "react-router-dom";

const HomeCards = () => {
  const ageRanges = [
    { range: "0 to 3 Years", description: "Toys for infants and toddlers", link: "/toys/0-3-years" },
    { range: "4 to 8 Years", description: "Toys for preschoolers and kids", link: "/toys/4-8-years" },
    { range: "9 to 12 Years", description: "Toys for older children", link: "/toys/9-12-years" },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 py-10 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-2xl font-semibold text-white mb-6 tracking-wide">Explore Toys by Age Group</h1>
      <div className="w-full flex flex-wrap justify-center items-center gap-6">
        {ageRanges.map((ageRange, index) => (
          <Link to={ageRange.link} key={index} className="w-full max-w-[14rem]">
            <div className="relative h-36 w-full bg-white rounded-xl shadow-lg overflow-hidden group hover:scale-105 hover:rotate-1 transform transition-all duration-300">
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Decorative Circles */}
              <div className="absolute top-2 left-2 h-6 w-6 rounded-full bg-blue-400 group-hover:scale-150 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-pink-400 group-hover:scale-150 group-hover:opacity-30 transition-all duration-500"></div>
              
              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
                <h2 className="font-semibold text-sm text-gray-800 group-hover:text-white transition-colors duration-300">
                  {ageRange.range}
                </h2>
                <p className="text-xs text-gray-600 text-center group-hover:text-white transition-colors duration-300">
                  {ageRange.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;

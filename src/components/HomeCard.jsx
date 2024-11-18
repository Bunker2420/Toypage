import React from "react";
import { Link } from "react-router-dom";

const HomeCards = () => {
  const ageRanges = [
    { range: "0 to 3 Years", description: "Toys for infants and toddlers", link: "/toys/0-3-years" },
    { range: "4 to 8 Years", description: "Toys for preschoolers and kids", link: "/toys/4-8-years" },
    { range: "9 to 12 Years", description: "Toys for older children", link: "/toys/9-12-years" },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-8 py-10 px-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
      <h1 className="text-3xl font-semibold text-white mb-8">Explore Toys by Age Group</h1>
      <div className="w-full flex flex-wrap justify-center items-center gap-8">
        {ageRanges.map((ageRange, index) => (
          <Link to={ageRange.link} key={index} className="w-full max-w-[18rem]">
            <div className="relative h-44 w-full bg-white rounded-2xl shadow-xl overflow-hidden group hover:scale-105 transform transition-all duration-300">
              {/* Decorative Circle */}
              <div className="absolute h-16 w-16 -top-6 -right-6 rounded-full bg-blue-600 opacity-60 group-hover:scale-[3] group-hover:opacity-80 transition-all duration-500" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
                <h1 className="font-semibold text-lg text-gray-800 group-hover:text-white transition-colors duration-300">
                  {ageRange.range}
                </h1>
                <p className="text-sm text-gray-600 text-center group-hover:text-white transition-colors duration-300">
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

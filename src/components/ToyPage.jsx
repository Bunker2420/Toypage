import React from "react";
import { useParams } from "react-router-dom";

const ToyPage = () => {
  const { ageRange } = useParams();

  // Mock toy data for demonstration
  const toyData = {
    "0-3-years": [
      { name: "Rattle", price: "$10", image: "rattle.jpg" },
      { name: "Stuffed Animal", price: "$20", image: "stuffed_animal.jpg" },
    ],
    "4-8-years": [
      { name: "Lego Set", price: "$50", image: "lego.jpg" },
      { name: "Puzzle", price: "$15", image: "puzzle.jpg" },
    ],
    "9-12-years": [
      { name: "Remote Car", price: "$40", image: "remote_car.jpg" },
      { name: "Science Kit", price: "$30", image: "science_kit.jpg" },
    ],
  };

  const toys = toyData[ageRange] || [];

  return (
    <div className="toy-page">
      <h1 className="text-2xl font-bold mb-4">Toys for {ageRange.replace("-", " ")}</h1>
      <div className="flex flex-wrap gap-8">
        {toys.map((toy, index) => (
          <div key={index} className="border p-4 shadow-md rounded">
            <img src={toy.image} alt={toy.name} className="w-32 h-32 object-cover mb-4" />
            <h2 className="text-xl font-semibold">{toy.name}</h2>
            <p className="text-lg">{toy.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToyPage;
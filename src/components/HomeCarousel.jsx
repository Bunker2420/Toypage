import { useState, useEffect } from 'react';

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img: "https://wallpaperaccess.com/full/4509437.jpg",
      title: "Teddy Bears",
      offer: "40% offer",
    },
    {
      img: "https://thumbs.dreamstime.com/b/toy-store-wooden-shelves-full-colorful-toys-sale-wooden-shelves-stocked-colorful-toys-toy-store-324130046.jpg",
      title: "Store",
      offer: "30% offer",
    },
    {
      img: "/image.jpg",
      title: "50 +  products available",
      offer: "50% offer",
    },
  ];

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-screen h-[60vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70" />
          <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-4xl font-bold drop-shadow-md">{slide.title}</h2>
            <p className="text-2xl mt-2 font-semibold drop-shadow-md">{slide.offer}</p>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;

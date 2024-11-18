import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel = () => {
  return (
    <>
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false}
        className="relative"
      >
        <div>
          <img 
            className="h-[50vh] object-cover rounded-lg shadow-md" 
            src="https://static.vecteezy.com/system/resources/thumbnails/028/535/140/small/many-colorful-toys-collection-on-the-desk-generative-ai-photo.jpg" 
            alt="Toys"
          />
          <div className="absolute left-2 bottom-2 flex flex-col bg-white bg-opacity-80 p-6 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-gray-800">Toys</h2>
            <p className="text-xl mt-4">
              <span className="text-4xl font-bold text-blue-600">40%</span>
              <span className="text-base font-medium text-gray-500"> offer</span>
            </p>
          </div>
        </div>
        
        <div>
          <img 
            className="h-[50vh] object-cover rounded-lg shadow-md" 
            src="https://thumbs.dreamstime.com/b/toy-store-wooden-shelves-full-colorful-toys-sale-wooden-shelves-stocked-colorful-toys-toy-store-324130046.jpg" 
            alt="Store"
          />
          <div className="absolute left-2 bottom-2 flex flex-col bg-white bg-opacity-80 p-6 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-gray-800">Store</h2>
            <p className="text-xl mt-4">
              <span className="text-4xl font-bold text-blue-600">30%</span>
              <span className="text-base font-medium text-gray-500"> offer</span>
            </p>
          </div>
        </div>

        <div>
          <img 
            className="h-[50vh] object-cover rounded-lg shadow-md" 
            src="https://www.hdwallpapers.in/download/different_types_of_teddy_bear_toys_hd_teddy_bear-1920x1080.jpg" 
            alt="Teddy Bears"
          />
          <div className="absolute left-2 bottom-2 flex flex-col bg-white bg-opacity-80 p-6 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-gray-800">Teddy Bears</h2>
            <p className="text-xl mt-4">
              <span className="text-4xl font-bold text-blue-600">50%</span>
              <span className="text-base font-medium text-gray-500"> offer</span>
            </p>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default HomeCarousel;

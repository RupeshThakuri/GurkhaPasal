import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const BannerSection = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    '/Image/User/slider_1.png',
    '/Image/User/slider_2.png',
    '/Image/User/slider_3.png',
    '/Image/User/slider_4.png',
 

  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 rounded-lg shadow-lg bg-deeporange-600 mx-auto max-w-5xl">
      {/* Slideshow */}
      <div className="relative w-full md:w-3/4 overflow-hidden">
        <Image
          src={images[current]}
          alt="Shop Banner"
          width={800}
          height={400}
          className="rounded-lg"
        />
          <Button
          className="absolute bottom-5 left-5 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
        >
          Shop Now
        </Button>
        <button
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded-full"
          onClick={prevSlide}
        >
          &#8249;
        </button>
        <button
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded-full"
          onClick={nextSlide}
        >
          &#8250;
        </button>

        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer ${current === index ? 'bg-orange-500' : 'bg-gray-500'}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center md:items-end w-full md:w-1/4 mt-6 md:mt-0">
        <p className="text-white text-lg font-semibold">Download the App</p>
          <Image src="/Image/User/gurkhapasal.png" alt="QR Code" width={100} height={100} className="my-3" />
                <div className="flex gap-2">
                  <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                    <Image src="/Image/User/p1.jpeg" alt="Google Play" width={120} height={40} />
                  </a>
                  <a href="https://www.apple.com/app-store/  " target="_blank" rel="noopener noreferrer" >
                 <Image src="/Image/User/applestore.webp" alt="App Store" width={20} height={20} />
                  </a>
                </div>
      </div>
    </div>
  );
};

export default BannerSection;

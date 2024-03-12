// src/components/Carousel_v2.tsx
'use client'
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Image, { StaticImageData } from 'next/image';

export default function Carousel_v2({
  autoSlide = false,
  autoSlideInterval = 1000,
  slides,
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[] | StaticImageData[];
}) {
  const [curr, setCurr] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slideIncrement = isMobile ? 1 : 4;

  const prev = () =>
    setCurr((curr) => (curr - slideIncrement < 0 ? slides.length - slideIncrement : curr - slideIncrement));
  const next = () =>
    setCurr((curr) => (curr + slideIncrement >= slides.length ? 0 : curr + slideIncrement));

  useEffect(() => {
    if (!autoSlide || isHovered) return;

    const slideInterval = setInterval(next, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, isHovered, next]);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ maxHeight: '400px' }}>
        <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * (100 / slideIncrement)}%)`, height: '400px' }}>
          {slides.map((slide_image_, index) => (
            <div key={index} className={`w-${isMobile ? 'full' : '1/4'} p-2 flex-shrink-0`} style={{ height: '100%' }}>
              <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative', borderRadius:"26px" }}>
                <Image src={slide_image_} alt="Slide de imagens" layout="fill" objectFit="fill" />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
            <ChevronLeft size={40} />
          </button>
          <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
            <ChevronRight size={40} />
          </button>
        </div>
      </div>
    </div>
  );
}

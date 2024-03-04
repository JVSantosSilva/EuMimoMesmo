// /home/apollo/EuMimoMesmo/src/components/Carousel.tsx
/* eslint-disable react/jsx-key */ // Desativa a regra de key do ESLint para este arquivo.
'use client' // Instrui o Next.js a carregar este módulo apenas no lado do cliente.
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Image, { StaticImageData } from 'next/image';


export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 1000,
  slides,
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[] | StaticImageData[];
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overflow-hidden relative" style={{ height: '300px' }}>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >


        {slides.map((slide_image_, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
          <Image src={slide_image_} alt="Slide de imagens" style={{ height: '300px' }} />
          </div>

        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );

  
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/navbar/page";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Generate array of 49 images
  const images = Array.from({ length: 49 }, (_, i) => ({
    src: `/${i + 1}.jpg`,
    alt: `Memory ${i + 1}`,
  }));

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-brown-50">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brown-800 mb-4">
              Memory Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brown-600 via-gold-500 to-brown-600 mx-auto mb-6 rounded-full"></div>
            <p className="font-inter text-lg text-brown-600 max-w-2xl mx-auto">
              A collection of special moments and memories from your time at
              Brown University
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage !== null && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
              onClick={handleCloseLightbox}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
                onClick={handleCloseLightbox}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="relative max-w-7xl max-h-[90vh] mx-4">
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  width={1200}
                  height={800}
                  className="object-contain max-h-[90vh] rounded-lg"
                />
              </div>

              {/* Navigation buttons */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) =>
                    prev === 0 ? images.length - 1 : prev! - 1
                  );
                }}
              >
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) =>
                    prev === images.length - 1 ? 0 : prev! + 1
                  );
                }}
              >
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;

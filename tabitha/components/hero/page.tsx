import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brown-50 via-white to-gold-50 overflow-hidden">
      {/* Modern decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 "></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-brown-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 "
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brown-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Brown University Seal */}
          {/* <div className="mb-12 relative">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-brown-800 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl md:text-5xl">🎓</span>
            </div>
            <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 mx-auto border-2 border-brown-200 rounded-full animate-spin-slow"></div>
          </div> */}

          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-brown-800 mb-6 leading-tight tracking-tight">
            Congratulations
            <span className="block text-gold-600 mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gold-500 to-gold-700">
              Tabitha!
            </span>
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-brown-600 via-gold-500 to-brown-600 mx-auto mb-8 rounded-full"></div>

          <p className="font-inter text-xl md:text-2xl text-brown-600 mb-4 font-light tracking-wide">
            Celebrating your graduation from
          </p>

          <h2 className="font-playfair text-3xl md:text-5xl font-semibold text-brown-800 mb-12 tracking-wide">
            Brown University
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-brown-600 font-inter">
            <span className="bg-white/80 backdrop-blur-md px-8 py-4 rounded-full border border-brown-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Class of 2025
            </span>
   
     
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

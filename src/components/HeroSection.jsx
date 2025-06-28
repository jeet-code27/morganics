"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const HealthcareHero = () => {
  const pillImages = [
    '/images/blue.png',
    '/images/purple.png',
    '/images/red.png',
    '/images/yellow.png'
  ];
  
  // Add a subtle hover effect to pill images
  const [hoveredPill, setHoveredPill] = useState(null);

  return (
    <div className="relative min-h-[500px] md:min-h-[600px] bg-white text-black flex items-center justify-center overflow-hidden">
      {/* Left Pill Images */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 h-full hidden md:block">
        {pillImages.map((src, index) => {
          const positions = [
            { x: '30%', y: '15%', rotate: -15, delay: 0.3 },
            { x: '20%', y: '40%', rotate: 10, delay: 0.5 },
            { x: '40%', y: '65%', rotate: -20, delay: 0.1 },
            { x: '25%', y: '85%', rotate: 15, delay: 0.7 }
          ];

          const { x, y, rotate, delay } = positions[index];
          const isHovered = hoveredPill === `left-${index}`;

          return (
            <div 
              key={`left-${index}`}
              className="absolute w-32 h-32 md:w-40 md:h-40 transform transition-all duration-1000 ease-in-out cursor-pointer"
              style={{
                left: x,
                top: y,
                transform: `rotate(${rotate}deg) scale(${isHovered ? 1.15 : 1})`,
                animation: `floatLeft 4s infinite alternate ${delay}s`,
                filter: isHovered ? 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.5))' : 'none',
                transformStyle: 'preserve-3d',
                willChange: 'transform',
                zIndex: isHovered ? 20 : 10
              }}
              onMouseEnter={() => setHoveredPill(`left-${index}`)}
              onMouseLeave={() => setHoveredPill(null)}
            >
              <Image
                src={src}
                alt={`Pill ${index + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          );
        })}
      </div>

      {/* Center Content */}
      <div className="container mx-auto px-4 md:px-8 z-30 relative flex flex-col md:w-1/2 space-y-6 md:space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#0E0E3C] animate-fadeIn">
          Ultimate Healthcare, 
          <br />
          <span className="text-blue-800">Today And Tomorrow</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-[600px] animate-slideUp">
          It's important to address your health conditions during medications for the best substance.
        </p>
        
        {/* Button with enhanced styling */}
        <div className="flex items-center space-x-4 max-w-[600px] animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <Link href={"/inquiry"}>
          <button className="px-6 py-3 md:px-8 md:py-4 bg-[#0E0057] text-white rounded-lg hover:bg-purple-700 transition-all duration-300 hover:shadow-lg cursor-pointer hover:scale-105 transform">
            Make an Inquiry
          </button>
          </Link>
        </div>
      </div>

      {/* Right Pill Images */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 h-full hidden md:block">
        {pillImages.map((src, index) => {
          const positions = [
            { x: '50%', y: '20%', rotate: 20, delay: 0 },
            { x: '40%', y: '45%', rotate: -15, delay: 0.2 },
            { x: '60%', y: '65%', rotate: 10, delay: 0.4 },
            { x: '45%', y: '85%', rotate: -25, delay: 0.6 }
          ];

          const { x, y, rotate, delay } = positions[index];
          const isHovered = hoveredPill === `right-${index}`;

          return (
            <div 
              key={`right-${index}`}
              className="absolute w-32 h-32 md:w-40 md:h-40 transform transition-all duration-1000 ease-in-out cursor-pointer"
              style={{
                left: x,
                top: y,
                transform: `rotate(${rotate}deg) scale(${isHovered ? 1.15 : 1})`,
                animation: `floatRight 4s infinite alternate ${delay}s`,
                filter: isHovered ? 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.5))' : 'none',
                transformStyle: 'preserve-3d',
                willChange: 'transform',
                zIndex: isHovered ? 20 : 10
              }}
              onMouseEnter={() => setHoveredPill(`right-${index}`)}
              onMouseLeave={() => setHoveredPill(null)}
            >
              <Image
                src={src}
                alt={`Pill ${index + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          );
        })}
      </div>

      {/* Enhanced Floating Circles with different colors */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        {[...Array(8)].map((_, index) => {
          // Create an array of soft medical colors
          const colors = [
            'rgba(59, 130, 246, 0.1)',  // blue
            'rgba(147, 51, 234, 0.1)',  // purple
            'rgba(236, 72, 153, 0.1)',  // pink
            'rgba(34, 211, 238, 0.1)'   // cyan
          ];
          
          return (
            <div
              key={index}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 120 + 60}px`,
                height: `${Math.random() * 120 + 60}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: colors[index % colors.length],
                opacity: 0.7,
                animation: `floatBubble ${Math.random() * 6 + 5}s infinite alternate ${Math.random() * 2}s`,
                backdropFilter: 'blur(2px)'
              }}
            />
          );
        })}
      </div>

      {/* Enhanced Animation Styles */}
      <style jsx>{`
        @keyframes floatLeft {
          0% { transform: translateY(0) translateX(0) rotate(0deg); }
          100% { transform: translateY(-15px) translateX(10px) rotate(5deg); }
        }
        
        @keyframes floatRight {
          0% { transform: translateY(0) translateX(0) rotate(0deg); }
          100% { transform: translateY(-15px) translateX(-10px) rotate(-5deg); }
        }
        
        @keyframes floatBubble {
          0% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { opacity: 0.7; }
          100% { transform: translateY(-30px) scale(1.1); opacity: 0.5; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default HealthcareHero;
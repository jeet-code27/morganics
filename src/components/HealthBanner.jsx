import React from 'react';
import BenefitsSection from './BenefitsSection';

const HealthBanner = () => {
  return (
    <div className="w-full bg-indigo-950 py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 pr-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Your Health, Our Priority: Trust Morganics for Quality Medications and Care.
          </h1>
          
          <p className="text-white/80 mb-12">
            At Morganics, we believe in providing innovative pharmaceutical solutions to improve your health and well-being. Our commitment to quality ensures that you receive the best care possible.
          </p>
          
          <div className="flex space-x-8">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <span className="text-white text-xl font-medium">Trusted Medications</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <span className="text-white text-xl font-medium">Personalized Care</span>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <div className="rounded-lg overflow-hidden max-w-md ml-auto">
            {/* Replace the src with your image path */}
            <img 
              src="/images/morganics-pharmaceuticals-ajmer.jpg" 
              alt="Morganics pharmaceutical products" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
      <BenefitsSection/>
    </div>
  );
};

export default HealthBanner;
"use client";

import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <div className="bg-[#0E0057] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 max-w-xl">
            <h3 className="text-blue-300 text-xl font-medium mb-4">Who We Are</h3>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Transforming Healthcare<br />
              with Morganics
            </h1>
            
            <p className="text-gray-200 mb-8">
              Since its inception in 2012, Morganics has been dedicated to delivering high-quality pharmaceutical products while prioritizing patient care. We offer a comprehensive range of pharmaceutical formulations across multiple therapeutic areas, serving as a trusted pharma franchise partner nationwide. Our commitment to quality and a customer-centric approach has made us a leader in enhancing patient care.
            </p>
            
            {/* Feature Items */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500 rounded-lg flex-shrink-0 flex items-center justify-center">
                  {/* Pharmaceutical Icon */}
                  <Image 
                    src="/images/chemicals.png" 
                    alt="Pharmaceutical Icon" 
                    width={40} 
                    height={40} 
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <h3 className="text-xl text-white font-bold mb-2">Wide Range of Pharmaceutical Products</h3>
                  <p className="text-gray-200">
                    From essential medicines to advanced therapeutic solutions, Morganics provides a diverse portfolio of pharmaceutical products to meet the needs of healthcare providers and patients.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500 rounded-lg flex-shrink-0 flex items-center justify-center">
                  {/* Quality Assurance Icon */}
                  <Image 
                    src="/images/badge.png" 
                    alt="Quality Assurance Icon" 
                    width={50} 
                    height={50} 
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <h3 className="text-xl text-white font-bold mb-2">Commitment to Quality</h3>
                  <p className="text-gray-200">
                    At Morganics, we adhere to stringent quality standards to ensure the safety and efficacy of our products, delivering trusted solutions for better health outcomes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-1 rounded-lg flex-shrink-0 flex items-center justify-center">
                  {/* Team Icon */}
                  <Image 
                    src="/images/team.png" 
                    alt="Team Icon" 
                    width={100} 
                    height={100} 
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="text-xl text-white font-bold mb-2">Expert Team & Marketing Support</h3>
                  <p className="text-gray-200">
                    Our team of experienced professionals, combined with robust marketing strategies and support, empowers our partners to succeed in the competitive pharmaceutical industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image and Contact */}
          <div className="w-full lg:w-1/2 max-w-xl relative">
            <div className="relative h-96 lg:h-[500px] mx-auto">
              <Image 
                src="/images/working.jpg"
                alt="Morganics team working together" 
                fill
                className="object-cover rounded-lg"
                priority
              />
              
              {/* Contact Card - Positioned differently for mobile vs desktop */}
              <div className="absolute lg:-bottom-16 lg:left-[-40px] hidden lg:block bg-white text-blue-900 p-8 rounded-lg w-64 shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-500 p-4 rounded-full">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-center mb-3">
                  Have Any Questions?
                </h3>
                
                <p className="text-xl font-bold text-center">
                  +91 82097 88869
                </p>
              </div>
            </div>
            
            {/* Mobile Contact Card - Below image on mobile only */}
            <div className="lg:hidden bg-white text-blue-900 p-8 rounded-lg w-full mt-8 mx-auto max-w-xs shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-500 p-4 rounded-full">
                  <Phone className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-3">
                Have Any Questions?
              </h3>
              
              <p className="text-xl font-bold text-center">
                +91 82097 88869
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
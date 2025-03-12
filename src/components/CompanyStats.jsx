'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Package, ShieldCheck, TrendingUp, Heart } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CompanyStats = () => {
  const [stats, setStats] = useState({
    products: 0,
    distributors: 0,
    districts: 0
  });

  useEffect(() => {
    const animateStats = () => {
      const targetStats = {
        products: 80,
        distributors: 100,
        districts: 500
      };

      const animationDuration = 2000; // 2 seconds
      const interval = 50; // update every 50ms
      const steps = animationDuration / interval;

      const incrementStats = (currentStep) => {
        const newStats = {
          products: Math.min(Math.ceil(targetStats.products * (currentStep / steps)), targetStats.products),
          distributors: Math.min(Math.ceil(targetStats.distributors * (currentStep / steps)), targetStats.distributors),
          districts: Math.min(Math.ceil(targetStats.districts * (currentStep / steps)), targetStats.districts)
        };

        setStats(newStats);

        if (currentStep < steps) {
          setTimeout(() => incrementStats(currentStep + 1), interval);
        }
      };

      incrementStats(1);
    };

    animateStats();
  }, []);

  // Carousel content with icons
  const carouselContent = [
    {
      icon: <Package className="w-12 h-12 text-[#0E0057]" />,
      text: "We offer a wide range of high-quality pharmaceutical products across multiple therapeutic areas."
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-[#0E0057]" />,
      text: "Our team of experts ensures strict adherence to quality standards and regulatory compliance."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#0E0057]" />,
      text: "We provide robust marketing and distribution support to our partners, helping them succeed in a competitive market."
    },
    {
      icon: <Heart className="w-12 h-12 text-[#0E0057]" />,
      text: "Our customer-centric approach ensures that patient care remains at the heart of everything we do."
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Side - Carousel */}
          <div className="w-full md:w-1/2 relative">
            <div className="border-4 border-indigo-200 hover:border-indigo-300 rounded-2xl overflow-hidden shadow-lg">
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                pagination={{ 
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet !bg-indigo-500',
                  bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#0E0057]'
                }}
                navigation={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                spaceBetween={30}
                className="w-full h-[400px] text-[#0E0057]"
              >
                {carouselContent.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-6">
                      <div className="p-4 bg-indigo-50 rounded-full">
                        {item.icon}
                      </div>
                      <p className="text-xl text-gray-700 font-medium leading-relaxed max-w-md">{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right Side - Content and Stats */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#0E0057] mb-4">
                Why We Are Better
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Morganics, we pride ourselves on being a leader in the pharmaceutical industry. Our commitment to innovation, quality, and customer satisfaction sets us apart. Here's why we are the preferred choice for healthcare providers and distributors nationwide:
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { key: 'products', label: 'Pharmaceutical Products' },
                { key: 'distributors', label: 'Trusted Distributors' },
                { key: 'districts', label: 'Operational Districts' }
              ].map(({ key, label }) => (
                <div 
                  key={key} 
                  className="bg-white p-6 rounded-lg border border-indigo-200 shadow-md text-center hover:shadow-lg hover:border-indigo-300 transition-all duration-300"
                >
                  <h3 className="text-4xl font-bold text-[#0E0057] mb-2">
                    {stats[key]}+
                  </h3>
                  <p className="text-[#0E0057] font-medium">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStats;
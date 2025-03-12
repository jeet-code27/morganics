"use client";
import React from 'react';
import { Heart, DollarSign, Smile } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Heart className="w-12 h-12 text-indigo-100" />,
      title: "Honesty & Transparency",
      description: "At Morganics, we believe in open communication and ethical practices, ensuring you always know what goes into your medications."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-indigo-100" />,
      title: "Extra Discount",
      description: "Enjoy exclusive discounts and offers on our high-quality pharmaceutical products, making healthcare more affordable for everyone."
    },
    {
      icon: <Smile className="w-12 h-12 text-indigo-100" />,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you with any questions or concerns about your health and medications."
    }
  ];

  return (
    <div className="w-full bg-indigo-800 rounded-lg mt-10 text-white py-18">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-6 tracking-tight">
          Why You Should Choose Us
        </h2>
        
        <p className="text-center text-lg max-w-2xl mx-auto mb-16 text-indigo-200 font-light">
          At Morganics, we prioritize your health and well-being with trusted medications and exceptional service.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-xl ${index === 1 ? 'bg-indigo-500' : 'bg-[#6B54FD]'} ${index === 1 ? 'hover:bg-[#6B54FD]' : 'hover:bg-[#6B54FD]'} shadow-lg transition-transform hover:bg-[#6B54FD] duration-300 hover:scale-105`}
            >
              <div className="mb-6 transition-transform duration-300 hover:rotate-12">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">{benefit.title}</h3>
              <p className="text-indigo-200 leading-relaxed font-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
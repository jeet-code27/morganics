// EnhancedFAQComponent.jsx
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div 
      className="mb-6"
      initial="hidden"
      animate="visible"
      custom={index}
      variants={itemVariants}
    >
      <div className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#0E0057] border-2' : 'border border-gray-200 hover:border-[#0E0057]'}`}>
        <button
          className={`w-full p-5 text-left flex justify-between items-center transition-colors duration-300 ${isOpen ? 'bg-[#0E0057]/5' : 'bg-white hover:bg-gray-50'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <h3 className={`text-lg font-semibold ${isOpen ? 'text-[#0E0057]' : 'text-gray-800'}`}>{question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className={`flex items-center justify-center h-8 w-8 rounded-full ${isOpen ? 'bg-[#0E0057] text-white' : 'bg-gray-100 text-[#0E0057]'}`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 24 24" 
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="p-5 bg-white border-t border-gray-100 text-gray-700 leading-relaxed">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const EnhancedFAQComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Categories based on questions
  const categories = [
    'All',
    'Getting Started',
    'Business',
    'Requirements',
    'Benefits'
  ];
  
  // Categorized FAQs
  const faqs = [
    {
      question: "What is a PCD Pharma Franchise?",
      answer: "A PCD Pharma Franchise is a type of business franchise in which a company allows a pharmaceutical distributor or wholesaler to use their brands to sell their products. Stated differently, the agreement between the distributor and the PCD Pharma company is based on monopoly. The definition of a \"PCD Pharma Franchise\" is the franchise owner's permission granted by PCD Pharma Companies to handle distribution and marketing on a monopoly basis for PCD Companies in their respective areas. To expand their pharmaceutical business, they can use their company name, brand name, marketing collateral, and other commercial materials.",
      category: "Getting Started"
    },
    {
      question: "Who Can Apply for PCD Pharma Franchise?",
      answer: "Anyone with a background in pharmaceuticals, medical sales, or distribution can apply for a PCD Pharma Franchise. This includes pharmacists, medical representatives, pharmaceutical distributors, wholesalers, and healthcare professionals. Having relevant industry experience and knowledge of the pharmaceutical market is beneficial. You should also have adequate financial resources to invest in inventory and marketing, as well as appropriate storage facilities that comply with industry regulations.",
      category: "Requirements"
    },
    {
      question: "Why PCD Pharma Franchise Is Better Than Doing Job?",
      answer: "A PCD Pharma Franchise offers several advantages over a traditional job: ownership of your business with decision-making authority, higher income potential with no salary cap, monopoly rights in your territory which reduces competition, flexibility in working hours and methods, opportunity to build valuable business assets, and freedom from corporate policies and hierarchies. While it requires initial investment and comes with business risks, the long-term potential for growth and financial independence makes it an attractive alternative to employment for many pharmaceutical professionals.",
      category: "Benefits"
    },
    {
      question: "Which Documents Are Required for Taking the Pharma Franchise?",
      answer: "To obtain a PCD Pharma Franchise, you typically need: GST Registration Certificate, Drug License (wholesale or retail depending on your business model), PAN Card, Aadhar Card, Bank Account details, passport-sized photographs, address proof (for both residence and business premises), educational qualification certificates (especially pharmaceutical qualifications), and a properly executed franchise agreement with the PCD company. Some companies may also require proof of storage facilities that meet pharmaceutical standards and initial investment capacity.",
      category: "Requirements"
    },
    {
      question: "How to Choose Best PCD Pharma Company?",
      answer: "When selecting the best PCD Pharma company, consider: the company's reputation and years in the industry, product range and quality standards, manufacturing facilities (WHO-GMP certified), marketing support provided, monopoly rights offered, investment requirements, profit margins, minimum order quantity policies, delivery terms, and after-sales support. Research the company thoroughly by checking customer reviews, speaking with existing franchisees, verifying certifications, and analyzing their market presence and growth trajectory. The ideal company should offer quality products, good profit margins, and comprehensive support to help you succeed.",
      category: "Getting Started"
    },
    {
      question: "Who Can Start PCD Pharma Company in India?",
      answer: "Starting a PCD Pharma company in India requires: industry experience (preferably in pharmaceutical marketing or manufacturing), substantial capital investment for manufacturing facilities or third-party manufacturing arrangements, various regulatory approvals including Drug Manufacturing License, FDA approval, GMP certification, GST registration, trademark registration for product brands, and connections with distributors. The founder should have pharmaceutical expertise or access to professionals with such knowledge. While individuals with strong pharmaceutical backgrounds can start these companies, it's often undertaken by established pharmaceutical businesses looking to expand their distribution networks.",
      category: "Business"
    },
    {
      question: "Why You Should Start a PCD Pharma Franchise Business?",
      answer: "Starting a PCD Pharma franchise business offers numerous benefits: low investment compared to manufacturing, exclusive marketing rights in specific territories, ready-made product portfolio with established brands, marketing and promotional support from the parent company, no manufacturing complexities or regulatory burdens, higher profit margins compared to traditional distribution, training and support from the parent company, and the opportunity to build a sustainable business in the healthcare sector. The pharmaceutical industry's essential nature provides stability even during economic downturns, making it a smart long-term business choice.",
      category: "Benefits"
    },
    {
      question: "What Are the Scopes of PCD Pharma Franchise Business in India?",
      answer: "The PCD Pharma franchise business in India has tremendous scope due to several factors: India's growing healthcare industry (projected to reach $372 billion by 2025), increasing health awareness and pharmaceutical consumption, government initiatives expanding healthcare access, aging population requiring more medicines, rising chronic diseases, growth in rural healthcare markets, expanding health insurance coverage, and medical tourism. The sector is becoming more organized with improving quality standards. Specific growth areas include nutraceuticals, dermatology, pediatrics, gynecology, and COVID-related healthcare products, providing diverse opportunities for franchise owners.",
      category: "Business"
    },
    {
      question: "What Is Return of Investment (ROI) Factor in PCD Pharma Franchise?",
      answer: "The Return on Investment (ROI) in a PCD Pharma franchise typically ranges from 20-30% in the first year, potentially increasing to 40-50% as your business establishes itself. The ROI depends on several factors: investment amount, territory allocation, product range, your marketing efforts, target customer base, operational efficiency, and the support provided by the parent company. Most franchise owners can expect to recover their initial investment within 1.5-2 years with proper business execution. Higher-margin specialty products and exclusive territories can accelerate the ROI timeframe. The pharmaceutical industry's essential nature provides relatively stable returns compared to many other business sectors.",
      category: "Business"
    }
  ];

  // Filter FAQs based on search and category
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Counter animation variant
  const counterVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#0E0057]/5 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold text-[#0E0057] sm:text-5xl"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to know about PCD Pharma Franchise at <span className="font-bold text-[#0E0057]">Morgaincs</span>
            </p>
            <div className="flex items-center justify-center mt-4">
              <div className="h-1 w-20 bg-[#0E0057] rounded"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <div className="relative flex-grow ">
              <input
                type="text"
                placeholder="Search questions or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pl-12 pr-4 rounded-xl text-black border border-gray-300 focus:border-[#0E0057] focus:ring-2 focus:ring-[#0E0057]/20 transition-all duration-300 shadow-sm"
              />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-gray-400 absolute left-4 top-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none w-full md:w-48 p-4 rounded-xl border border-gray-300 focus:border-[#0E0057] focus:ring-2 focus:ring-[#0E0057]/20 transition-all duration-300 shadow-sm bg-white text-black pr-10"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center bg-[#0E0057]/10 px-4 py-2 rounded-full">
              <motion.span
                variants={counterVariants}
                animate={filteredFAQs.length ? "animate" : ""}
                className="flex items-center justify-center h-6 w-6 rounded-full bg-[#0E0057] text-white text-sm font-medium mr-2"
              >
                {filteredFAQs.length}
              </motion.span>
              <span className="text-[#0E0057] text-sm font-medium">results found</span>
            </div>
            {selectedCategory !== 'All' && (
              <div className="bg-[#0E0057]/5 py-1 px-3 rounded-full text-[#0E0057] text-sm font-medium flex items-center">
                <span>{selectedCategory}</span>
                <button 
                  onClick={() => setSelectedCategory('All')} 
                  className="ml-2 focus:outline-none"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </motion.div>
        
        <div className="space-y-1">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8 bg-gray-50 rounded-xl text-center border border-gray-200"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-12 w-12 mx-auto text-gray-400 mb-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-600 text-lg">No matching questions found.</p>
              <p className="text-gray-500 mt-2">Try adjusting your search or category filter.</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                className="mt-4 text-[#0E0057] font-medium hover:underline focus:outline-none"
              >
                Reset filters
              </button>
            </motion.div>
          )}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 bg-white rounded-2xl p-8 border border-[#0E0057]/20 shadow-xl relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#0E0057]/10 rounded-full opacity-50"></div>
          <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-[#0E0057]/10 rounded-full opacity-50"></div>
          
          <div className="relative">
            <h3 className="text-2xl font-bold text-[#0E0057] mb-3">Ready to start your PCD Pharma journey?</h3>
            <p className="text-[#0E0057]/80 mb-6 max-w-lg">Contact Morgaincs today and discover how we can help you build a successful pharmaceutical business. Our team of experts is ready to guide you.</p>
            
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <Link href={"/inquiry"}>
              <button className="px-6 py-3 bg-[#0E0057] text-white cursor-pointer font-medium rounded-lg hover:bg-[#0E0057]/90 transition-colors duration-300 shadow-md flex items-center justify-center group">
                <span>Make an Inquiry</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              </Link>
              
              <a href="tel:+919982603336" className="px-6 py-3 bg-white text-[#0E0057] font-medium rounded-lg border border-[#0E0057]/20 hover:border-[#0E0057]/30 hover:bg-[#0E0057]/5 transition-colors duration-300 shadow-sm flex items-center justify-center">
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5 mr-2" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
  <span>Call Us</span>
</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedFAQComponent;
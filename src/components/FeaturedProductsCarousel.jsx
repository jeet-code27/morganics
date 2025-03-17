"use client";
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Info, X } from 'lucide-react';

const FeaturedProductsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showComposition, setShowComposition] = useState(false);
  const totalImages = 6;

  // Enhanced product data with composition information
  const products = [
    {
      image: '/images/product1.jpg',
      name: 'PGRAB-SR',
      description: 'Gain freedom from Neuropathic Pain Shackles',
      composition: [
        'Pregabalin 75 mg. (SR)',
        'Methylcobalamin 250 mcg. Tablets',
        
      ]
    },
    {
      image: '/images/product2.jpg',
      name: 'Tymef-200',
      description: 'Break the barrier of infections',
      composition: [
        'Faropenem Sodium 200 mg. Tablets',
       
      ]
    },
    {
      image: '/images/product3.jpg',
      name: 'DOMEP-DSR',
      description: 'Stop uncomfortable symptoms of Acid Reflux',
      composition: [
        'Rabeprazole 20 mg.',
        'Domperidone 30 mg. SR Capsules',
        
      ]
    },
    {
      image: '/images/product4.jpg',
      name: 'Rozil-DSR',
      description: '',
      composition: [
       'Rabeprazole 20 mg.',
        'Domperidone 30 mg. SR Capsules',
      ]
    },
    {
      image: '/images/redex-cold.jpg',
      name: 'Redex Cold',
      description: '',
      composition: [
        'Terbinafine Tablets IP 250 mg',
     
      ]
    },
    {
      image: '/images/protien-syrup.jpg',
      name: 'Pregan-L',
      description: 'Prefectly Balance Enriched with Nutrients',
      composition: [
        'Protein with Vitamins & Minerals',
        
      ]
    },
  ];

  const carouselRef = useRef(null);
  const compositionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!showComposition) {
        goToNext();
      }
    }, 5000); // Auto-rotate every 5 seconds, but pause when composition is shown

    return () => clearInterval(interval);
  }, [currentIndex, showComposition]);

  useEffect(() => {
    // Add event listener for escape key to close composition panel
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && showComposition) {
        setShowComposition(false);
      }
    };

    // Add event listener for clicking outside to close composition panel
    const handleClickOutside = (e) => {
      if (compositionRef.current && !compositionRef.current.contains(e.target) && showComposition) {
        setShowComposition(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showComposition]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
    setShowComposition(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    setShowComposition(false);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setShowComposition(false);
  };

  const toggleComposition = () => {
    setShowComposition(!showComposition);
  };

  return (
    <div className="bg-[#0E0057] py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-6 sm:mb-8">
          Featured Products
        </h2>
        <div className="relative overflow-hidden rounded-xl sm:rounded-3xl shadow-2xl max-w-full mx-auto">
          {/* Simplified Composition Modal - Only Ingredients */}
          {showComposition && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all duration-300">
              <div 
                ref={compositionRef}
                className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden border border-green-400/30"
                style={{ animation: 'fadeIn 0.3s ease-out' }}
              >
                {/* Header with close button */}
                <div className="flex items-center justify-between p-4 border-b border-green-500/30">
                  <h3 className="text-xl font-bold text-white">
                    <span className="text-green-400">{products[currentIndex].name}</span>
                  </h3>
                  <button
                    onClick={toggleComposition}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                    aria-label="Close composition view"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Simplified content - Only Ingredients */}
                <div className="p-5 overflow-y-auto max-h-[calc(90vh-64px)]">
                  {/* Product image */}
                  <div className="mb-5 overflow-hidden rounded-lg">
                    <img 
                      src={products[currentIndex].image} 
                      alt={products[currentIndex].name} 
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                  
                  {/* Description */}
                  <p className="mb-5 text-white/90 italic">
                    {products[currentIndex].description}
                  </p>
                  
                  {/* Ingredients list */}
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 text-green-300 flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                      Ingredients
                    </h4>
                    <ul className="space-y-3">
                      {products[currentIndex].composition.map((ingredient, idx) => (
                        <li key={idx} className="flex items-start text-white group transition-all">
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-400 mt-2 mr-2 group-hover:scale-125 transition-all"></div>
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="min-w-full relative flex-shrink-0 w-full"
              >
                <div className="relative w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-fit object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-8 right-4 sm:right-8 text-white">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm sm:text-base max-w-2xl mb-4 line-clamp-2 sm:line-clamp-none">
                      {product.description}
                    </p>
                    
                    {/* Composition Toggle Button */}
                    <button 
                      onClick={toggleComposition}
                      className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-green-600 hover:bg-green-500 text-white text-sm sm:text-base rounded-lg transition-all duration-300 shadow-lg group"
                    >
                      <Info className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 group-hover:animate-pulse" />
                      <span>View Ingredients</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-900 p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-300"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-900 p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-300"
            aria-label="Next product"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-1.5 sm:space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsCarousel;
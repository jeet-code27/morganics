"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Sample products - replace with your actual data
const products = [
  {
    id: 1,
    name: "PGRAB-SR",
    composition: "Pregabalin 75mg(SR) & Methylcobalamin 750 mcg. Tablets",
    // packing: "10 tablets",
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Tymef-200",
    composition: "Faropenem Sodium 200 mg. Tablets",
    // packing: "10 capsules",
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "DOMEP-DSR",
    composition: "Rabeprazole 20 mg. & Domperidone 30 mg. SR Capsules",
    // packing: "10 tablets",
    image: "/images/product3.jpg",
  },
  {
    id: 4,
    name: "Pregan-L",
    composition: "Protein with Vitamins & Minerals",
    // packing: "10 tablets",
    image: "/images/protien-syrup.jpg",
  },
  {
    id: 5,
    name: "Redex-Cold",
    composition: "Terbinafine Tablets IP 250 mg",
    // packing: "10 tablets",
    image: "/images/redex-cold.jpg",
  },
  {
    id: 6,
    name: "ACEMIN-LCT",
    composition: "L-Carnitine L-Tarate 500mg + Methylcobalamin 1500mcg & Folic Acid 1.5mg ",
    // packing: "10 tablets",
    image: "/images/acemin-lct.jpg",
  },
  {
    id: 7,
    name: "DELZIT-6",
    composition: "Deflazacort 6mg",
    // packing: "10 tablets",
    image: "/images/delzit.jpg",
  },
  {
    id: 8,
    name: "DOMEP-PLUS",
    composition: "Rebeprazole 20mg & Domperidone 10mg Tablets",
    // packing: "10 tablets",
    image: "/images/domep.jpg",
  },
  {
    id: 9,
    name: "Glekal 60k",
    composition: "Cholecalcifeol 60,000 IU",
    // packing: "10 tablets",
    image: "/images/glekal.jpg",
  },
  {
    id: 10,
    name: "GLURINE",
    composition: "Glucosamine 150 mg., Diacerein 50mg. & Methyl Sulphonyl Methane 250 mg.",
    // packing: "10 tablets",
    image: "/images/glurine.jpg",
  },
  {
    id: 11,
    name: "WALREX",
    composition: "Dextromethorphan HBr 10mg. & Chlorpheniramine Maleate 2.5mg. /5ml",
    // packing: "10 tablets",
    image: "/images/cough-syrup.jpg",
  },
  {
    id: 12,
    name: "BONGROW",
    composition: "Cissus quadranngularis linn. 2.5% (500 mg.) & Moringa oleifera extract 100mg.",
    // packing: "10 tablets",
    image: "/images/bongrow.jpg",
  },
  {
    id: 13,
    name: "HyLAC",
    composition: "Lactulose 10gm./15ml. Solutions",
    // packing: "10 tablets",
    image: "/images/hylac.jpg",
  },
  {
    id: 14,
    name: "CALFIT-D3",
    composition: "Calcium Citrate 1000 mcg., Magnesium 100 mg., Zinc 4 mg, & Vitamin D3 200 IU Tablets",
    // packing: "10 tablets",
    image: "/images/calfit.jpg",
  },
  {
    id: 15,
    name: "Ciaz-z",
    composition: "Calcium Citrate 1000 mcg., Magnesium 100 mg., Zinc 4 mg, & Vitamin D3 200 IU Tablets",
    // packing: "10 tablets",
    image: "/images/ciaz.jpg",
  },
  {
    id: 16,
    name: "Cinmic Plus",
    composition: "Cinnarizine 20mg. & Dimenhydrinate 40 mg. Tablets",
    // packing: "10 tablets",
    image: "/images/cinmic-plus.jpg",
  },
  {
    id: 17,
    name: "CLAF-625",
    composition: "Amoxycillin 500mg, Potassium Clavulanate 125mg. Tablets",
    // packing: "10 tablets",
    image: "/images/claf.jpg",
  },
  {
    id: 18,
    name: "HyLAC",
    composition: "Lactulose 10gm./15ml. Solutions",
    // packing: "10 tablets",
    image: "/images/constipation.jpg",
  },
  {
    id: 19,
    name: "MEGAB",
    composition: "MECOBALAMIN IP 500 MCG + GABAPENTIN IP 300 MG",
    // packing: "10 tablets",
    image: "/images/megab.jpg",
  },
  {
    id: 20,
    name: "Metha Prime",
    composition: "Methylcobalamin 1500 mcg., Alpha Lipoic Acid 200mg., Pyridoxine Hcl. 3 mg. & Biotin 30 mcg",
    // packing: "10 tablets",
    image: "/images/metha-prime.jpg",
  },
  {
    id: 21,
    name: "MYCONEC",
    composition: "Aceclofenac 100 mg. & Tizanidine 2 mg.",
    // packing: "10 tablets",
    image: "/images/myconec.jpg",
  },
  {
    id: 22,
    name: "Oxydiv",
    composition: "Ginseng, Vitamins, Minerals & Antioxidants Capsules",
    // packing: "10 tablets",
    image: "/images/ovydiv-vitamin.jpg",
  },
  {
    id: 23,
    name: "ZeLIT",
    composition: "Etoricoxib 60 mg. & Thiocolchicoside 4 mg. Tablets",
    // packing: "10 tablets",
    image: "/images/pain-killer.jpg",
  },
  {
    id: 24,
    name: "Tunec",
    composition: "Dicofenac Diethylamine, Methyl Salicylate, Linseed Oil & Menthol",
    // packing: "10 tablets",
    image: "/images/pain-tube.jpg",
  },
  {
    id: 25,
    name: "Pregan-L",
    composition: "Protein with Vitamins & Minerals",
    // packing: "10 tablets",
    image: "/images/pregan.jpg",
  },
  {
    id: 26,
    name: "Rozil-DSR",
    composition: "Rabeprazole 20 mg. & Domperidone 30 mg. SR Capsules",
    // packing: "10 tablets",
    image: "/images/product4.jpg",
  },
  {
    id: 27,
    name: "PROTHROP",
    composition: "Streptococcus Faecalis, Clostridium Butyricum, Bacillus Mesentericus & Lactic Acid Bacillus",
    // packing: "10 tablets",
    image: "/images/prothrop.jpg",
  },
  {
    id: 28,
    name: "Pregan-L Powder",
    composition: "Protein with Vitamins & Minerals",
    // packing: "10 tablets",
    image: "/images/protien-powder.jpg",
  },
  {
    id: 29,
    name: "QCEPH-500",
    composition: "Cefuroxime Axetil 500 mg. Tablets",
    // packing: "10 tablets",
    image: "/images/qceph.jpg",
  },
  {
    id: 30,
    name: "QLOX-OZ",
    composition: "Ofloxacin 200 mg, & Omidazole 500 mg Tablets",
    // packing: "10 tablets",
    image: "/images/qlox.jpg",
  },
  {
    id: 31,
    name: "Rybid",
    composition: "Atorvastatin 20mg. & Vitamin D3 1000 IU Tablets",
    // packing: "10 tablets",
    image: "/images/rybid.jpg",
  },
  {
    id: 32,
    name: "Rytis-200",
    composition: "Hydroxychloroquine 200mg Tablets",
    // packing: "10 tablets",
    image: "/images/rytis.jpg",
  },
  {
    id: 33,
    name: "Thifin Tablets",
    composition: "Terbinafine Tablets IP 250mg",
    // packing: "10 tablets",
    image: "/images/terbinafine.jpg",
  },
  {
    id: 34,
    name: "Tinlet",
    composition: "Aceclofenac 100mg. & Tizanidine 2 mg",
    // packing: "10 tablets",
    image: "/images/tinlet.jpg",
  },
  {
    id: 35,
    name: "Tunib-5",
    composition: "Tofacitinib 5mg",
    // packing: "10 tablets",
    image: "/images/tunib.jpg",
  },
  {
    id: 36,
    name: "Walrex",
    composition: "Dextromethorphan HBr 10mg. & Chlorpheniramine Maleate 2.5 mg./5 ml.",
    // packing: "10 tablets",
    image: "/images/walrex.jpg",
  },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter(product => 
    searchTerm === "" || 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.composition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0E0057] text-center mb-6">
            Our Pharmaceutical Products
          </h1>
          <p className="text-[#0E0057] text-center max-w-2xl mx-auto mb-8">
            Explore our wide range of high-quality pharmaceutical products designed to meet your healthcare needs.
          </p>
          
          {/* Search Section */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products by name or composition..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-4 rounded-full bg-white/90 focus:bg-white border-none outline-none shadow-md text-gray-800 placeholder-gray-400 transition duration-300"
              />
              <svg 
                className="absolute left-4 top-4 w-6 h-6 text-[#0D0056]" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold pl-4 border-l-4 border-[#0D0056]" style={{ color: '#0D0056' }}>
            All Products
          </h2>
          <div className="text-sm bg-blue-50 py-2 px-4 rounded-full text-[#0D0056] font-medium">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </div>
        </div>

        {isLoading ? (
          // Loading skeleton
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md animate-pulse">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 text-gray-500 bg-white rounded-xl shadow-md">
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 13a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
                <p className="text-xl">No products found for "{searchTerm}"</p>
                <button 
                  onClick={() => setSearchTerm("")}
                  className="mt-4 px-6 py-2 bg-[#0D0056] text-white rounded-full hover:bg-[#3D30B0] transition duration-300"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {currentProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="relative h-64 bg-gradient-to-b from-[#0D0056]/5 to-[#0D0056]/10 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <Image 
                          src={product.image}
                          alt={product.name}
                          width={200}
                          height={200}
                          className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-white to-blue-50/30">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-[#3D30B0] transition-colors duration-300" style={{ color: '#0D0056' }}>
                        {product.name}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <span className="w-28 text-sm font-medium text-gray-600">Composition:</span> 
                          <span className="text-gray-800 flex-1">{product.composition}</span>
                        </div>
                        {/* <div className="flex items-center">
                          <span className="w-28 text-sm font-medium text-gray-600">Packing:</span> 
                          <span className="text-gray-800">{product.packing}</span>
                        </div> */}
                      </div>
                    
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="mt-12 flex flex-col sm:flex-row justify-between items-center">
                <div className="text-sm text-gray-500 mb-4 sm:mb-0">
                  Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={prevPage} 
                    disabled={currentPage === 1}
                    className={`px-3 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-[#0D0056] hover:bg-[#0D0056] hover:text-white shadow'} transition-colors duration-300`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {/* Page numbers - show limited numbers for better mobile experience */}
                  {Array.from({ length: Math.min(5, totalPages) }).map((_, idx) => {
                    let pageNumber;
                    
                    if (totalPages <= 5) {
                      // If we have 5 or fewer pages, show all page numbers
                      pageNumber = idx + 1;
                    } else if (currentPage <= 3) {
                      // If we're near the start, show first 5 pages
                      pageNumber = idx + 1;
                    } else if (currentPage >= totalPages - 2) {
                      // If we're near the end, show last 5 pages
                      pageNumber = totalPages - 4 + idx;
                    } else {
                      // Otherwise show current page and 2 on each side
                      pageNumber = currentPage - 2 + idx;
                    }
                    
                    return (
                      <button
                        key={idx}
                        onClick={() => paginate(pageNumber)}
                        className={`w-10 h-10 rounded-lg ${currentPage === pageNumber ? 'bg-[#0D0056] text-white' : 'bg-white text-[#0D0056] hover:bg-blue-50'} font-medium shadow transition-colors duration-300`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                  
                  <button 
                    onClick={nextPage} 
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 rounded-lg ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-[#0D0056] hover:bg-[#0D0056] hover:text-white shadow'} transition-colors duration-300`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      
    </div>
  );
}
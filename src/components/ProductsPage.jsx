"use client";

import { useState } from 'react';
import Image from 'next/image';

// Sample data structure - replace with your actual data
const productCategories = [
  "ANTACID, ANTI-ULCERANT & DIGESTIVE",
  "ANTI-BACTERIAL, ANTI-PROTOZOAL & ANTI-SPASMODIC",
  "ANTIBIOTICS",
  "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC",
  "ANTI-HELMINTIC",
  "CALCIUM SUPPLEMENTS",
  "CARDIAC & ANTI-DIABETIC",
  "DENTAL PRODUCTS",
  "DERMA CARE",
  "HERBAL PRODUCTS",
  "INJECTIONS",
  "MISCELLANEOUS",
  "OPTHAL & ENT CARE",
  "PROTEIN & NUTRITIONAL"
];

// Sample products - replace with your actual data
const products = [
  {
    id: 1,
    name: "Gastrocid",
    composition: "Omeprazole 20mg",
    packing: "10 tablets",
    image: "/images/product1.jpg",
    category: "ANTACID, ANTI-ULCERANT & DIGESTIVE"
  },
  {
    id: 2,
    name: "Ampicillin 500",
    composition: "Ampicillin 500mg",
    packing: "10 capsules",
    image: "/images/product2.jpg",
    category: "ANTIBIOTICS"
  },
  {
    id: 3,
    name: "Allercet",
    composition: "Cetirizine 10mg",
    packing: "10 tablets",
    image: "/images/product3.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 4,
    name: "Allercet",
    composition: "Cetirizine 10mg",
    packing: "10 tablets",
    image: "/images/protien-syrup.jpg",
    category: "PROTEIN & NUTRITIONAL"
  },
  {
    id: 5,
    name: "Redex-Cold",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/redex-cold.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 6,
    name: "Acemin",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/acemin-lct.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 7,
    name: "Delzit",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/delzit.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 8,
    name: "Domep",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/domep.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 9,
    name: "Glekal 60k",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/glekal.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 10,
    name: "Glurine",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/glurine.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 11,
    name: "Walrex",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/cough-syrup.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 12,
    name: "Bongrow",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/bongrow.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 13,
    name: "Hylac",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/hylac.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 14,
    name: "Clafit",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/calfit.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 15,
    name: "Ciaz",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/ciaz.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 16,
    name: "Cinmic Plus",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/cinmic-plus.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 17,
    name: "Claf",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/claf.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 18,
    name: "Constipation",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/constipation.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 18,
    name: "megab",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/megab.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 18,
    name: "Metha Prime",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/metha-prime.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 19,
    name: "MyConec",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/myconec.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 20,
    name: "Oxydiv",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/ovydiv-vitamin.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 21,
    name: "Zelit",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/pain-killer.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 21,
    name: "Tunec",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/pain-tube.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 22,
    name: "Pregan-L",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/pregan.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 22,
    name: "Rozil-DSR",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/product4.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 22,
    name: "Prothrop",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/prothrop.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 23,
    name: "Pregan-L",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/protien-powder.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 24,
    name: "Qceph",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/qceph.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 25,
    name: "Qlox-OZ",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/qlox.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 26,
    name: "Rybid",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/rybid.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 27,
    name: "Rytis-200",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/rytis.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 28,
    name: "Terbafine",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/terbinafine.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 29,
    name: "Tinlet",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/tinlet.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 29,
    name: "Tunec",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/tunec.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 29,
    name: "Tunib",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/tunib.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  {
    id: 29,
    name: "Walrex",
    composition: "Terbinafine Tablets 250mg",
    packing: "10 tablets",
    image: "/images/walrex.jpg",
    category: "ANTI-COLD/ ANTI-HISTAMINIC/ ANTI-ALLERGIC"
  },
  // Add more products for each category as needed
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter products based on selected category and search term
  const filteredProducts = products
    .filter(product => !selectedCategory || product.category === selectedCategory)
    .filter(product => 
      searchTerm === "" || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.composition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12" style={{ color: '#0D0056' }}>
        Our Pharmaceutical Products
      </h1>
      
      {/* Search and Filter Section */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-[#0D0056] to-[#3D30B0] rounded-t-xl p-6 shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products by name, composition, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-white/90 focus:bg-white border-none outline-none shadow-inner text-gray-800 placeholder-gray-400 transition duration-300"
                />
                <svg 
                  className="absolute left-4 top-3.5 w-5 h-5 text-[#0D0056]" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            <div>
              <button 
                onClick={() => setSelectedCategory(null)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  !selectedCategory 
                    ? 'bg-white text-[#0D0056] shadow' 
                    : 'bg-white/30 text-white hover:bg-white/40'
                }`}
              >
                All Products
              </button>
            </div>
          </div>
        </div>
        
        {/* <div className="bg-white rounded-b-xl shadow-md p-6 border-t border-[#0D0056]/10">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: '#0D0056' }}>
            Product Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center ${
                  selectedCategory === category 
                    ? 'bg-[#0D0056] text-white shadow-lg' 
                    : 'bg-gray-100 hover:bg-gray-200 text-[#0D0056] hover:shadow'
                }`}
              >
                {selectedCategory === category && (
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                <span className="truncate">{category}</span>
              </button>
            ))}
          </div>
        </div> */}
      </div>
      
      {/* Products Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold pl-2 border-l-4 border-[#0D0056]" style={{ color: '#0D0056' }}>
            {selectedCategory || "All Products"}
          </h2>
          <div className="text-sm text-gray-500">
            {/* {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found */}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-56 bg-gradient-to-r from-[#0D0056]/10 to-[#0D0056]/5">
                {/* Replace with actual image path */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-white shadow-inner flex items-center justify-center">
                   
                    {/* Uncomment when you have actual images */}
                    <Image 
                      src={product.image}
                      alt={product.name}
                      width={310}
                      height={10}
                      className="object-fit"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0D0056' }}>
                  {product.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-28 text-sm font-medium text-gray-600">Composition:</span> 
                    <span className="text-gray-800">{product.composition}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-28 text-sm font-medium text-gray-600">Packing:</span> 
                    <span className="text-gray-800">{product.packing}</span>
                  </div>
                  <div className="pt-2 mt-2 border-t border-gray-100">
                    <span className="inline-block px-3 py-1 bg-[#0D0056]/10 text-[#0D0056] text-xs font-medium rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 text-gray-500 bg-white rounded-xl shadow-md">
            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 13a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
            <p className="text-xl">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
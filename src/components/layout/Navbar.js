"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from Next.js
import { Menu, X, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden md:block bg-[#0D0056]  text-white py-3">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Left Section */}
          <div className="flex space-x-8 items-center">
            <div className="flex items-center">
              <Phone size={18} className="mr-2" />
              <div>
                <span className="font-medium">Call us now</span>
                <p className="text-sm">+91 99826 03336</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin size={18} className="mr-2" />
              <div>
                <span className="font-medium">29-30, Padmavati Colony,</span>
                <p className="text-sm">Nirman Nagar, Jaipur, Rajasthan</p>
              </div>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Youtube size={20} />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Navbar */}
      <div className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <Image
                src="/images/logo.png" // Replace with the path to your logo
                alt="Logo"
                width={180} // Increased width for better visibility
                height={60} // Increased height for better visibility
                className="object-contain"
                priority // Add priority for LCP optimization
              />
            </Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div className="flex items-center space-x-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
            >
                <Link href="/" className="text-gray-700 font-medium hover:text-[#0D0056] transition-colors">
                HOME
              </Link>
             
              <Link href="/pharmaceutical-company-jaipur" className="text-gray-700 font-medium hover:text-[#0D0056] transition-colors">
                OUR COMPANY
              </Link>
              {/* <Link href="/marketing" className="text-gray-700 font-medium hover:text-[#0D0056] transition-colors">
                MARKETING SUPPORT
              </Link> */}
              <Link href="/blog" className="text-gray-700 font-medium hover:text-[#0D0056] transition-colors">
                BLOG
              </Link>
              <Link href="/pharmaceutical-products-jaipur" className="text-gray-700 font-medium hover:text-[#0D0056] transition-colors">
                PRODUCTS
              </Link>
              <Link href="/faq-morganics-jaipur" className="text-gray-700 font-medium hover:text-[#0D0056] transition-colors">
                FAQ
              </Link>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/inquiry-morganics-jaipur" className="bg-[#0D0056] text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors shadow-md">
                  MAKE AN INQUIRY
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-gray-800 p-1 rounded-md focus:outline-none"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <Menu size={26} />
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            {/* Menu Content */}
            <motion.div 
              className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-xl overflow-y-auto"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link href="/">
                      <Image
                        src="/images/logo.png" // Replace with the path to your logo
                        alt="Logo"
                        width={140} // Adjusted width for mobile
                        height={50} // Adjusted height for mobile
                        className="object-contain"
                        priority // Add priority for LCP optimization
                      />
                    </Link>
                  </motion.div>
                  <motion.button 
                    onClick={toggleMenu}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-800 p-1 rounded-md hover:bg-gray-100"
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                
                {/* Mobile Menu Links */}
                <div className="flex flex-col">
                  <motion.div
                    className="flex flex-col space-y-6"
                    initial="closed"
                    animate="open"
                    variants={{
                      open: {
                        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                      },
                      closed: {
                        transition: { staggerChildren: 0.05, staggerDirection: -1 }
                      }
                    }}
                  >
                    {[
                       { href: "/", label: "HOME" },
                      { href: "/pharmaceutical-company-jaipur", label: "OUR COMPANY" },
                      // { href: "/marketing", label: "MARKETING SUPPORT" },
                      { href: "/blog", label: "BLOG" },
                      { href: "/pharmaceutical-products-jaipur", label: "PRODUCTS" },
                      { href: "/faq-morganics-jaipur", label: "FAQ" },
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        variants={{
                          open: { opacity: 1, y: 0 },
                          closed: { opacity: 0, y: 20 }
                        }}
                      >
                        <Link 
                          href={item.href} 
                          className="text-gray-700 font-medium hover:text-[#0D0056] transition-colors py-3 border-b border-gray-100 block"
                          onClick={toggleMenu}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                    
                    <motion.div
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 }
                      }}
                      className="mt-4"
                    >
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                        <Link 
                          href="/inquiry-morganics-jaipur" 
                          className="bg-[#0D0056]  text-white px-6 py-3 rounded-full font-medium text-center block shadow-md hover:shadow-lg transition-all"
                          onClick={toggleMenu}
                        >
                          MAKE AN INQUIRY
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Contact Info in Mobile Menu */}
                <motion.div 
                  className="mt-12 space-y-6 text-gray-700 border-t border-gray-100 pt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center">
                    <div className="bg-[#0D0056] bg-opacity-10 p-2 rounded-full mr-3">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="font-medium">Call Center 9982603336</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-[#0D0056]  bg-opacity-10 p-2 rounded-full mr-3">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="font-medium">29-30, Padmavati Colony,
                      Nirman Nagar, Jaipur, Rajasthan</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
"use client";
import React, { useState } from 'react';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Product Information',
    message: '',
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    status: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ status: '', message: '' });

    try {
      // Replace 'YOUR_ACCESS_KEY' with your actual Web3Forms access key
      const apiKey = 'a8015a3c-39b6-45c7-b945-58d6d6d8c20e';
      
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', apiKey);
      formDataToSend.append('name', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('inquiry_type', formData.inquiryType);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('subject', `M Organics Inquiry: ${formData.inquiryType}`);
      
      // Optional: Add your email to receive a copy
      formDataToSend.append('from_name', 'M Organics Website');
      formDataToSend.append('reply_to', formData.email);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus({
          status: 'success',
          message: 'Thank you for your inquiry. We will get back to you soon!'
        });
        // Reset form after successful submission
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          inquiryType: 'Product Information',
          message: '',
          agreeToTerms: false
        });
      } else {
        setSubmitStatus({
          status: 'error',
          message: data.message || 'Something went wrong. Please try again later.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        status: 'error',
        message: 'An unexpected error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Inquiry Form Section */}
      <div id="inquiry-form" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0E0057] mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Have questions about our products or services? Fill out the form below and our team will get back to you promptly.</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-[#0E0057] py-6 px-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-white">M Organics</h1>
              {/* <span className="text-blue-200 text-sm">Pharmaceutical Excellence</span> */}
            </div>
          </div>
          
          {/* Form Content */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Product Inquiry</h2>
            <p className="text-gray-600 mb-8">
              Complete the form below to inquire about our pharmaceutical products and services. 
              Our team will respond to your inquiry within 24-48 business hours.
            </p>
            
            {submitStatus.status === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                {submitStatus.message}
              </div>
            )}
            
            {submitStatus.status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Web3Forms Hidden Input */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
              <input type="hidden" name="subject" value="M Organics Website Inquiry" />
              <input type="hidden" name="from_name" value="M Organics Website" />
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-[#0E0057] focus:border-[#0E0057]"
                    placeholder="Enter Your Name"
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:ring-[#0E0057] focus:border-[#0E0057]"
                    placeholder="youremail@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:ring-[#0E0057] focus:border-[#0E0057]"
                  placeholder="+91 9876543210"
                />
              </div>
              
              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                  Inquiry Type*
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:ring-[#0E0057] focus:border-[#0E0057] bg-white"
                >
                  <option value="Product Information">Product Information</option>
                  <option value="Distribution Partnership">Distribution Partnership</option>
                  <option value="Research Collaboration">Research Collaboration</option>
                  <option value="Career Inquiry">Career Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-[#0E0057] focus:border-[#0E0057]"
                  placeholder="Please describe your inquiry in detail..."
                ></textarea>
              </div>
              
              {/* Terms and Conditions */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-[#0E0057] border-gray-300 rounded focus:ring-[#0E0057]"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                    I agree to the <a href="#" className="text-[#0E0057] hover:text-blue-800">Terms and Conditions</a> and <a href="#" className="text-[#0E0057] hover:text-blue-800">Privacy Policy</a>*
                  </label>
                </div>
              </div>
              
              {/* Web3Forms Honeypot Field to Prevent Spam */}
              <div className="hidden">
                <input type="text" name="botcheck" />
              </div>
              
              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-[#0E0057] text-white font-medium rounded-lg shadow-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </div>
            </form>
          </div>
          
          {/* Footer */}
          <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              © 2025 M Organics Pharmaceuticals. All information submitted through this form is kept confidential.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-[#0E0057] py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Partners Say</h2>
            <p className="text-blue-200 max-w-3xl mx-auto">Hear from healthcare professionals and partners about their experience working with M Organics.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "M Organics has been an invaluable partner in our hospital's pharmaceutical needs. Their products consistently meet the highest standards of quality and efficacy.",
                author: "Dr. Sarah Johnson",
                title: "Chief of Medicine, Metro General Hospital"
              },
              {
                quote: "The research team at M Organics has shown exceptional innovation in developing treatments for rare diseases. Their commitment to scientific advancement is commendable.",
                author: "Prof. Michael Chen",
                title: "Research Director, Global Health Institute"
              },
              {
                quote: "As a distributor, I've found M Organics to be extremely reliable and professional. Their supply chain management is exemplary and their products are always in high demand.",
                author: "James Rodriguez",
                title: "CEO, MediSupply International"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-blue-900 bg-opacity-50 p-6 rounded-xl">
                <svg className="h-8 w-8 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-blue-100 mb-4">{testimonial.quote}</p>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-blue-300 text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

          {/* Services Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0E0057] mb-4">Our Pharmaceutical Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Discover our comprehensive range of pharmaceutical solutions designed to meet diverse healthcare needs and challenges.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#0E0057]">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0E0057]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0E0057] mb-4">Research & Development</h3>
            <p className="text-gray-600">Our cutting-edge R&D department is constantly working on breakthrough medications and treatments for complex health conditions.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#0E0057]">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0E0057]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0E0057] mb-4">Quality Control</h3>
            <p className="text-gray-600">We maintain the highest standards of quality and safety in all our products, exceeding industry regulations and expectations.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#0E0057]">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0E0057]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0E0057] mb-4">Global Distribution</h3>
            <p className="text-gray-600">Our extensive distribution network ensures our life-saving medications reach patients in over 75 countries worldwide.</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0E0057]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-1 text-gray-500">+91 99826 03336</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0E0057]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-1 text-gray-500">info.morganics@gmail.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0E0057]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Location</h3>
              <p className="mt-1 text-gray-500">29,30 Padmavati Colony,
              Neerman Nagar, <br />Jaipur, Rajasthan</p>
            </div>
          </div>
        </div>
      </div>

     
          </div>
        );
    };

    export default InquiryForm;
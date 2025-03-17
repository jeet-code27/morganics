import React from 'react';
import Image from 'next/image';
import HealthBanner from './HealthBanner';

const MorganicsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Our Story */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-indigo-950 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Morganics Pharmaceuticals began as a small research lab in the heart of Jaipur 
                  with a vision to transform regional healthcare through accessible pharmaceutical solutions.
                </p>
                <p className="mb-4">
                  What started as a team of just five dedicated local scientists has grown into Jaipur's leading 
                  pharmaceutical organization with over 250 employees. Throughout our journey, we've maintained our 
                  commitment to scientific integrity and community-centered innovation.
                </p>
                <p className="mb-4">
                  Our research focuses on developing treatments that address the unique healthcare challenges 
                  faced by the people of Rajasthan, including solutions for respiratory conditions, digestive health, 
                  diabetic care, and traditional Ayurvedic medicines enhanced by modern scientific methodologies.
                </p>
                <p>
                  Today, Morganics stands as Jaipur's pharmaceutical pride, combining scientific expertise with deep 
                  understanding of local health needs to improve the wellbeing of our community.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/morganics-pharmaceuticals-jaipur.jpg" 
                alt="Morganics Jaipur Laboratory" 
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
          
      <HealthBanner/>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-extrabold text-indigo-950 text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Scientific Excellence",
              description: "We pursue rigorous science while integrating traditional knowledge, ensuring our products meet the highest quality standards while remaining contextually relevant for our region.",
              icon: "/images/scientific.png"
            },
            {
              title: "Community Health Focus",
              description: "Every decision we make is guided by the potential impact on our local community. We develop products specifically addressing Jaipur's unique health challenges.",
              icon: "/images/community-icon.png"
            },
            {
              title: "Integrity & Transparency",
              description: "We operate with unwavering integrity in all aspects of our business, building trust with our neighbors, local healthcare providers, and regional authorities.",
              icon: "/images/integrity-icon.png"
            },
            {
              title: "Local Collaboration",
              description: "We believe breakthroughs happen when we collaborate. We partner with Jaipur's medical institutions, universities, and traditional practitioners to create innovative solutions.",
              icon: "/images/collaboration.png"
            },
            {
              title: "Regional Accessibility",
              description: "We are committed to making our medicines affordable and accessible to everyone in Jaipur and the surrounding regions, regardless of their economic status.",
              icon: "/images/accessibility.png"
            },
            {
              title: "Cultural Integration",
              description: "We honor Rajasthan's rich heritage by integrating traditional medicinal knowledge with modern pharmaceutical practices, creating treatments that resonate with local health beliefs.",
              icon: "/images/cultural-icon.png"
            }
          ].map((value, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-indigo-600 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-3 flex-shrink-0">
                  <Image src={value.icon} width={40} height={40} alt={value.title} />
                </div>
                <h3 className="text-xl font-bold text-indigo-950">{value.title}</h3>
              </div>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Research Focus */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-indigo-950 text-center mb-12">Research Focus Areas</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4">
                  <Image src="/images/respiratory.png" width={48} height={48} alt="Respiratory Health" />
                </div>
                <h3 className="text-2xl font-bold text-indigo-950">Respiratory Health</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Jaipur's geographical location and climate present unique respiratory challenges for its residents. 
                Our respiratory health research focuses on developing treatments for asthma, allergies, and other 
                respiratory conditions specific to our semi-arid climate and local environmental factors.
              </p>
              <p className="text-gray-600">
                We work closely with local pulmonologists to understand seasonal variations in respiratory issues 
                and develop targeted solutions that provide relief to our community members throughout the year.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4">
                  <Image src="/images/digestive-icon.png" width={48} height={48} alt="Digestive Wellness" />
                </div>
                <h3 className="text-2xl font-bold text-indigo-950">Digestive Wellness</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Regional dietary patterns and water quality in Rajasthan present specific digestive health challenges. 
                Our digestive wellness program is dedicated to creating solutions for common gastrointestinal issues 
                faced by the local population, from prevention to treatment.
              </p>
              <p className="text-gray-600">
                By combining modern gastroenterology with traditional digestive remedies popular in Rajasthani 
                households, we've developed effective treatments that are culturally acceptable and scientifically 
                validated.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4">
                  <Image src="/images/diabetes-icon.png" width={48} height={48} alt="Diabetes Management" />
                </div>
                <h3 className="text-2xl font-bold text-indigo-950">Diabetes Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                With diabetes prevalence rising in our region, our research team is focused on developing 
                affordable diabetes management solutions tailored to local dietary habits and lifestyle factors 
                common in Jaipur and surrounding rural areas.
              </p>
              <p className="text-gray-600">
                Our approach integrates blood sugar regulation with comprehensive lifestyle education, creating 
                holistic solutions that are sustainable for long-term diabetes management within our community 
                context.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4">
                  <Image src="/images/ayurveda-icon.png" width={48} height={48} alt="Modern Ayurveda" />
                </div>
                <h3 className="text-2xl font-bold text-indigo-950">Modern Ayurveda</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Honoring Rajasthan's rich traditional medicine heritage, our Modern Ayurveda division bridges 
                ancient wisdom with contemporary pharmaceutical practices. We scientifically validate traditional 
                remedies that have been used for generations in Jaipur households.
              </p>
              <p className="text-gray-600">
                Our laboratory employs advanced analytical techniques to standardize herbal formulations, ensuring 
                consistent potency and safety while preserving the holistic approach that makes Ayurvedic medicine 
                so valuable to our community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Local Presence */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-indigo-950 text-center mb-6">Our Jaipur Facility</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Proudly headquartered in Jaipur, our state-of-the-art facility combines cutting-edge research capabilities 
            with efficient manufacturing to serve our community with pride and precision.
          </p>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-96">
                <Image 
                  src="/images/facility-exterior.jpg" 
                  alt="Morganics Jaipur Facility" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-indigo-950 mb-4">Integrated Research & Manufacturing Center</h3>
                <p className="text-gray-600 mb-6">
                  Our comprehensive facility houses cutting-edge research laboratories, GMP-certified manufacturing units, 
                  and our corporate offices all under one roof, fostering collaboration and innovation.
                </p>
                <div className="flex items-start mb-4">
                  <div className="w-5 h-5 mt-1 mr-3">
                    <Image src="/images/map.png" width={20} height={20} alt="Location" />
                  </div>
                  <p className="text-gray-700">29-30, Padmavati Colony,
                  Nirman Nagar, Jaipur, Rajasthan</p>
                </div>
                <div className="flex items-start mb-4">
                  <div className="w-5 h-5 mt-1 mr-3">
                    <Image src="/images/telephone.png" width={20} height={20} alt="Phone" />
                  </div>
                  <p className="text-gray-700">+91 99826 03336</p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 mt-1 mr-3">
                    <Image src="/images/email.png" width={20} height={20} alt="Email" />
                  </div>
                  <p className="text-gray-700">info.morganics@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Initiatives */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 mt-10 lg:mt-0">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/community-health-camp.jpg" 
                alt="Morganics Community Health Initiative" 
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-extrabold text-indigo-950 mb-6">Our Commitment to Jaipur</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                As Jaipur's homegrown pharmaceutical company, we're deeply invested in the health and wellbeing of our 
                community. Through our Morganics Community Health Initiative, we organize regular health camps in 
                urban neighborhoods and surrounding villages, providing free health screenings and basic medicines.
              </p>
              <p className="mb-4">
                Our partnership with local schools promotes health education and science literacy, inspiring the 
                next generation of Jaipur's scientists and healthcare providers. We offer scholarships to talented 
                local students pursuing pharmaceutical and medical education.
              </p>
              <p>
                During regional health emergencies, from seasonal outbreaks to the recent pandemic, our emergency 
                response team works alongside local authorities to ensure medicine availability and distribution. 
                We're not just a company in Jaipur - we're a company of Jaipur, growing together with our community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      {/* <div className="bg-gradient-to-b from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-indigo-950 text-center mb-8">Connect With Us</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Have questions about our products or interested in partnership opportunities?
            Our team is ready to assist you.
          </p>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-indigo-950 mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 mt-1 mr-4">
                      <Image src="/images/icons/email-icon.svg" width={24} height={24} alt="Email" />
                    </div>
                    <div>
                      <p className="font-medium text-indigo-950 mb-1">Email Us</p>
                      <p className="text-gray-600">info@morganics.in</p>
                      <p className="text-gray-600">careers@morganics.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 mt-1 mr-4">
                      <Image src="/images/icons/phone-icon.svg" width={24} height={24} alt="Phone" />
                    </div>
                    <div>
                      <p className="font-medium text-indigo-950 mb-1">Call Us</p>
                      <p className="text-gray-600">+91-145-XXXX-XXX (Customer Support)</p>
                      <p className="text-gray-600">+91-145-XXXX-XXX (Media Relations)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 mt-1 mr-4">
                      <Image src="/images/icons/location-icon.svg" width={24} height={24} alt="Address" />
                    </div>
                    <div>
                      <p className="font-medium text-indigo-950 mb-1">Visit Us</p>
                      <p className="text-gray-600">22 Civil Lines, Near Collectorate,</p>
                      <p className="text-gray-600">Jaipur, Rajasthan - 305001</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center transition-colors hover:bg-indigo-200">
                    <Image src="/images/icons/facebook-icon.svg" width={20} height={20} alt="Facebook" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center transition-colors hover:bg-indigo-200">
                    <Image src="/images/icons/twitter-icon.svg" width={20} height={20} alt="Twitter" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center transition-colors hover:bg-indigo-200">
                    <Image src="/images/icons/linkedin-icon.svg" width={20} height={20} alt="LinkedIn" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center transition-colors hover:bg-indigo-200">
                    <Image src="/images/icons/instagram-icon.svg" width={20} height={20} alt="Instagram" />
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-indigo-950 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 rounded bg-indigo-900 border border-indigo-800 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 rounded bg-indigo-900 border border-indigo-800 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 rounded bg-indigo-900 border border-indigo-800 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="How can we help?"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      rows="4" 
                      className="w-full px-4 py-2 rounded bg-indigo-900 border border-indigo-800 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
    </div>
  );
};

export default MorganicsPage;
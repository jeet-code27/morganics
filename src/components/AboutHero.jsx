import React from 'react';

const AboutHero = ({ 
  bannerImage = '/api/placeholder/1920/600',
  title = 'Morgaincs',
  subtitle = 'Pioneering innovative tech solutions for a smarter future',
  breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' }
  ]
}) => {
  return (
    <div className="relative w-full ">
      {/* Banner Image Container */}
      <div className="relative w-full h-96">
        {/* Background Image */}
        <img
          src={bannerImage}
          alt={`${title} Banner`}
          className="w-full h-full object-cover"
        />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center  text-white bg-clip-text">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-center max-w-2xl px-4 mb-6 text-white bg-clip-text">
            {subtitle}
          </p>
          
          {/* Centered Breadcrumb Navigation */}
          <div className="flex items-center justify-center space-x-2 text-lg font-semibold bg-white/80 px-6 py-2 rounded-full">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.path}>
                <a 
                  href={crumb.path}
                  className="text-gray-800 hover:text-cyan-600 text-blue-900 transition-colors duration-200"
                >
                  {crumb.label}
                </a>
                {index < breadcrumbs.length - 1 && (
                  <span className="text-gray-600 font-bold">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
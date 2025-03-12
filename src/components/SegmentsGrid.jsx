import React from 'react';

// Define the segments data
const segments = [
  { 
    name: 'Analgesic', 
    icon: '/images/analgesic.jpg', 
    description: 'Pain relief medications' 
  },
  { 
    name: 'Antacid', 
    icon: '/images/antacid.jpg', 
    description: 'Acid reflux and heartburn treatment' 
  },
  { 
    name: 'Anti-Bacterial', 
    icon: '/images/bacteria.jpg', 
    description: 'Antibacterial medications' 
  },
  { 
    name: 'Anti-Cold', 
    icon: '/images/anti-cold.jpg', 
    description: 'Cold and flu remedies' 
  },
  { 
    name: 'Anti-Helminthic', 
    icon: '/images/anti-hemtic.jpg', 
    description: 'Medications for parasitic worms' 
  },
  { 
    name: 'Antibiotics', 
    icon: '/images/antibiotic.jpg', 
    description: 'Infection fighting medications' 
  },
  { 
    name: 'Calcium Supplements', 
    icon: '/images/calcium.jpg', 
    description: 'Bone and health support' 
  },
  { 
    name: 'Dental Products', 
    icon: '/images/dental.jpg', 
    description: 'Oral health solutions' 
  },
  { 
    name: 'Derma Care', 
    icon: '/images/derma.jpg', 
    description: 'Skin health treatments' 
  },
  { 
    name: 'Ophthal and ENT Care', 
    icon: '/images/ent.jpg', 
    description: 'Eye and ear care solutions' 
  }
];

const SegmentsGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <h2 className="text-4xl font-extrabold text-center mb-12 pb-2 bg-clip-text text-[#0E0057] animate-gradient-x">
        Our Medical Segments
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {segments.map((segment, index) => (
          <div 
            key={index} 
            className="relative group cursor-pointer"
          >
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
              {/* Background Image */}
              <img 
                src={segment.icon} 
                alt={segment.name} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Hover Overlay with Transparent Mirror Effect */}
              <div className="absolute inset-0  bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <div className="bg-white bg-opacity-40 rounded-xl p-4 mx-4 text-center shadow-lg border border-white border-opacity-30">
                  <p className="text-blue-900 text-sm font-semibold">
                    {segment.description}
                  </p>
                </div>
              </div>
              
              {/* Segment Name */}
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-70 py-3 text-center">
                <h3 className="text-white text-sm font-semibold bg-[#0E0057] bg-opacity-50 px-2 py-1 rounded">
                  {segment.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SegmentsGrid;
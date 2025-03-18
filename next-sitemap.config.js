const fs = require('fs');
const path = require('path');

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), 'public', 'blogs.json');
  try {
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const blogs = JSON.parse(fileData);
    return blogs;
  } catch (error) {
    console.error('Error reading blogs.json:', error);
    return [];
  }
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Your website URL
  siteUrl: 'https://morganics.in',
  
  // Generate robots.txt file
  generateRobotsTxt: true,
  
  // Output directory (default is 'public')
  outDir: 'public',
  
  // Change frequency options for all pages
  changefreq: 'daily',
  
  // Priority for all pages (between 0.0 and 1.0)
  priority: 0.7,
  
  // Exclude specific paths
  exclude: [
    '/admin/*',
    '/private/*',
    '/api/*',
    '/dashboard',
    '/login',
    '/register',
    '/404'
  ],
  
  // Additional paths to include
  additionalPaths: async (config) => {
    const blogs = getBlogs();
    
    // Create paths for each blog post based on its slug
    const blogPaths = blogs.map(blog => ({
      loc: `/blog/${blog.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: blog.updatedAt || blog.date || new Date().toISOString(),
    }));
    
    return [
      ...blogPaths,
      {
        loc: '/additional-page',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    ];
  },
  
  // Transform the default config for specific pages
  transform: async (config, path) => {
    // Custom handling for specific paths
    if (path.includes('/blog/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Give home page highest priority
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Return default transformation for all other paths
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
  
  // Robots.txt options
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private', '/api']
      },
      // Add policy for specific bots if needed
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/no-google']
      }
    ],
  }
};
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
      return [
        {
          loc: '/additional-page',
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: new Date().toISOString(),
        }
      ]
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
// app/sitemap.js
const URL = "https://morganics.in";

export default async function sitemap() {
  const routes = [
    "",
    "/pharmaceutical-company-jaipur",
    "/blog",
    "/pharmaceutical-products-jaipur",
    "/faq-morganics-jaipur",
    "/inquiry-morganics-jaipur",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: getChangeFrequency(route),
    priority: getPriority(route),
  }));

  // Dynamic blog posts
  const blogPosts = [
    "/blog/morganics-pharmaceuticals-in-jaipur-leading-healthcare-solutions",
    "/blog/morganics-pharmaceuticals-health-wellness-jaipur",
  ].map((post) => ({
    url: `${URL}${post}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...routes, ...blogPosts];
}

// Helper functions for SEO optimization
function getPriority(route) {
  if (route === "") return 1.0; // Homepage highest priority
  if (route === "/pharmaceutical-company-jaipur") return 0.9;
  if (route === "/pharmaceutical-products-jaipur") return 0.9;
  if (route === "/inquiry-morganics-jaipur") return 0.85;
  return 0.7;
}

function getChangeFrequency(route) {
  if (route === "/blog") return "daily";
  if (route === "/pharmaceutical-products-jaipur") return "weekly";
  return "monthly";
}
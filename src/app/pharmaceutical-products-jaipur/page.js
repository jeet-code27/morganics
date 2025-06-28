import AboutHero from "@/components/AboutHero";
import ProductsPage from "@/components/ProductsPage";

export const metadata = {
  title: "Jaipur's Best Pharma Product Range – M Organics",
  description: "Discover M Organics' premium pharmaceutical products manufactured in our Jaipur facility. Wide range of tablets, capsules, syrups & injectables. Trusted quality since 2000.",
  keywords: [
    "pharma products Jaipur",
    "best medicine manufacturers",
    "M Organics products",
    "GMP certified drugs",
    "pharmaceutical tablets Rajasthan",
    "trusted medicine suppliers"
  ],
  authors: [
    { 
      name: "M Organics",
      url: "https://morganics.in" 
    }
  ],
  alternates: {
    canonical: "https://morganics.in/pharmaceutical-products-jaipur",
  },
  openGraph: {
    title: "Jaipur's Best Pharma Product Range – M Organics",
    description: "GMP-certified pharmaceutical products manufactured in Jaipur",
    url: "https://morganics.in/pharmaceutical-products-jaipur",
    images: [
      {
        url: "https://morganics.in/images/product-range-og.jpg",
        width: 1200,
        height: 630,
        alt: "M Organics Pharmaceutical Product Range Display",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaipur's Best Pharma Product Range – M Organics",
    description: "Premium quality medicines manufactured in Rajasthan",
    images: ["https://morganics.in/images/product-range-twitter.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Products() {
    return(
        <>
           <AboutHero
          bannerImage="/images/banner.jpg"
          title="M Organics"
          subtitle="Pioneering healthcare solutions for a better tomorrow."
          breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Our Products', path: '/products' }
         ]}
      />
      <ProductsPage/>
        </>
    )
}
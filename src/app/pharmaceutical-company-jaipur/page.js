import AboutHero from "@/components/AboutHero";
import MorganicsPage from "@/components/MorganicsPage";


export const metadata = {
  title: "Top Pharma Company in Jaipur | M Organics",
  description: "Discover why M Organics is Jaipur's trusted pharmaceutical company. We specialize in high-quality pharma products with GMP-certified manufacturing in Rajasthan.",
  keywords: [
    "pharmaceutical company Jaipur",
    "top pharma company Rajasthan",
    "M Organics company profile",
    "GMP certified pharma company",
    "best drug manufacturers Jaipur",
    "pharmaceutical suppliers India"
  ],
   authors: [{ name: "M Organics" }],
  alternates: {
    canonical: "https://morganics.in/pharmaceutical-company-jaipur",
  },
  openGraph: {
    title: "Top Pharma Company in Jaipur | M Organics",
    description: "Jaipur's leading GMP-certified pharmaceutical manufacturer since 2000",
    url: "https://morganics.in/pharmaceutical-company-jaipur",
    images: [
      {
        url: "https://morganics.in/images/company-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "M Organics Pharmaceutical Manufacturing Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Pharma Company in Jaipur | M Organics",
    description: "Pioneering pharmaceutical solutions from Rajasthan to all India",
    images: ["https://morganics.in/images/company-twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Company() {

    return(
        <>
            <AboutHero
          bannerImage="/images/banner.jpg"
          title="M Organics"
          subtitle="Pioneering healthcare solutions for a better tomorrow."
          breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Our Company', path: '/company' }
         ]}
      />
      <MorganicsPage/>
        </>
    )
}
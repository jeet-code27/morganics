import CompanyStats from "@/components/CompanyStats";
import FAQComponent from "@/components/FAQComponent";
import FeaturedProductsCarousel from "@/components/FeaturedProductsCarousel";
import HeroSection from "@/components/HeroSection";
import SegmentsGrid from "@/components/SegmentsGrid";
import WhoWeAre from "@/components/WhoWeAre";

export const metadata = {
  title: "Best Pharmaceutical Company in Jaipur - M Organics",
  description: "M Organics is a leading pharmaceutical company in Jaipur, Rajasthan, offering high-quality pharmaceutical products and healthcare solutions. Contact us at +91 99826 03336.",
  keywords: [
    "pharmaceutical company Jaipur",
    "best pharma company Rajasthan",
    "M Organics",
    "pharmaceutical products",
    "healthcare solutions",
    "pharma manufacturers Jaipur"
  ],
  authors: [{ name: "M Organics" }],
  openGraph: {
    title: "Best Pharmaceutical Company in Jaipur - M Organics",
    description: "M Organics is a leading pharmaceutical company in Jaipur, Rajasthan, offering high-quality pharmaceutical products and healthcare solutions.",
    url: "https://morganics.in/",
    siteName: "M Organics",
    images: [
      {
        url: "https://morganics.in/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "M Organics Pharmaceutical Company",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pharmaceutical Company in Jaipur - M Organics",
    description: "Leading pharma company in Jaipur providing quality healthcare solutions",
    images: ["https://morganics.in/images/twitter-card.jpg"],
  },
  alternates: {
    canonical: "https://morganics.in/",
  },
  metadataBase: new URL("https://morganics.in/"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <CompanyStats />
      <SegmentsGrid />
      <FeaturedProductsCarousel />
      <FAQComponent />
    </div>
  );
}
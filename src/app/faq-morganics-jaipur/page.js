import AboutHero from "@/components/AboutHero";
import FAQComponent from "@/components/FAQComponent";

export const metadata = {
  title: "FAQs – M Organics | Top Pharma Company Jaipur",
  description: "Find answers to common questions about M Organics' pharmaceutical products, manufacturing processes, quality standards, and ordering. Trusted pharma solutions from Jaipur.",
  keywords: [
    "pharma company FAQs",
    "M Organics questions",
    "medicine manufacturing queries",
    "pharmaceutical standards Jaipur",
    "drug supplier FAQs",
    "GMP certification questions"
  ],
  authors: [{ name: "M Organics" }],
  alternates: {
    canonical: "https://morganics.in/faq-morganics-jaipur",
  },
  openGraph: {
    title: "FAQs – M Organics | Top Pharma Company Jaipur",
    description: "Get answers about our pharmaceutical products and services",
    url: "https://morganics.in/faq-morganics-jaipur",
    images: [{
      url: "https://morganics.in/images/faq-og-image.jpg",
      width: 1200,
      height: 630,
      alt: "M Organics Pharmaceutical FAQs",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs – M Organics | Top Pharma Company Jaipur",
    description: "Your pharmaceutical questions answered by Jaipur's trusted manufacturer",
    images: ["https://morganics.in/images/faq-twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Faq() {
    return(
        <>
           <AboutHero
          bannerImage="/images/banner.jpg"
          title="M Organics"
          subtitle="Pioneering healthcare solutions for a better tomorrow."
          breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'FAQ', path: '/faq' }
         ]}
      />
      <div className="hidden">Best Pharmaceutical Company in Jaipur - M Organics </div>
      <FAQComponent/>
        </>
    )
}

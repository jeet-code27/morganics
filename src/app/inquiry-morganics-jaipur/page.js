import AboutHero from "@/components/AboutHero";
import InquiryForm from "@/components/InquiryForm";

export const metadata = {
  title: "Top Pharma Company Jaipur - M Organics Inquiry Form",
  description: "Contact Jaipur's leading pharmaceutical manufacturer. Submit your product inquiry, bulk order request, or partnership proposal. We respond within 24 hours.",
  keywords: [
    "pharma company contact Jaipur",
    "medicine manufacturer inquiry",
    "M Organics contact form",
    "bulk drug suppliers Rajasthan",
    "GMP certified pharma inquiry",
    "custom pharmaceutical manufacturing"
  ],
  authors: [{ name: "M Organics" }],
  alternates: {
    canonical: "https://morganics.in/inquiry-morganics-jaipur",
  },
  openGraph: {
    title: "Top Pharma Company Jaipur | M Organics Inquiry Form",
    description: "Get in touch with Jaipur's trusted pharmaceutical solutions provider",
    url: "https://morganics.in/inquiry-morganics-jaipur",
    images: [{
      url: "https://morganics.in/images/inquiry-og-image.jpg",
      width: 1200,
      height: 630,
      alt: "M Organics Pharmaceutical Inquiry Team",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Top Pharma Manufacturer in Jaipur | M Organics",
    description: "Inquiry form for bulk orders and partnerships",
    images: ["https://morganics.in/images/inquiry-twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InquiryPage() {
  return(
    <>
         <AboutHero
          bannerImage="/images/banner.jpg"
          title="M Organics"
          subtitle="Pioneering healthcare solutions for a better tomorrow."
          breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Make an Inquiry', path: '/inquiry' }
         ]}
      />                    
    <InquiryForm/>        
    </>
  )
}
import AboutHero from "@/components/AboutHero";
import InquiryForm from "@/components/InquiryForm";

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
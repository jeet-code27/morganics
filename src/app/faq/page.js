import AboutHero from "@/components/AboutHero";
import FAQComponent from "@/components/FAQComponent";

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
      <FAQComponent/>
        </>
    )
}

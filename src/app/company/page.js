import AboutHero from "@/components/AboutHero";
import BenefitsSection from "@/components/BenefitsSection";
import HealthBanner from "@/components/HealthBanner";
import MorganicsPage from "@/components/MorganicsPage";

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
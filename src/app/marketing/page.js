import AboutHero from "@/components/AboutHero";

export default function Marketing() {
return(
    <>
       <AboutHero
          bannerImage="/images/banner.jpg"
          title="M Orgaincs"
          subtitle="Pioneering healthcare solutions for a better tomorrow."
          breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Marketing Support', path: '/marketing' }
         ]}
      />
      
    </>
)
}
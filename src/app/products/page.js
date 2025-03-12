import AboutHero from "@/components/AboutHero";
import ProductsPage from "@/components/ProductsPage";

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
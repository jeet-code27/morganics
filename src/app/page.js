import CompanyStats from "@/components/CompanyStats";
import FAQComponent from "@/components/FAQComponent";
import FeaturedProductsCarousel from "@/components/FeaturedProductsCarousel";
import HeroSection from "@/components/HeroSection";
import SegmentsGrid from "@/components/SegmentsGrid";
import WhoWeAre from "@/components/WhoWeAre";


export default function Home() {
  return (
  <div>
    <HeroSection/>
    <WhoWeAre/>
    <CompanyStats/>
    <SegmentsGrid/>
    <FeaturedProductsCarousel/>
    <FAQComponent/>
  </div>
  );
}

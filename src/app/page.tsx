
import TopBar from "./componants/topbar";
import Header from "./componants/Header";
import FeaturedProducts from "./componants/FeatureProdect";
import LatestProducts from "./componants/LatestProduct";
import TrendingProducts from "./componants/TrendingProducts";
import Blog from "./componants/blog";
import HeroSection from "./componants/Hero";
import ShopexOffer from "./componants/Shopexoffer";
import UniqueFeatures from "./componants/Uniqfeature";
import Discount from "./componants/Discount";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <LatestProducts />
      <TrendingProducts />
      <Blog />
      <ShopexOffer />
      <UniqueFeatures />
      <Discount />
    </>
  );
}



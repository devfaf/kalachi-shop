import HomeSlider from "@/components/home/slider";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import AmazingOffers from "@/components/home/AmazingOffers";
import CategoryBanners from "@/components/home/CategoryBanners";
import BestSellingProducts from "@/components/home/BestSellingProducts";

const HomePage = () => {
  return (
    <div>
      <HomeSlider />
      <FeaturedCategories />
      <AmazingOffers />
      <CategoryBanners />
      <BestSellingProducts />
    </div>
  );
};

export default HomePage;
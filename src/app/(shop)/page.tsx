import HomeSlider from "@/components/home/slider";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import AmazingOffers from "@/components/home/AmazingOffers";


const HomePage = () => {
    return (
        <div>
            <HomeSlider />
            <FeaturedCategories />
            <AmazingOffers />
        </div>
    )
}

export default HomePage;
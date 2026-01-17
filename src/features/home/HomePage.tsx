import AwardsSection from "../../components/AwardsSection";
import CrossLine from "../../components/CrossLine";
import DiscoverDestinations from "../../components/DiscoverDestinations";
import Footer from "../../components/Footer";
import HappyTravelers from "../../components/HappyTravelers";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import RouteSection from "../../components/RouteSection";
import TopDestinations from "../../components/TopDestinations";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-red-50">
            <Header />

            {/* No spacer, hero attaches directly */}
            <HeroSection />
            <RouteSection />
            <TopDestinations />
            <DiscoverDestinations />
            <AwardsSection />
            <HappyTravelers />
            <CrossLine />
            <Footer />
        </div>
    );
}

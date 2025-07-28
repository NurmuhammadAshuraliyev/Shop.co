import Arrivals from "../components/home/Arrivals";
import Brands from "../components/home/Brands";
import Hero from "../components/home/Hero";
import TopSelling from "../components/home/Top-Selling";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Arrivals />
      <TopSelling />
    </>
  );
};

export default HomePage;

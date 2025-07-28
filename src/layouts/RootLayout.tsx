import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BannerNotification from "../components/banner-notification";

const RootLayout = () => {
  return (
    <>
      <BannerNotification discount={20} />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;

import BrandLogo1 from "../../assets/icons/brands/1.svg";
import BrandLogo2 from "../../assets/icons/brands/2.svg";
import BrandLogo3 from "../../assets/icons/brands/3.svg";
import BrandLogo4 from "../../assets/icons/brands/4.svg";
import BrandLogo5 from "../../assets/icons/brands/5.svg";

const Brands = () => {
  return (
    <section className="bg-black py-11">
      <div className="my-container">
        <div className="flex justify-between">
          <img className="block" src={BrandLogo1} alt="logo-1" />
          <img className="block" src={BrandLogo2} alt="logo-2" />
          <img className="block" src={BrandLogo3} alt="logo-3" />
          <img className="block" src={BrandLogo4} alt="logo-4" />
          <img className="block" src={BrandLogo5} alt="logo-5" />
        </div>
      </div>
    </section>
  );
};

export default Brands;

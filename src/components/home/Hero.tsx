import "../../assets/styles/hero.css";
import Button from "../ui/Button";
const Hero = () => {
  return (
    <section className="hero">
      <div className="my-container">
        <div className="max-w-[596px] pt-[103px] flex flex-col gap-y-8">
          <h1 className="title">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="description">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button variant="primary" className="max-w-[211px]">
            Shop Now
          </Button>
          <ul className="flex our-services w-full justify-between">
            <li className="flex flex-col relative pr-8">
              <span className="title w-fit">200+</span>
              <span className="text-[rgba(0,0,0,0.5)] w-fit description">
                International Brands
              </span>
              <span className="h-full block absolute right-0 w-[1px] bg-[#000] opacity-20"></span>
            </li>
            <li className="flex flex-col relative pr-8">
              <span className="title">2,000+</span>
              <span className="text-[rgba(0,0,0,0.5)] description">
                International Brands
              </span>
              <span className="h-full block absolute right-0 w-[1px] bg-[#000] opacity-20"></span>
            </li>
            <li className="flex flex-col">
              <span className="title">30,000+</span>
              <span className="text-[rgba(0,0,0,0.5)] description">
                International Brands
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;

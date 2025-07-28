import { Rating } from "react-simple-star-rating";
import TshirtImage from "../../assets/tshirt.png";
import "../../assets/styles/arrival-card.css";
const ArrivalsCard = () => {
  return (
    <div>
      <div className="bg-[#F0EEED] rounded-[20px] max-h-[298px]">
        <img
          className="block mx-auto object-cover object-center w-[295px] h-[298px]"
          src={TshirtImage}
          alt="tshirt"
        />
      </div>
      <p className="text-[16px] mt-4 font-bold">T-SHIRT WITH TAPE DETAILS</p>
      <div className="flex gap-x-3 items-center mt-2">
        <Rating
          initialValue={5}
          allowTitleTag={false}
          titleSeparator="/"
          readonly={true}
          SVGstyle={{ width: "18.5px", height: "18.5px" }}
        />
        <p className="text-sm">4.5/5</p>
      </div>
      <p className="text-[18px] mt-2 font-semibold">$120</p>
    </div>
  );
};

export default ArrivalsCard;

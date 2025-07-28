interface Props {
  discount: number;
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CloseSvg from "../assets/icons/close.svg";
import { getLocalStorage } from "../utils/getLocalStorage";
import { setLocalStorage } from "../utils/setLocalStorage";

const BannerNotification = ({ discount }: Props) => {
  const notifyView = getLocalStorage("discount-notify");
  const [close, setClose] = useState<boolean>(
    notifyView === "true" ? true : false
  );
  const handleClose = () => {
    setClose(true);
  };
  useEffect(() => {
    setLocalStorage("discount-notify", `${close}`);
  }, [close]);
  return (
    <>
      {!close && (
        <div className={`bg-black text-white text-sm py-2.5`}>
          <div className="my-container">
            <div className="flex justify-between">
              <h1 className="mx-auto">
                Sign up and get {discount}% off to your first order.
                <Link className="ms-1 underline" to="#">
                  Sign Up Now
                </Link>
              </h1>
              <button onClick={handleClose} className="cursor-pointer">
                <img src={CloseSvg} alt="close" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BannerNotification;

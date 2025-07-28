import { Link } from "react-router-dom";
import BrandLogo from "../assets/icons/SHOP.CO.svg";
import CartIcon from "../assets/icons/cart.svg";
import SearchIcon from "../assets/icons/search.svg";
import UserIcon from "../assets/icons/user.svg";
const Header = () => {
  return (
    <header className="header py-6">
      <div className="my-container">
        <div className="flex items-center gap-x-10">
          <Link to={"/"}>
            <img src={BrandLogo} alt="brand-logo" />
          </Link>
          <nav className="flex-[1_1_321px]">
            <ul className="flex justify-between">
              <li>
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li>
                <Link to={"/shop"}>On Sale</Link>
              </li>
              <li>
                <Link to={"/shop"}>New Arrivals</Link>
              </li>
              <li>
                <Link to={"/shop"}>Brands</Link>
              </li>
            </ul>
          </nav>
          <form className="bg-[#F0F0F0] p-[16px_12px] gap-x-3 rounded-[62px] flex-[1_1_577px] flex">
            <button>
              <img src={SearchIcon} alt="search-icon" />
            </button>
            <input
              className="grow-[1] focus:outline-none"
              type="text"
              placeholder="Search for products..."
            />
          </form>
          <div className="flex gap-x-4">
            <button className="flex-[0_0_auto] cursor-pointer">
              <img src={CartIcon} alt="cart" />
            </button>
            <button className="flex-[0_0_auto] cursor-pointer">
              <img src={UserIcon} alt="user" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

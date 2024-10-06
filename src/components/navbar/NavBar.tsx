import images from "../../contants/images";
import "./NavBar.css";
import { FiMenu } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { RiVideoAddFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { IoMdApps } from "react-icons/io";
import { Link } from "react-router-dom";

type NavBarProps = {
  // sidebar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ setSideBar }: NavBarProps) => {
  return (
    <nav className="flex-div">
      {/* Menu & Logo */}
      <div className="nav-left flex-div">
        <FiMenu
          className="menu-icon icon"
          onClick={() => setSideBar((prev) => (prev === false ? true : false))}
        />
        <Link to='/'><img className="logo icon" src={images.logoWithText} alt="" /></Link>
      </div>
      {/* Search Bar */}
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <GoSearch className="search-icon icon" />
        </div>
      </div>

      {/* Profile Image & Logout */}
      <div className="nav-right flex-div">
        <RiVideoAddFill color="red" className="icon" />
        <IoMdApps className="icon" />
        <IoMdNotifications className="icon" />
        <img src={images.profileImg} className="user-icon" alt="" />
      </div>
    </nav>
  );
};

export default NavBar;

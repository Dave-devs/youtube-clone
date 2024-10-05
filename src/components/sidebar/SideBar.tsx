import "./SideBar.css";
import { AiFillHome } from "react-icons/ai";
import { IoGameController } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { MdSportsBasketball } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { MdLibraryMusic } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { IoNewspaper } from "react-icons/io5";
import images from "../../contants/images";

type SideBarProps = {
  sidebar: boolean;
  category: number;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
}

const SideBar = ({ sidebar, category, setCategory }: SideBarProps) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      {/* Short Cut Links */}
      <div className="short-cut-links">
        <div className={`side-link ${category === 0 ? "active" : ""}`} onClick={() => setCategory(0)}>
          <AiFillHome className="icon" /> <p>Home</p>
        </div>
        <div className={`side-link ${category === 20 ? "active" : ""}`} onClick={() => setCategory(20)}>
          <IoGameController className="icon" /> <p>Gaming</p>
        </div>
        <div className={`side-link ${category === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
          <FaCar className="icon" /> <p>Automobiles</p>
        </div>
        <div className={`side-link ${category === 17 ? "active" : ""}`} onClick={() => setCategory(17)}>
          <MdSportsBasketball className="icon" /> <p>Sports</p>
        </div>
        <div className={`side-link ${category === 24 ? "active" : ""}`} onClick={() => setCategory(24)}>
          <PiTelevisionSimpleBold className="icon" /> <p>Entertainment</p>
        </div>
        <div className={`side-link ${category === 28 ? "active" : ""}`} onClick={() => setCategory(28)}>
          <GrTechnology className="icon" /> <p>Technology</p>
        </div>
        <div className={`side-link ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
          <MdLibraryMusic className="icon" /> <p>Music</p>
        </div>
        <div className={`side-link ${category === 22 ? "active" : ""}`} onClick={() => setCategory(22)}>
          <LiaBlogSolid className="icon" /> <p>Blogs</p>
        </div>
        <div className={`side-link ${category === 25 ? "active" : ""}`} onClick={() => setCategory(25)}>
          <IoNewspaper className="icon" /> <p>News</p>
        </div>
        {/* Hr Line */}
        <hr />
      </div>
      {/* Subscribed Lists */}
      <div className="subcribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={images.trump} alt="" /> <p>Trump</p>
        </div>
        <div className="side-link">
          <img src={images.beast} alt="" /> <p>Mr Beast</p>
        </div>
        <div className="side-link">
          <img src={images.chris} alt="" /> <p>Chris Brown</p>
        </div>
        <div className="side-link">
          <img src={images.putin} alt="" /> <p>Putin</p>
        </div>
        <div className="side-link">
          <img src={images.burna} alt="" /> <p>Burna Boy</p>
        </div>
      </div>

    </div>
  );
};

export default SideBar;

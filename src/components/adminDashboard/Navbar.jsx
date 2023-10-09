import navbarClasses from "../../style/AdminDashboard/navbar.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { HiMenuAlt1 } from "react-icons/hi";
import { sidebarActions } from "../../store/adminDashStore";
import { useSelector, useDispatch } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.isSidebarOpen);
  const sidebarOpen = () => {
    dispatch(sidebarActions.sidebarOpen());
    console.log("me");
  };

  return (
    <nav>
      <div className={navbarClasses.logoBox}>
        <div className={navbarClasses.hamburger} onClick={sidebarOpen}>
          <HiMenuAlt1 />
        </div>
        <div className={navbarClasses.logo}>
          <FaXTwitter />
        </div>
        <span className={navbarClasses.logoName}>Twitter</span>
      </div>
      <div className={navbarClasses.profileBox}>
        <img
          className={navbarClasses.profileImg}
          src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;

import navbarClasses from "../../style/AdminDashboard/navbar.module.css";
import { FaXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav>
      <div className="logo-box">
        <FaXTwitter />
      </div>
      <div className="profile-box"></div>
    </nav>
  );
};

export default Navbar;

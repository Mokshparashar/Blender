import { sidebarActions } from "../../store/adminDashStore";
import { useSelector, useDispatch } from "react-redux";
import sidebarClasses from "../../style/AdminDashboard/sidebar.module.css";
import { FaXTwitter } from "react-icons/fa6";
const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.isSidebarOpen);
  return (
    !isSidebarOpen && (
      <div className={sidebarClasses.sidebar}>
        <div className={sidebarClasses.sidebarLogoBox}>
          <FaXTwitter />
        </div>
      </div>
    )
  );
};

export default Sidebar;

import { sidebarActions } from "../../store/adminDashStore";
import { useSelector, useDispatch } from "react-redux";
import sidebarClasses from "../../style/AdminDashboard/sidebar.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.isSidebarOpen);

  const handleSidebarClose = () => {
    dispatch(sidebarActions.sidebarClose());
  };
  return (
    isSidebarOpen && (
      <div className={sidebarClasses.sidebar}>
        <div className={sidebarClasses.sidebarLogoBox}>
          <div className={sidebarClasses.sidebarLogo}>
            <FaXTwitter />
          </div>
          <div
            className={sidebarClasses.sidebarCancelBtn}
            onClick={handleSidebarClose}
          >
            <RxCross1 />
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;

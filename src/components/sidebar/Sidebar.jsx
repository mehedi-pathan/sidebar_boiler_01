import "./sidebar.scss";
import logo from "../../assets/logo/webscript.png";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Fragment, useEffect, useState } from "react";
import userImage from "../../assets/user.jpg";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import MonitorRoundedIcon from "@mui/icons-material/MonitorRounded";
import BrushRoundedIcon from "@mui/icons-material/BrushRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import MenuItems from "./MenuItems";

const menuItems = [
  {
    title: "Main",
    name: "Dashboard",
    icon: <DashboardRoundedIcon />,
    to: "/dashboard",
  },
  {
    name: "Analitics",
    icon: <BubbleChartRoundedIcon />,
    to: "/analitics",
  },
  {
    name: "Analitics",
    icon: <BubbleChartRoundedIcon />,
    to: "/analitics",
  },
  {
    name: "Analitics",
    icon: <BubbleChartRoundedIcon />,
    to: "/analitics",
  },
  {
    title: "Design",
    name: "Sales overview",
    icon: <WhatshotRoundedIcon />,
    to: "/sales",
  },
  {
    name: "Content",
    icon: <MonitorRoundedIcon />,
    to: "/content",
    subMenus: [{ name: "Courses" }, { name: "Courses" }, { name: "Videos" }],
  },
  {
    name: "Design",
    icon: <BrushRoundedIcon />,
    to: "/design",
  },
];

const Sidebar = () => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      document.querySelectorAll(".sub_menu").forEach((el) => {
        el.classList.remove("active");
      });
    }
  }, [inactive]);

  return (
    <div className={`sidebar ${inactive ? "inactive" : ""}`}>
      <div className="top_section">
        <div className="logo">
          <img src={logo} alt="company logo" />
        </div>
        <div className="toggle_menu_btn" onClick={() => setInactive(!inactive)}>
          {!inactive ? (
            <KeyboardBackspaceRoundedIcon className="left_arrow" />
          ) : (
            <EastRoundedIcon className="right_arrow" />
          )}
        </div>
      </div>

      <div className="search_controller">
        <SearchRoundedIcon className="search_btn" />
        <input type="text" placeholder="Search" />
      </div>

      <span className="divider"></span>

      <div className="main_menu">
        <ul className="menu_items">
          {menuItems.map((menuItems, index) => (
            <Fragment key={index}>
              <p className="title">{menuItems.title}</p>
              <MenuItems
                icon={menuItems.icon}
                name={menuItems.name}
                to={menuItems.to}
                id={window.location.pathname === menuItems.to ? "active" : ""}
                subMenus={menuItems.subMenus || []}
                onClick={() => {
                  if (inactive) {
                    setInactive(false);
                  }
                }}
              />
            </Fragment>
          ))}
        </ul>
      </div>

      <div className="sidemenu_footer">
        <div className="avatar">
          <img src={userImage} alt="user_image" />
        </div>
        <div className="user_info">
          <h5>John Doe</h5>
          <p>testing@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

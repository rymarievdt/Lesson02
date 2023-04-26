import React from "react";
import SidebarUserInfo from "../sidebar-user-info/SidebarUserInfo";
import SidebarItem from "../sidebar-item/SidebarItem";
import SidebarItemCheckbox from "../sidebar-item-checkbox/SidebarItemCheckbox";
import "./Sidebar.css";
import searchIcon from "../../img/searchIcon.svg";
import dashboardIcon from "../../img/dashboardIcon.svg";
import revenueIcon from "../../img/revenueIcon.svg";
import notificationsIcon from "../../img/notificationsIcon.svg";
import analyticsIcon from "../../img/analyticsIcon.svg";
import inventoryIcon from "../../img/inventoryIcon.svg";
import logoutIcon from "../../img/logoutIcon.svg";
import lightModeIcon from "../../img/lightModeIcon.svg";
import darkModeIcon from "../../img/darkModeIcon.svg";
import lightModeCheckmarkIcon from "../../img/lightModeCheckmarkIcon.svg";
import darkModeCheckmarkIcon from "../../img/darkModeCheckmarkIcon.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarUserInfo />
      <div className="sidebar-content">
        <div className="sidebar-navigation">
          <SidebarItem icon={searchIcon} label="Search..." isActive={true} />
          <SidebarItem icon={dashboardIcon} label="Dashboard" />
          <SidebarItem icon={revenueIcon} label="Revenue" />
          <SidebarItem icon={notificationsIcon} label="Notifications" />
          <SidebarItem icon={analyticsIcon} label="Analytics" />
          <SidebarItem icon={inventoryIcon} label="Inventory" />
        </div>
        <div className="sidebar-footer">
          <SidebarItem icon={logoutIcon} label="Logout" />
          <SidebarItemCheckbox
            uncheckedIcon={darkModeIcon}
            uncheckedLabel="Dark mode"
            uncheckedCheckmarkIcon={lightModeCheckmarkIcon}
            checkedIcon={lightModeIcon}
            checkedLabel="Light mode"
            checkedCheckmarkIcon={darkModeCheckmarkIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

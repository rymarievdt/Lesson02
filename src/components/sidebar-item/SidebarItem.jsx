import React from "react";
import "./SidebarItem.css";

function SidebarItem({ icon, label, isActive }) {
  return (
    <div
      className={isActive ? "sidebar-item sidebar-item-active" : "sidebar-item"}
    >
      <img className="sidebar-item-icon" src={icon} alt={label} />
      <div className="sidebar-collapsible-part">
        <div className="sidebar-item-label">{label}</div>
      </div>
    </div>
  );
}

export default SidebarItem;

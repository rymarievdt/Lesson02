import React from "react";
import "./SidebarUserInfo.css";

function SidebarUserInfo() {
  return (
    <div className="sidebar-user-info">
      <div className="sidebar-user-avatar">AF</div>
      <div className="sidebar-collapsible-part">
        <div className="sidebar-user-details">
          <div className="sidebar-user-name">AnimatedFred</div>
          <div className="sidebar-user-email">animated@demo.com</div>
        </div>
      </div>
    </div>
  );
}

export default SidebarUserInfo;

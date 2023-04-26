import React from "react";
import "./SidebarItemCheckbox.css";

function SidebarItemCheckbox({
  uncheckedIcon,
  uncheckedLabel,
  uncheckedCheckmarkIcon,
  checkedIcon,
  checkedLabel,
  checkedCheckmarkIcon,
}) {
  return (
    <label class="sidebar-item-checkbox">
      <input type="checkbox" />
      <div className="sidebar-collapsible-part">
        <div className="sidebar-item-checkbox-description">
          <img
            className="sidebar-item-icon unchecked-description"
            src={uncheckedIcon}
            alt={uncheckedLabel}
          />
          <img
            className="sidebar-item-icon checked-description"
            src={checkedIcon}
            alt={checkedLabel}
          />
          <div className="sidebar-item-label unchecked-description">
            {uncheckedLabel}
          </div>
          <div className="sidebar-item-label checked-description">
            {checkedLabel}
          </div>
        </div>
      </div>
      <div class="checkmark">
        <img
          className="unchecked-checkmark"
          src={uncheckedCheckmarkIcon}
          alt={uncheckedLabel}
        />
        <img
          className="checked-checkmark"
          src={checkedCheckmarkIcon}
          alt={checkedLabel}
        />
      </div>
    </label>
  );
}

export default SidebarItemCheckbox;

import React from "react";
import { SidebarProps } from "./Sidebar.types";

const Sidebar = (props: SidebarProps) => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="front-item">{props.frontItem}</div>

        <div className="side-sections">
          {props.sections.map((section) => {
            return (
              <div className="side-section">
                <div className="side-section-header">
                  <div className="side-section-title">{section.title}</div>
                  <div className="side-section-icon"></div>
                </div>
                {section.items.map((item) => {
                  return (
                    <div className="side-item">
                      <div className="item-icon"></div>
                      <div className="item-text">{item.text}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

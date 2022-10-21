/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef } from "react";
import { NavbarItemPosition, NavbarProps } from "./Navbar.types";

const Navbar = (props: NavbarProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const leftItem = props.items.filter(
    (i) => i.position === NavbarItemPosition.Left
  );

  const rightItems = props.items.filter(
    (i) => i.position === NavbarItemPosition.Right
  );

  const centerItems = props.items.filter(
    (i) => i.position === NavbarItemPosition.Center
  );

  const navElement = useRef<HTMLDivElement>(null);
  const nav = navElement.current;

  const handleOpen = () => {
    if (isOpened) {
      setIsOpened(false);
      if (nav?.classList.contains("open")) {
        nav?.classList.remove("open");
      }
    } else {
      setIsOpened(true);
      if (!nav?.classList.contains("open")) {
        nav!.classList.add("open");
      }
    }
  };

  return (
    <div className="navbar">
      <div className="nav-desktop">
        <div className="nav-area">
          {leftItem.map((item) => {
            return <div className="nav-area">{item.content}</div>;
          })}
        </div>
        <div className="nav-area">
          {centerItems.map((item) => {
            return <div className="nav-area">{item.content}</div>;
          })}
          {props.children}
        </div>
        <div className="nav-area">
          {rightItems.map((item) => {
            return <div className="nav-area">{item.content}</div>;
          })}
        </div>
      </div>
      <div className="nav-mobile" ref={navElement}>
        <div className="nav-header">
          <div className="nav-logo">{leftItem[0].content}</div>
          <div
            className="nav-btn"
            onClick={() => {
              handleOpen();
            }}
          >
            <FontAwesomeIcon icon={isOpened ? faXmark : faBars} />
          </div>
        </div>
        <div className="nav-content">
          <ul>
            {leftItem.map((item, index) => {
              if (index === 0) {
                return;
              }
              return (
                <li>
                  <div className="nav-area">{item.content}</div>
                </li>
              );
            })}
            <div className="nav-area">
              {centerItems.map((item) => {
                return (
                  <li>
                    <div className="nav-area">{item.content}</div>
                  </li>
                );
              })}
            </div>
            <div className="nav-area">
              {rightItems.map((item, index) => {
                if (index === rightItems.length - 1) {
                  return;
                }
                return (
                  <li>
                    <div className="nav-area">{item.content}</div>
                  </li>
                );
              })}
              {props.children}
            </div>
            <div className="nav-footer">
              <div>{rightItems[rightItems.length - 1].content}</div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

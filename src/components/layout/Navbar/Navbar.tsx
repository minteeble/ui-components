/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import React from "react";
import { NavbarItemPosition, NavbarProps } from "./Navbar.types";

const Navbar = (props: NavbarProps) => {
  const leftItem = props.items.filter(
    (i) => i.position === NavbarItemPosition.Left
  );

  const rightItems = props.items.filter(
    (i) => i.position === NavbarItemPosition.Right
  );

  const centerItems = props.items.filter(
    (i) => i.position === NavbarItemPosition.Center
  );

  return (
    <div className="navbar">
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
  );
};

export default Navbar;

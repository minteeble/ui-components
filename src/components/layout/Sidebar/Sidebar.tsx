/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChartLine,
  faCocktail,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useLocation } from "react-router";
import IconButton from "../../forms/IconButton/IconButton";
import { SidebarProps } from "./Sidebar.types";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Sidebar = (props: SidebarProps) => {
  // console.log(__RouterContext);

  // let canUseRouter: boolean = false;

  // try {
  //   const _ = useLocation();
  //   canUseRouter = true;
  // } catch (err) {
  //   console.log(err);
  // }

  // const router = useContext(__RouterContext);

  return (
    <div className="sidebar-wrapper">
      <div className={props.open ? "sidebar open" : "sidebar"}>
        <div className="sidebar-content">
          {props.onSidebarClose && (
            <IconButton
              icon={<FontAwesomeIcon icon={faXmark} />}
              className="close-sidebar"
              onClick={props.onSidebarClose}
            />
          )}
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
                      <Link to={item.url} className="item-text">
                        <div className="side-item">
                          {item.icon && (
                            <div className="item-icon">
                              {/* @ts-ignore*/}
                              <FontAwesomeIcon icon={item.icon} />
                            </div>
                          )}
                          {item.text}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={props.open ? "out-content open" : "out-content"}>
        {props.children}
      </div>
    </div>
  );
};

export default Sidebar;

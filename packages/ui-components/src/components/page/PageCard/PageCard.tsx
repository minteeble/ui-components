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
import { PageCardProps } from "./PageCard.types";

const PageCard = (props: PageCardProps) => {
  return (
    <div
      className={`page-card shadow-1 ${props.className ? props.className : ""}`}
      style={props.style || {}}
    >
      {props.children}
    </div>
  );
};

export default PageCard;

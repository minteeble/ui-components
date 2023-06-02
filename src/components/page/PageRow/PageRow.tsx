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
import { PageRowProps } from "./PageRow.types";

const PageRow = (props: PageRowProps) => {
  let alignmentClasses = ["start", "center", "end", "stretch"];

  let pageAlignmentClass = alignmentClasses[props.alignment || 0];

  return (
    <div
      className={`page-column ${pageAlignmentClass} ${
        props.className ? props.className : ""
      }`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default PageRow;

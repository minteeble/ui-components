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
import { PageColumnProps } from "./PageColumn.types";

const PageColumn = (props: PageColumnProps) => {
  return (
    <div className={`page-column ${props.className ? props.className : ""}`}>
      {props.children}
    </div>
  );
};

export default PageColumn;

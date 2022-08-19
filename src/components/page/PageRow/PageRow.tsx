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
  return <div className="page-row">{props.children}</div>;
};

export default PageRow;

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
import { PageContentProps } from "./PageContent.types";

const PageContent = (props: PageContentProps) => {
  return <div className="page-content">{props.children}</div>;
};

export default PageContent;

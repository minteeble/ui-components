import React from "react";
import { PageColumnProps } from "./PageColumn.types";

const PageColumn = (props: PageColumnProps) => {
  return <div className="page-column">{props.children}</div>;
};

export default PageColumn;

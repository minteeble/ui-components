import React from "react";
import { PageRowProps } from "./PageRow.types";

const PageRow = (props: PageRowProps) => {
  return <div className="page-row">{props.children}</div>;
};

export default PageRow;

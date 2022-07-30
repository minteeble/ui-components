import React from "react";
import { PageContentProps } from "./PageContent.types";

const PageContent = (props: PageContentProps) => {
  return <div className="page-content">{props.children}</div>;
};

export default PageContent;

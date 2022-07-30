import React from "react";
import { PageCardProps } from "./PageCard.types";

const PageCard = (props: PageCardProps) => {
  return <div className="page-card shadow-1">{props.children}</div>;
};

export default PageCard;

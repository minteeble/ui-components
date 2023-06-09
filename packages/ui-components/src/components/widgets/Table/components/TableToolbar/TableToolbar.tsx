import React from "react";
import {
  TableToolbarItemsPosition,
  TableToolbarProps,
} from "./TableToolbar.types";

const TableToolbar = (props: TableToolbarProps) => {
  return (
    <>
      <div className="table-toolbar">
        <div className="left-items item-container">
          {props.items
            .filter((item) => {
              return item.position === TableToolbarItemsPosition.Left;
            })
            .map((item) => {
              return item.content;
            })}
        </div>
        <div className="center-items item-container">
          {props.items
            .filter((item) => {
              return item.position === TableToolbarItemsPosition.Center;
            })
            .map((item) => {
              return item.content;
            })}
        </div>
        <div className="right-items item-container">
          {props.items
            .filter((item) => {
              return item.position === TableToolbarItemsPosition.Right;
            })
            .map((item) => {
              return item.content;
            })}
        </div>
      </div>
    </>
  );
};

export default TableToolbar;

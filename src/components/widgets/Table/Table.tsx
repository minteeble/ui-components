import React from "react";
import { TableProps } from "./Table.types";

const Table = (props: TableProps) => {
  const header = props.header || [];
  const records = props.records || [];

  return (
    <>
      <div className="table-component-wrapper">
        {/* <div className="toolbar-wrapper"></div> */}

        <div className="table-wrapper">
          <div className="table">
            <div className="table-header">
              {header.map((item, index) => {
                return (
                  <div className="header-field" key={index}>
                    {item.fieldName}
                  </div>
                );
              })}
            </div>
            <div className="table-content">
              {records.map((record) => {
                return record.items.map((item, index) => {
                  return <div key={index}>{item.value}</div>;
                });
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;

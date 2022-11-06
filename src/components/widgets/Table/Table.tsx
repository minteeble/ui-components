import React from "react";
import { RecordItem, TableProps, TableRecord } from "./Table.types";

const Table = (props: TableProps) => {
  const header = props.header || [];
  const records = props.records || [];

  let fieldNames = [];

  for (let i = 0; i < header.length; i++) {
    fieldNames.push(header[i].fieldName);
  }

  let sortedRecords: TableRecord[] = [];

  for (let i = 0; i < records.length; i++) {
    let sortedRecordItems: TableRecord = {
      items: [],
    };

    for (let z = 0; z < fieldNames.length; z++) {
      sortedRecordItems.items.push({
        value: "",
        fieldName: "",
      });
    }

    for (let j = 0; j < header.length; j++) {
      if (records[i].items[j]) {
        if (fieldNames.includes(records[i].items[j].fieldName)) {
          sortedRecordItems.items[
            fieldNames.indexOf(records[i].items[j].fieldName)
          ] = records[i].items[j];
        }
      }
    }
    sortedRecords.push(sortedRecordItems);
  }

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
              {sortedRecords.map((record) => {
                return (
                  <div className="table-record">
                    {record.items.map((item, index) => {
                      return (
                        <div className="table-record-item" key={index}>
                          {item.value}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;

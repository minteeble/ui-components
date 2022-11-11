import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TablePaginator, { usePaginator } from "./components/TablePaginator";
import { RecordItem, TableProps, TableRecord } from "./Table.types";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Table = (props: TableProps) => {
  const header = props.header || [];
  const records = props.records || [];
  const maxRowsForPage = props.maxRowsForPage || 20;

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

  const { paginatorLogic } = usePaginator({
    records: records,
    maxRowsForPage: props.paginationEnabled
      ? maxRowsForPage
      : sortedRecords.length,
  });

  if (props.rowsClickable) {
  }

  const style = {
    "--column-width": `${100 / fieldNames.length}%`,
  } as React.CSSProperties;

  return (
    <>
      <div className="table-component-wrapper" style={style}>
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
              {paginatorLogic.currentRecords.length > 0 ? (
                paginatorLogic.currentRecords.map((record) => {
                  return (
                    <div className="table-record-wrapper">
                      <div
                        onClick={() => {
                          if (props.rowsClickable && props.onRowClick) {
                            props.onRowClick(record);
                          }
                        }}
                        className={`table-record ${
                          props.rowsClickable ? "clickable" : ""
                        }`}
                      >
                        {record.items.map((item, index) => {
                          return (
                            <div className="table-record-item" key={index}>
                              <span className="table-record-item-text">
                                {item.value}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="no-item">
                  <FontAwesomeIcon
                    className="error-icon"
                    icon={faCircleExclamation}
                  />
                  <span>No items found</span>
                </div>
              )}
            </div>
            {props.paginationEnabled ? (
              <TablePaginator paginatorLogic={paginatorLogic} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;

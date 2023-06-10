import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import TablePaginator, { usePaginator } from "./components/TablePaginator";
import { RecordItem, TableProps, TableRecord } from "./Table.types";
import { faCircleExclamation, faCopy } from "@fortawesome/free-solid-svg-icons";
import TableToolbar, {
  TableToolbarItems,
  TableToolbarItemsPosition,
} from "./components/TableToolbar";
import { Button } from "../../forms";
import { LoadingSpinner, LoadingSpinnerSize } from "../../common";

const Table = (props: TableProps) => {
  const header = props.header || [];
  const records = props.records || [];
  const maxRowsForPage = props.maxRowsForPage || 20;

  const [sortedRecords, setSortedRecords] = useState<Array<TableRecord>>([]);
  const [currentToolbarItems, setCurrentToolbarItems] = useState<
    Array<TableToolbarItems>
  >([]);

  let fieldNames: Array<string> = [];

  for (let i = 0; i < header.length; i++) {
    fieldNames.push(header[i].fieldName);
  }

  useEffect(() => {
    if (props.toolbarProps) {
      let newItems = [...props.toolbarProps];
      if (props.onAdd) {
        // let addBtn: TableToolbarItems = {
        //   content: <Button onClick={props.onAdd} text={"Add"} />,
        //   position: TableToolbarItemsPosition.Right,
        // };
        // newItems.push(addBtn);
      }
      setCurrentToolbarItems(newItems);
    }
  }),
    [props.toolbarProps];

  useEffect(() => {
    if (records) {
      let sorted: TableRecord[] = [];

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
        sorted.push(sortedRecordItems);
      }

      setSortedRecords(sorted);
    }
  }, [records]);

  const { paginatorLogic } = usePaginator({
    records: sortedRecords,
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
            {props.toolbarEnabled && (
              <TableToolbar
                items={
                  !props.onAdd
                    ? currentToolbarItems
                    : [
                        ...currentToolbarItems,
                        {
                          content: (
                            <Button onClick={props.onAdd} text={"Add"} />
                          ),
                          position: TableToolbarItemsPosition.Right,
                        },
                      ]
                }
              />
            )}
            <div className="table-scroll">
              <div className="table-scroll-content">
                <div className="table-header">
                  {header.map((item, index) => {
                    return (
                      <div className="header-field" key={index}>
                        <span>{item.fieldName}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="table-content">
                  {props.isLoading != undefined && props.isLoading === true && (
                    <div className="loading-table">
                      <LoadingSpinner Size={LoadingSpinnerSize.Large} />
                    </div>
                  )}
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
                                    {header.find(
                                      (head) =>
                                        head.fieldName === item.fieldName
                                    )?.copyable && (
                                      <div
                                        className="copy"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          e.stopPropagation();
                                          console.log("Copy");
                                        }}
                                      >
                                        <FontAwesomeIcon icon={faCopy} />
                                      </div>
                                    )}
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
              </div>
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

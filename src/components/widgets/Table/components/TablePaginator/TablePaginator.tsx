import React, { useEffect, useRef, useState } from "react";
import { TablePaginatorProps } from "./TablePaginator.types";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TablePaginator = (props: TablePaginatorProps) => {
  const logic = props.paginatorLogic;

  const dropdown: any = useRef();

  let options: number[] = [10, 20, 50, 100];

  useEffect(() => {
    dropdown.current.value = options.indexOf(logic.maxRowsForPage);
  }, []);

  const handleDropdownChange = () => {
    logic.setMaxRowsForPage(options[dropdown.current.value]);
    () => {};
  };

  return (
    <>
      <div className="table-paginator">
        <div className="edit-items-num">
          <span>Items per page:</span>
          <select
            onChange={() => {
              handleDropdownChange();
            }}
            ref={dropdown}
            className="edit-items-num-dropdown"
          >
            {options.map((option, index) => {
              return (
                <option key={index} value={index}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <span className="current-page">
          {logic.currentPage} of {logic.pages}
        </span>
        <div className="set-page">
          <div
            onClick={() => {
              logic.firstPage();
            }}
            className="icon first"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            <FontAwesomeIcon className="second" icon={faChevronLeft} />
          </div>
          <div
            onClick={() => {
              logic.prevPage();
            }}
            className="icon"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div
            onClick={() => {
              logic.nextPage();
            }}
            className="icon"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div
            onClick={() => {
              logic.lastPage();
            }}
            className="icon last"
          >
            <FontAwesomeIcon className="second" icon={faChevronRight} />
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TablePaginator;

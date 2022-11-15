import React, { useEffect, useState } from "react";
import { TablePaginatorLogic, usePaginatorProps } from "./TablePaginator.types";
import { RecordItem, TableRecord } from "../../Table.types";

const usePaginator = (props: usePaginatorProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(1);
  const [currentRecords, setCurrentRecords] = useState<Array<TableRecord>>([]);

  const records = [...props.records] || [];
  const [maxRowsForPage, setMaxRowsForPage] = useState<number>(
    props.maxRowsForPage || 20
  );

  const paginate = () => {
    if (records) {
      setPages(Math.ceil(records.length / maxRowsForPage));
      let pageRecords: Array<TableRecord> = [];

      pageRecords = [...records].splice(
        (currentPage - 1) * maxRowsForPage,
        maxRowsForPage
      );

      if (pageRecords != currentRecords) {
        console.log(pageRecords != currentRecords);
        setCurrentRecords(pageRecords);
      }
    }
  };

  useEffect(() => {
    paginate();
    if (currentPage > pages) {
      if (pages === 0) {
        setCurrentPage(1);
      } else {
        setCurrentPage(pages);
      }
    }
  }, [currentPage, pages]);

  useEffect(() => {
    paginate();
  }, [maxRowsForPage]);

  useEffect(() => {
    paginate();
  }, [props.records]);

  let paginatorLogic: TablePaginatorLogic = {
    currentPage: currentPage,
    currentRecords: currentRecords,
    maxRowsForPage: maxRowsForPage,
    pages: pages,
    setMaxRowsForPage: function (maxRows: number): void {
      setMaxRowsForPage(maxRows);
    },

    setPage: function (pageIndex: number): void {
      setCurrentPage(pageIndex);
    },
    nextPage: function (): void {
      paginatorLogic.setPage(
        currentPage + 1 <= pages ? currentPage + 1 : currentPage
      );
    },
    prevPage: function (): void {
      paginatorLogic.setPage(
        currentPage - 1 >= 1 ? currentPage - 1 : currentPage
      );
    },
    firstPage: function (): void {
      paginatorLogic.setPage(1);
    },
    lastPage: function (): void {
      paginatorLogic.setPage(pages);
    },
  };

  return { paginatorLogic };
};

export default usePaginator;

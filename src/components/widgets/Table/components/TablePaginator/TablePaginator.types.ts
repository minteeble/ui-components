import { RecordItem, TableRecord } from "../../Table.types";

export interface usePaginatorProps {
  records: Array<TableRecord>;
  maxRowsForPage: number;
}

export interface TablePaginatorProps {
  paginatorLogic: TablePaginatorLogic;
}

export interface TablePaginatorLogic {
  currentPage: number;

  currentRecords: Array<TableRecord>;

  maxRowsForPage: number;

  pages: number;

  setMaxRowsForPage(maxRows: number): void;

  setPage(pageIndex: number): void;

  nextPage(): void;

  prevPage(): void;

  firstPage(): void;

  lastPage(): void;
}

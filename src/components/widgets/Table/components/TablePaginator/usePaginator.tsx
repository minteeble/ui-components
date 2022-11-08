import React from "react";
import { usePaginatoProps } from "./TablePaginator.types";

const usePaginator = (props: usePaginatoProps) => {
  const rowsNum = props.rowsNum;
  const maxRowsForPage = props.maxRowsForPage;

  const pagesNum = Math.floor(rowsNum / maxRowsForPage);

  let currentPage = 0;

  const handlePage = () => {};

  return <></>;
};

export default usePaginator;

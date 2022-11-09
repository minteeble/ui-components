/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import React from "react";
import { Story, Meta } from "@storybook/react";

import TablePaginator from "./TablePaginator";
import { TablePaginatorProps } from "./TablePaginator.types";

export default {
  title: "ui-components/widgets/TablePaginator",
  component: TablePaginator,
  argTypes: {},
} as Meta<typeof TablePaginator>;
const Template: Story<TablePaginatorProps> = (args) => (
  <TablePaginator {...args} />
);

export const SimpleTablePaginator = Template.bind({});
const SimpleTablePaginatorArgs: TablePaginatorProps = {
  paginatorLogic: {
    currentPage: 1,
    currentRecords: [],
    maxRowsForPage: 20,
    pages: 5,
    setMaxRowsForPage(maxRows) {
      console.log(maxRows);
    },
    setPage: function (pageIndex: number): void {
      console.log(pageIndex);
    },
    nextPage: function (): void {
      this.setPage(1);
    },
    prevPage: function (): void {
      this.setPage(1);
    },
    firstPage: function (): void {
      this.setPage(1);
    },
    lastPage: function (): void {
      this.setPage(1);
    },
  },
};
SimpleTablePaginator.args = SimpleTablePaginatorArgs;

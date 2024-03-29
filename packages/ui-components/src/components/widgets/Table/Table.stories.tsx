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

import Table from "./Table";
import { TableProps } from "./Table.types";
import { ItemsListProps } from "../ItemsList";
import { Button } from "../../forms";
import { TableToolbarItemsPosition } from "./components/TableToolbar";

export default {
  title: "ui-components/widgets/Table",
  component: Table,
  argTypes: {},
} as Meta<typeof Table>;
const Template: Story<TableProps> = (args) => <Table {...args} />;

export const SimpleTable = Template.bind({});
const SimpleTableArgs: TableProps = {
  records: [
    {
      items: [
        {
          value: "first book",
          fieldName: "book name",
        },
        {
          value: "8",
          fieldName: "ordered amount",
        },
        {
          value: "$10.25",
          fieldName: "book pric",
        },
        {
          value: "20.00%",
          fieldName: "book discount",
        },
      ],
      link: "https://google.com",
    },
    {
      items: [
        {
          value: "second book",
          fieldName: "book name",
        },
        {
          value: "10.00%",
          fieldName: "book discount",
        },
        {
          value: "1",
          fieldName: "ordered amount",
        },
        {
          value: "$42.50",
          fieldName: "book price",
          tooltip: "This is the price",
        },
      ],
    },
    {
      items: [
        {
          value: "third book",
          fieldName: "book name",
        },
        {
          value: "2",
          fieldName: "ordered amount",
        },
        {
          value: "$15.00",
          fieldName: "book price",
        },
        {
          value: "15.00%",
          fieldName: "book discount",
        },
      ],
    },
  ],
  header: [
    {
      fieldName: "book name",
      copyable: true,
    },
    {
      fieldName: "ordered amount",
    },
    {
      fieldName: "book price",
    },
    {
      fieldName: "book discount",
    },
  ],
};
SimpleTable.args = SimpleTableArgs;

export const ClickableTable = Template.bind({});
const ClickableTableArgs: TableProps = {
  rowsClickable: true,
  onRowClick: (data) => {
    console.log("Clicked record:", data);
  },
  records: [
    {
      items: [
        {
          value: "first book",
          fieldName: "book name",
          tooltip: "This is a tooltip",
        },
        {
          value: "8",
          fieldName: "ordered amount",
          tooltip: "This is a tooltip",
        },
        {
          value: "$10.25",
          fieldName: "book price",
          tooltip: "This is a tooltip",
        },
        {
          value: "20.00%",
          fieldName: "book discount",
          tooltip: "This is a tooltip",
        },
      ],
    },
    {
      items: [
        {
          value: "second book",
          fieldName: "book name",
        },
        {
          value: "10.00%",
          fieldName: "book discount",
        },
        {
          value: "1",
          fieldName: "ordered amount",
        },
        {
          value: "$42.50",
          fieldName: "book price",
        },
      ],
    },
    {
      items: [
        {
          value: "third book",
          fieldName: "book name",
        },
        {
          value: "2",
          fieldName: "ordered amount",
        },
        {
          value: "$15.00",
          fieldName: "book price",
        },
        {
          value: "15.00%",
          fieldName: "book discount",
        },
      ],
    },
  ],
  header: [
    {
      fieldName: "book name",
    },
    {
      fieldName: "ordered amount",
    },
    {
      fieldName: "book price",
    },
    {
      fieldName: "book discount",
    },
  ],
};
ClickableTable.args = ClickableTableArgs;

export const PaginableTable = Template.bind({});
const PaginableTableArgs: TableProps = {
  rowsClickable: true,
  paginationEnabled: true,
  maxRowsForPage: 10,
  onRowClick: (data) => {
    console.log("Clicked record:", data);
  },
  records: [
    {
      items: [
        {
          value: "first book",
          fieldName: "book name",
        },
        {
          value: "8",
          fieldName: "ordered amount",
        },
        {
          value: "$10.25",
          fieldName: "book price",
        },
        {
          value: "20.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "second book",
          fieldName: "book name",
        },
        {
          value: "10.00%",
          fieldName: "book discount",
        },
        {
          value: "1",
          fieldName: "ordered amount",
        },
        {
          value: "$42.50",
          fieldName: "book price",
        },
      ],
      link: "https://google.com",
    },
    {
      items: [
        {
          value: "third book",
          fieldName: "book name",
        },
        {
          value: "2",
          fieldName: "ordered amount",
        },
        {
          value: "$15.00",
          fieldName: "book price",
        },
        {
          value: "15.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "first book",
          fieldName: "book name",
        },
        {
          value: "8",
          fieldName: "ordered amount",
        },
        {
          value: "$10.25",
          fieldName: "book price",
        },
        {
          value: "20.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "second book",
          fieldName: "book name",
        },
        {
          value: "10.00%",
          fieldName: "book discount",
        },
        {
          value: "1",
          fieldName: "ordered amount",
        },
        {
          value: "$42.50",
          fieldName: "book price",
        },
      ],
    },
    {
      items: [
        {
          value: "third book",
          fieldName: "book name",
        },
        {
          value: "2",
          fieldName: "ordered amount",
        },
        {
          value: "$15.00",
          fieldName: "book price",
        },
        {
          value: "15.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "first book",
          fieldName: "book name",
        },
        {
          value: "8",
          fieldName: "ordered amount",
        },
        {
          value: "$10.25",
          fieldName: "book price",
        },
        {
          value: "20.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "second book",
          fieldName: "book name",
        },
        {
          value: "10.00%",
          fieldName: "book discount",
        },
        {
          value: "1",
          fieldName: "ordered amount",
        },
        {
          value: "$42.50",
          fieldName: "book price",
        },
      ],
    },
    {
      items: [
        {
          value: "third book",
          fieldName: "book name",
        },
        {
          value: "2",
          fieldName: "ordered amount",
        },
        {
          value: "$15.00",
          fieldName: "book price",
        },
        {
          value: "15.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "first book",
          fieldName: "book name",
        },
        {
          value: "8",
          fieldName: "ordered amount",
        },
        {
          value: "$10.25",
          fieldName: "book price",
        },
        {
          value: "20.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "second book",
          fieldName: "book name",
        },
        {
          value: "10.00%",
          fieldName: "book discount",
        },
        {
          value: "1",
          fieldName: "ordered amount",
        },
        {
          value: "$42.50",
          fieldName: "book price",
        },
      ],
    },
    {
      items: [
        {
          value: "third book",
          fieldName: "book name",
        },
        {
          value: "2",
          fieldName: "ordered amount",
        },
        {
          value: "$15.00",
          fieldName: "book price",
        },
        {
          value: "15.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "first book",
          fieldName: "book name",
        },
        {
          value: "8",
          fieldName: "ordered amount",
        },
        {
          value: "$10.25",
          fieldName: "book price",
        },
        {
          value: "20.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "second book",
          fieldName: "book name",
        },
        {
          value: "10.00%",
          fieldName: "book discount",
        },
        {
          value: "1",
          fieldName: "ordered amount",
        },
        {
          value: "$42.50",
          fieldName: "book price",
        },
      ],
    },
    {
      items: [
        {
          value: "third book",
          fieldName: "book name",
        },
        {
          value: "2",
          fieldName: "ordered amount",
        },
        {
          value: "$15.00",
          fieldName: "book price",
        },
        {
          value: "15.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "first book",
          fieldName: "book name",
        },
        {
          value: "8",
          fieldName: "ordered amount",
        },
        {
          value: "$10.25",
          fieldName: "book price",
        },
        {
          value: "20.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "second book",
          fieldName: "book name",
        },
        {
          value: "10.00%",
          fieldName: "book discount",
        },
        {
          value: "1",
          fieldName: "ordered amount",
        },
        {
          value: "$42.50",
          fieldName: "book price",
        },
      ],
    },
    {
      items: [
        {
          value: "third book",
          fieldName: "book name",
        },
        {
          value: "2",
          fieldName: "ordered amount",
        },
        {
          value: "$15.00",
          fieldName: "book price",
        },
        {
          value: "15.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "first book",
          fieldName: "book name",
        },
        {
          value: "8",
          fieldName: "ordered amount",
        },
        {
          value: "$10.25",
          fieldName: "book price",
        },
        {
          value: "20.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "second book",
          fieldName: "book name",
        },
        {
          value: "10.00%",
          fieldName: "book discount",
        },
        {
          value: "1",
          fieldName: "ordered amount",
        },
        {
          value: "$42.50",
          fieldName: "book price",
        },
      ],
    },
    {
      items: [
        {
          value: "third book",
          fieldName: "book name",
        },
        {
          value: "2",
          fieldName: "ordered amount",
        },
        {
          value: "$15.00",
          fieldName: "book price",
        },
        {
          value: "15.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "first book",
          fieldName: "book name",
        },
        {
          value: "8",
          fieldName: "ordered amount",
        },
        {
          value: "$10.25",
          fieldName: "book price",
        },
        {
          value: "20.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "second book",
          fieldName: "book name",
        },
        {
          value: "10.00%",
          fieldName: "book discount",
        },
        {
          value: "1",
          fieldName: "ordered amount",
        },
        {
          value: "$42.50",
          fieldName: "book price",
        },
      ],
    },
    {
      items: [
        {
          value: "third book",
          fieldName: "book name",
        },
        {
          value: "2",
          fieldName: "ordered amount",
        },
        {
          value: "$15.00",
          fieldName: "book price",
        },
        {
          value: "15.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "first book",
          fieldName: "book name",
        },
        {
          value: "8",
          fieldName: "ordered amount",
        },
        {
          value: "$10.25",
          fieldName: "book price",
        },
        {
          value: "20.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "second book",
          fieldName: "book name",
        },
        {
          value: "10.00%",
          fieldName: "book discount",
        },
        {
          value: "1",
          fieldName: "ordered amount",
        },
        {
          value: "$42.50",
          fieldName: "book price",
        },
      ],
    },
    {
      items: [
        {
          value: "third book",
          fieldName: "book name",
        },
        {
          value: "2",
          fieldName: "ordered amount",
        },
        {
          value: "$15.00",
          fieldName: "book price",
        },
        {
          value: "15.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "first book",
          fieldName: "book name",
        },
        {
          value: "8",
          fieldName: "ordered amount",
        },
        {
          value: "$10.25",
          fieldName: "book price",
        },
        {
          value: "20.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "second book",
          fieldName: "book name",
        },
        {
          value: "10.00%",
          fieldName: "book discount",
        },
        {
          value: "1",
          fieldName: "ordered amount",
        },
        {
          value: "$42.50",
          fieldName: "book price",
        },
      ],
    },
    {
      items: [
        {
          value: "third book",
          fieldName: "book name",
        },
        {
          value: "2",
          fieldName: "ordered amount",
        },
        {
          value: "$15.00",
          fieldName: "book price",
        },
        {
          value: "15.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "first book",
          fieldName: "book name",
        },
        {
          value: "8",
          fieldName: "ordered amount",
        },
        {
          value: "$10.25",
          fieldName: "book price",
        },
        {
          value: "20.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "second book",
          fieldName: "book name",
        },
        {
          value: "10.00%",
          fieldName: "book discount",
        },
        {
          value: "1",
          fieldName: "ordered amount",
        },
        {
          value: "$42.50",
          fieldName: "book price",
        },
      ],
    },
    {
      items: [
        {
          value: "third book",
          fieldName: "book name",
        },
        {
          value: "2",
          fieldName: "ordered amount",
        },
        {
          value: "$15.00",
          fieldName: "book price",
        },
        {
          value: "15.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "first book",
          fieldName: "book name",
        },
        {
          value: "8",
          fieldName: "ordered amount",
        },
        {
          value: "$10.25",
          fieldName: "book price",
        },
        {
          value: "20.00%",
          fieldName: "book discount",
        },
      ],
    },
    {
      items: [
        {
          value: "second book",
          fieldName: "book name",
        },
        {
          value: "10.00%",
          fieldName: "book discount",
        },
        {
          value: "1",
          fieldName: "ordered amount",
        },
        {
          value: "$42.50",
          fieldName: "book price",
        },
      ],
    },
    {
      items: [
        {
          value: "third book",
          fieldName: "book name",
        },
        {
          value: "2",
          fieldName: "ordered amount",
        },
        {
          value: "$15.00",
          fieldName: "book price",
        },
        {
          value: "15.00%",
          fieldName: "book discount",
        },
      ],
    },
  ],
  header: [
    {
      fieldName: "book name",
      copyable: true,
    },
    {
      fieldName: "ordered amount",
    },
    {
      fieldName: "book price",
    },
    {
      fieldName: "book discount",
    },
  ],
};
PaginableTable.args = PaginableTableArgs;

export const EmptyTable = Template.bind({});
const EmptyTableArgs: TableProps = {
  rowsClickable: true,
  paginationEnabled: true,
  onRowClick: (data) => {
    console.log("Clicked record:", data);
  },
  records: [],
  header: [
    {
      fieldName: "book name",
    },
    {
      fieldName: "ordered amount",
    },
    {
      fieldName: "book price",
    },
    {
      fieldName: "book discount",
    },
  ],
};
EmptyTable.args = EmptyTableArgs;

export const ToolbarTable = Template.bind({});
const ToolbarTableArgs: TableProps = {
  rowsClickable: true,
  paginationEnabled: true,
  onRowClick: (data) => {
    console.log("Clicked record:", data);
  },
  toolbarEnabled: true,
  toolbarProps: [
    {
      position: TableToolbarItemsPosition.Center,
      content: <Button text={"Test"} />,
    },
  ],
  records: [],
  header: [
    {
      fieldName: "book name",
    },
    {
      fieldName: "ordered amount",
    },
    {
      fieldName: "book price",
    },
    {
      fieldName: "book discount",
    },
  ],
};
ToolbarTable.args = ToolbarTableArgs;

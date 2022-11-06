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
          value: "record1",
          fieldName: "lorem1",
        },
        {
          value: "record3",
          fieldName: "lorem3",
        },
        {
          value: "record2",
          fieldName: "lorem2",
        },
      ],
    },
    {
      items: [
        {
          value: "record1",
          fieldName: "lorem1",
        },
        {
          value: "record2",
          fieldName: "lorem2",
        },
        {
          value: "record3",
          fieldName: "lorem3",
        },
      ],
    },
    {
      items: [
        {
          value: "record1",
          fieldName: "lorem1",
        },
        {
          value: "record2",
          fieldName: "lorem2",
        },
        {
          value: "record3",
          fieldName: "lorem3",
        },
      ],
    },
  ],
  header: [
    {
      fieldName: "lorem1",
    },
    {
      fieldName: "lorem2",
    },
    {
      fieldName: "lorem3",
    },
    {
      fieldName: "lorem4",
    },
  ],
};
SimpleTable.args = SimpleTableArgs;

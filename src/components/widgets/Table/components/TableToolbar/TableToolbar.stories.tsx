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

import TableToolbar from "./TableToolbar";
import {
  TableToolbarItemsPosition,
  TableToolbarProps,
} from "./TableToolbar.types";

export default {
  title: "ui-components/widgets/TableToolbar",
  component: TableToolbar,
  argTypes: {},
} as Meta<typeof TableToolbar>;
const Template: Story<TableToolbarProps> = (args) => <TableToolbar {...args} />;

export const SimpleTableToolbar = Template.bind({});
const SimpleTableToolbarArgs: TableToolbarProps = {
  items: [
    {
      position: TableToolbarItemsPosition.Left,
      content: <span>left</span>,
    },
    {
      position: TableToolbarItemsPosition.Center,
      content: <span>center</span>,
    },
    {
      position: TableToolbarItemsPosition.Left,
      content: <span>left</span>,
    },
    {
      position: TableToolbarItemsPosition.Right,
      content: <span>right</span>,
    },
    {
      position: TableToolbarItemsPosition.Center,
      content: <span>center</span>,
    },
    {
      position: TableToolbarItemsPosition.Right,
      content: <span>right</span>,
    },
  ],
};
SimpleTableToolbar.args = SimpleTableToolbarArgs;

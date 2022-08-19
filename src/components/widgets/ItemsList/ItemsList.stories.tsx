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

import ItemsList from "./ItemsList";
import { ItemsListProps } from "./ItemsList.types";

// import "./Navbar.scss"

export default {
  title: "ui-components/widgets/ItemsList",
  component: ItemsList,
  argTypes: {},
} as Meta<typeof ItemsList>;

const Template: Story<ItemsListProps> = (args) => <ItemsList {...args} />;

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  editEnabled: true,
  items: [
    {
      displayText: "Item 1",
    },
    {
      displayText: "Item 2",
    },
    {
      displayText: "Item 3",
    },
  ],
};

export const DeleteOperation = Template.bind({});
DeleteOperation.args = {
  deleteEnabled: true,
  items: [
    {
      displayText: "Item 1",
    },
    {
      displayText: "Item 2",
    },
    {
      displayText: "Item 3",
    },
  ],
};

export const AddOperation = Template.bind({});
AddOperation.args = {
  addEnabled: true,
  items: [
    {
      displayText: "Item 1",
    },
    {
      displayText: "Item 2",
    },
    {
      displayText: "Item 3",
    },
  ],
};

export const Full = Template.bind({});
Full.args = {
  addEnabled: true,
  editEnabled: true,
  deleteEnabled: true,
  items: [
    {
      displayText: "Item 1",
    },
    {
      displayText: "Item 2",
    },
    {
      displayText: "Item 3",
    },
  ],
};

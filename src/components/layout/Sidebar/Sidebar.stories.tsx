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

import Sidebar from "./Sidebar";
import { SidebarProps } from "./Sidebar.types";

export default {
  title: "ui-components/layout/Sidebar",
  component: Sidebar,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Sidebar>;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const SimpleNavbar = Template.bind({});
SimpleNavbar.args = {
  frontItem: <h2>Title</h2>,
  open: true,
  sections: [
    {
      title: "Section 1",
      items: [
        {
          text: "First element",
        },
        {
          text: "Second element",
        },
        {
          text: "Third element",
        },
      ],
    },
    {
      title: "Section 2",
      items: [
        {
          text: "First element",
        },
        {
          text: "Second element",
        },
        {
          text: "Third element",
        },
      ],
    },
  ],
} as SidebarProps;

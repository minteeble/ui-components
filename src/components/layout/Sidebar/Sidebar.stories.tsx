import React from "react";
import { Story, Meta } from "@storybook/react";

import Sidebar from "./Sidebar";
import { SidebarProps } from "./Sidebar.types";

export default {
  title: "ui-components/Sidebar",
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

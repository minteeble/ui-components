import React from "react";
import { Story, Meta } from "@storybook/react";

import Navbar from "./Navbar";
import { NavbarProps } from "./Navbar.types";

// import "./Navbar.scss"

export default {
  title: "ui-components/Navbar",
  component: Navbar,
  argTypes: {},
} as Meta<typeof Navbar>;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

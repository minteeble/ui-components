import React from "react";
import { Story, Meta } from "@storybook/react";

import Navbar from "./Navbar";
import { NavbarItemPosition, NavbarProps } from "./Navbar.types";
import WalletConnectionDisplay from "../../widgets/WalletConnectionDisplay/WalletConnectionDisplay";

export default {
  title: "ui-components/layout/Navbar",
  component: Navbar,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Navbar>;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const SimpleNavbar = Template.bind({});
SimpleNavbar.args = {
  items: [
    {
      position: NavbarItemPosition.Left,
      content: <p>Left</p>,
    },
    {
      position: NavbarItemPosition.Center,
      content: <p>Center</p>,
    },
    {
      position: NavbarItemPosition.Right,
      content: <p>Right</p>,
    },
  ],
} as NavbarProps;

export const MinteebleWalletNavbar = Template.bind({});
MinteebleWalletNavbar.args = {
  items: [
    {
      position: NavbarItemPosition.Left,
      content: <p>Minteeble</p>,
    },
    {
      position: NavbarItemPosition.Right,
      content: (
        <WalletConnectionDisplay
          address=""
          avatarImageUrl=""
          isLoading={false}
        />
      ),
    },
  ],
} as NavbarProps;

export const MobileNavbar = Template.bind({});
MobileNavbar.args = {
  items: [
    {
      position: NavbarItemPosition.Left,
      content: <p>Minteeble</p>,
    },
    {
      position: NavbarItemPosition.Right,
      content: <p>lorem</p>,
    },
    {
      position: NavbarItemPosition.Center,
      content: <p>lorem</p>,
    },
    {
      position: NavbarItemPosition.Left,
      content: <p>lorem</p>,
    },
  ],
} as NavbarProps;

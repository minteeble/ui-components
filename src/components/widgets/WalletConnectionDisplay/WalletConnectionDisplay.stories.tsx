import React from "react";
import { Story, Meta } from "@storybook/react";

import WalletConnectionDisplay from "./WalletConnectionDisplay";
import { WalletConnectionDisplayProps } from "./WalletCOnnectionDisplay.types";

// import "./Navbar.scss"

export default {
  title: "ui-components/widgets/WalletConnectionDisplay",
  component: WalletConnectionDisplay,
  argTypes: {},
} as Meta<typeof WalletConnectionDisplay>;

const Template: Story<WalletConnectionDisplayProps> = (args) => (
  <WalletConnectionDisplay {...args} />
);

export const WalletNotConnected = Template.bind({});
WalletNotConnected.args = {
  address: "",
  avatarImageUrl: "",
};

export const WalletConnected = Template.bind({});
WalletConnected.args = {
  address: "0xE53A10BeF39f00f11042c6E06ED1e4D79CEC352F",
  avatarImageUrl: "",
};

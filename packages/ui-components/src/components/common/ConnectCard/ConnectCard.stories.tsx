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

import ConnectCard from "./ConnectCard";
import { ConnectCardProps } from "./ConnectCard.types";

export default {
  title: "ui-components/common/ConnectCard",
  component: ConnectCard,
  argTypes: {},
} as Meta<typeof ConnectCard>;

const Template: Story<ConnectCardProps> = (args) => <ConnectCard {...args} />;

export const SimpleConnectCard = Template.bind({});
SimpleConnectCard.args = {
  message: "Connect your wallet",
  active: true,
  onConnect: () => {
    console.log("Connect");
  },
};

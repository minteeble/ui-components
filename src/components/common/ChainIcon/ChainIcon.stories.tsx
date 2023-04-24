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

import ChainIcon from "./ChainIcon";
import { ChainIconProps } from "./ChainIcon.types";

export default {
  title: "ui-components/common/ChainIcon",
  component: ChainIcon,
  argTypes: {},
} as Meta<typeof ChainIcon>;

const Template: Story<ChainIconProps> = (args) => <ChainIcon {...args} />;

export const SimpleChainIcon = Template.bind({});
SimpleChainIcon.args = {};

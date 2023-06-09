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

import PoweredByMinteeble from "./PoweredByMinteeble";
import { PoweredByMinteebleProps } from "./PoweredByMinteeble.types";

export default {
  title: "ui-components/common/PoweredByMinteeble",
  component: PoweredByMinteeble,
  argTypes: {},
} as Meta<typeof PoweredByMinteeble>;

const Template: Story<PoweredByMinteebleProps> = (args) => (
  <PoweredByMinteeble {...args} />
);

export const SimplePoweredByMinteeble = Template.bind({});
SimplePoweredByMinteeble.args = {};

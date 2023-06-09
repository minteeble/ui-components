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
/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import { Story, Meta } from "@storybook/react";

import MinteebleLogo from "./MinteebleLogo";
import { MinteebleLogoProps, MinteebleLogoTheme } from "./MinteebleLogo.types";

export default {
  title: "ui-components/common/MinteebleLogo",
  component: MinteebleLogo,
  argTypes: {},
} as Meta<typeof MinteebleLogo>;

const Template: Story<MinteebleLogoProps> = (args) => (
  <MinteebleLogo {...args} />
);

export const SimpleMinteebleLogo = Template.bind({});
SimpleMinteebleLogo.args = {
  theme: MinteebleLogoTheme.Dark,
};

/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/marketplace-lib
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import React from "react";
import { Story, Meta } from "@storybook/react";

import AvatarHash from "./AvatarHash";
import { AvatarHashProps } from "./AvatarHash.types";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { type } from "os";

export default {
  title: "ui-components/common/AvatarHash",
  component: AvatarHash,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof AvatarHash>;

const Template: Story<AvatarHashProps> = (args) => <AvatarHash {...args} />;

export const SimpleAvatarHash = Template.bind({});
SimpleAvatarHash.args = {
  width: 1000,
  address: "0x2dF075531F048c3448bC0D8490E16B84199E337F",
  borderRadius: 100,
} as AvatarHashProps;

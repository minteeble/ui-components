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

import AppVersionLabel from "./AppVersionLabel";
import { AppVersionLabelProps } from "./AppVersionLabel.types";

export default {
  title: "ui-components/common/AppVersionLabel",
  component: AppVersionLabel,
  argTypes: {},
} as Meta<typeof AppVersionLabel>;

const Template: Story<AppVersionLabelProps> = (args) => (
  <AppVersionLabel {...args} />
);

export const SimpleAppVersionLabel = Template.bind({});
SimpleAppVersionLabel.args = {};

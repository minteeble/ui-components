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

import LoadingSpinner from "./LoadingSpinner";
import { LoadingSpinnerProps } from "./LoadingSpinner.types";

export default {
  title: "ui-components/common/LoadingSpinner",
  component: LoadingSpinner,
  argTypes: {},
} as Meta<typeof LoadingSpinner>;

const Template: Story<LoadingSpinnerProps> = (args) => (
  <LoadingSpinner {...args} />
);

export const SimpleLoadingSpinner = Template.bind({});
SimpleLoadingSpinner.args = {};

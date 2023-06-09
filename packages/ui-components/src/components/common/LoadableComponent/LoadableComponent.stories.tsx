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

import LoadableComponent from "./LoadableComponent";
import { LoadableComponentProps } from "./LoadableComponent.types";

export default {
  title: "ui-components/common/LoadableComponent",
  component: LoadableComponent,
  argTypes: {},
} as Meta<typeof LoadableComponent>;

const Template: Story<LoadableComponentProps> = (args) => (
  <LoadableComponent {...args} />
);

export const SimpleLoadableComponent = Template.bind({});
SimpleLoadableComponent.args = {
  data: true,
  showCondition: (d) => !d,
};

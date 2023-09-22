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

import { SteppingWidget } from "./SteppingWidget";
import { SteppingWidgetProps } from "./SteppingWidget.types";

export default {
  title: "ui-components/widgets/SteppingWidget",
  component: SteppingWidget,
  argTypes: {},
} as Meta<typeof SteppingWidget>;

const Template: Story<SteppingWidgetProps> = (args) => (
  <SteppingWidget {...args}>
    <p>Simple paragraph</p>
    <div>Simple div</div>
  </SteppingWidget>
);

export const SimpleSteppingWidget = Template.bind({});
SimpleSteppingWidget.args = {};

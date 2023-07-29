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

import Toggle from "./Toggle";
import { ToggleProps } from "./Toggle.types";

export default {
  title: "ui-components/forms/Form/Toggle",
  component: Toggle,
  argTypes: {},
} as Meta<typeof Toggle>;

const Template: Story<ToggleProps> = (args) => {
  return <Toggle {...args} />;
};

export const SimpleToggle = Template.bind({});
SimpleToggle.args = {
  // text: "SimpleToggle",

  label: "Option",
};

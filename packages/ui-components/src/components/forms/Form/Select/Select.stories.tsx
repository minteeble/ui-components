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

import Select from "./Select";
import { SelectProps } from "./Select.types";

export default {
  title: "ui-components/forms/Form/Select",
  component: Select,
  argTypes: {},
} as Meta<typeof Select>;

const Template: Story<SelectProps> = (args) => {
  return <Select {...args} />;
};

export const SimpleSelect = Template.bind({});
SimpleSelect.args = {
  // text: "SimpleSelect",
  options: ["Option A", "Option B", "Option C"],
  placeHolder: "Select an option...",
  label: "Option",
};

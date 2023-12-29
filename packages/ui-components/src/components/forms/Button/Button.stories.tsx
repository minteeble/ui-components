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

import Button from "./Button";
import { ButtonProps, ButtonStyleType } from "./Button.types";

export default {
  title: "ui-components/forms/Button",
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "Primary",
};
export const Secondary = Template.bind({});

Secondary.args = {
  text: "Secondary",
  styleType: ButtonStyleType.Secondary,
};
export const Filled = Template.bind({});

Filled.args = {
  text: "Filled",
  styleType: ButtonStyleType.Filled,
};
export const PromiseButton = Template.bind({});

PromiseButton.args = {
  text: "Submit",
  onClick: async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log("RESOLVE");
        resolve("");
      }, 5000);
    });
  },
};

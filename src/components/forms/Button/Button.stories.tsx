import React from "react";
import { Story, Meta } from "@storybook/react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Marbella/Button",
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary",
};

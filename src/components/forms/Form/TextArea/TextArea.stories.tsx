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

import TextArea from "./TextArea";
import { TextAreaProps } from "./TextArea.types";

export default {
  title: "ui-components/forms/Form/TextArea",
  component: TextArea,
  argTypes: {},
} as Meta<typeof TextArea>;

const Template: Story<TextAreaProps> = (args) => {
  return <TextArea {...args} />;
};

export const SimpleTextArea = Template.bind({});
SimpleTextArea.args = {
  value: "lorem ipsum",
  placeHolder: "qwerty",
  errorMessage: "fill",
  label: "textarea",
  cols: 5,
  rows: 5,
};

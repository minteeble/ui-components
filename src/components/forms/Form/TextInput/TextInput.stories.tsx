/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";

import TextInput from "./TextInput";
import { TextInputProps } from "./TextInput.types";

export default {
  title: "ui-components/forms/Form/TextInput",
  component: TextInput,
  argTypes: {},
} as Meta<typeof TextInput>;

const Template: Story<TextInputProps> = (args) => {
  let [text, setText] = useState<string>("Initial text");

  return (
    <>
      <TextInput
        {...args}
        onValueChange={(newText: string) => {
          console.log("New text:", newText);
          setText(newText);
        }}
        value={text}
      />
    </>
  );
};

export const SimpleTextInput = Template.bind({});
SimpleTextInput.args = {
  // text: "SimpleForm",
};

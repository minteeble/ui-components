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

import KeyValueBox from "./KeyValueBox";
import { KeyValueBoxProps } from "./KeyValueBox.types";
import { ItemsListProps } from "../ItemsList";

export default {
  title: "ui-components/widgets/KeyValueBox",
  component: KeyValueBox,
  argTypes: {},
} as Meta<typeof KeyValueBox>;
const Template: Story<KeyValueBoxProps> = (args) => <KeyValueBox {...args} />;

export const SimpleKeyValueBox = Template.bind({});
const SimpleKeyValueBoxArgs: KeyValueBoxProps = {
  items: [
    {
      key: "key 1:",
      value: "value 1",
    },
    {
      key: "key 2:",
      value: "value 2",
    },
    {
      key: "key 3:",
      value: "value 3",
    },
    {
      key: "key 4:",
      value: "value 4",
    },
  ],
};
SimpleKeyValueBox.args = SimpleKeyValueBoxArgs;

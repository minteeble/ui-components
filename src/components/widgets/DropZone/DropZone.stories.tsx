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

import DropZone from "./DropZone";
import { DropZoneProps } from "./DropZone.types";
import { ItemsListProps } from "../ItemsList";

export default {
  title: "ui-components/widgets/DropZone",
  component: DropZone,
  argTypes: {},
} as Meta<typeof DropZone>;
const Template: Story<DropZoneProps> = (args) => <DropZone {...args} />;

export const SimpleDropZone = Template.bind({});
const SimpleDropZoneArgs: DropZoneProps = {
  title: "drop zone title",
  text: "drop zone text",
};
SimpleDropZone.args = SimpleDropZoneArgs;

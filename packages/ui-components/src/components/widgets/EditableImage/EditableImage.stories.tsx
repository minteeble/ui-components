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

import EditableImage from "./EditableImage";
import { EditableImageProps } from "./EditableImage.types";

export default {
  title: "ui-components/widgets/EditableImage",
  component: EditableImage,
  argTypes: {},
} as Meta<typeof EditableImage>;
const Template: Story<EditableImageProps> = (args) => (
  <EditableImage {...args} />
);

export const SimpleEditableImage = Template.bind({});
const SimpleEditableImageArgs: EditableImageProps = {
  image: "https://pics",
};
SimpleEditableImage.args = SimpleEditableImageArgs;

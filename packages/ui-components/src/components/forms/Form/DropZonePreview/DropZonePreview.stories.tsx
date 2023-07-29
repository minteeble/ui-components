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

import DropZonePreview from "./DropZonePreview";
import { DropZonePreviewProps } from "./DropZonePreview.types";

export default {
  title: "ui-components/forms/Form/DropZonePreview",
  component: DropZonePreview,
  argTypes: {},
} as Meta<typeof DropZonePreview>;

const Template: Story<DropZonePreviewProps> = (args) => {
  return <DropZonePreview {...args} />;
};

export const SimpleDropZonePreview = Template.bind({});
SimpleDropZonePreview.args = {
  label: "Set Image",
  value: "https://picsum.photos/400",
};

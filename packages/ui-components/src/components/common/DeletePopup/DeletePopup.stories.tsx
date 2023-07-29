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

import DeletePopup from "./DeletePopup";
import { DeletePopupProps } from "./DeletePopup.types";

export default {
  title: "ui-components/common/DeletePopup",
  component: DeletePopup,
  argTypes: {},
} as Meta<typeof DeletePopup>;

const Template: Story<DeletePopupProps> = (args) => <DeletePopup {...args} />;

export const SimpleDeletePopup = Template.bind({});
SimpleDeletePopup.args = {};

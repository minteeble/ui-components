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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import IconButton from "./IconButton";
import { IconButtonProps } from "./IconButton.types";

export default {
  title: "ui-components/IconButton",
  component: IconButton,
  argTypes: {},
} as Meta<typeof IconButton>;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const TestFontawesomeIcon = Template.bind({});
TestFontawesomeIcon.args = {
  icon: <FontAwesomeIcon icon={faXmark} />,
};

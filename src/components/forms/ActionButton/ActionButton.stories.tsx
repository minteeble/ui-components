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
import ActionButton from "./ActionButton";
import { Action, ActionButtonProps } from "./ActionButton.types";

export default {
  title: "ui-components/forms/ActionButton",
  component: ActionButton,
  argTypes: {},
} as Meta<typeof ActionButton>;

const Template: Story<ActionButtonProps> = (args) => <ActionButton {...args} />;

export const ConfirmButton = Template.bind({});
ConfirmButton.args = {
  action: Action.Confirm,
};

export const RejectButton = Template.bind({});
RejectButton.args = {
  action: Action.Reject,
};

export const EditButton = Template.bind({});
EditButton.args = {
  action: Action.Edit,
};

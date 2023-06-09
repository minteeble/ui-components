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

import { ActionPopupProps } from "./ActionPopup.types";
import ActionPopup from "./ActionPopup";

export default {
  title: "ui-components/widgets/ActionPopup",
  component: ActionPopup,
  argTypes: {},
} as Meta<typeof ActionPopup>;
const Template: Story<ActionPopupProps> = (args) => <ActionPopup {...args} />;

export const SimpleActionPopup = Template.bind({});

const SimpleActionPopupArgs: ActionPopupProps = {
  message:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto cupiditate similique iusto quis est saepe et, quibusdam ipsum autem placeat, pariatur velit labore! Perspiciatis ea provident in, officiis maiores asperiores?",
  open: true,
  title: "lorem ipsum dolor sit amet",
  onClose: () => {
    console.log("closed");
  },
};

SimpleActionPopup.args = SimpleActionPopupArgs;

export const ButtonsActionPopup = Template.bind({});

const ButtonsActionPopupArgs: ActionPopupProps = {
  message:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto cupiditate similique iusto quis est saepe et, quibusdam ipsum autem placeat, pariatur velit labore! Perspiciatis ea provident in, officiis maiores asperiores?",
  open: true,
  onClose: () => {
    console.log("closed");
  },
  items: [
    {
      text: "button 1",
      onClick: () => {
        console.log("button 1");
      },
    },
    {
      text: "button 2",
      onClick: () => {
        console.log("button 2");
      },
    },
    {
      text: "button 3",
      onClick: () => {
        console.log("button 3");
      },
    },
  ],
};

ButtonsActionPopup.args = ButtonsActionPopupArgs;

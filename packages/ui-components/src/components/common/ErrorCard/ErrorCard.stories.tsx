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

import ErrorCard from "./ErrorCard";
import { ErrorCardProps } from "./ErrorCard.types";

export default {
  title: "ui-components/common/ErrorCard",
  component: ErrorCard,
  argTypes: {},
} as Meta<typeof ErrorCard>;

const Template: Story<ErrorCardProps> = (args) => <ErrorCard {...args} />;

export const SimpleErrorCard = Template.bind({});
SimpleErrorCard.args = {
  errorMessage: "You are not the owner",
  canClose: true,
  active: true,
};

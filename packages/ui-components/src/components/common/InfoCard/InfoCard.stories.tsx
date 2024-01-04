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

import { InfoCard } from "./InfoCard";
import { InfoCardProps, InfoCardType } from "./InfoCard.types";

export default {
  title: "ui-components/common/InfoCard",
  component: InfoCard,
  argTypes: {},
} as Meta<typeof InfoCard>;

const Template: Story<InfoCardProps> = (args) => <InfoCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "Message",
};

export const SimpleInfoCard = Template.bind({});
SimpleInfoCard.args = {
  type: InfoCardType.Info,
  message: "Info message",
  active: true,
  closable: false,
};

export const ClosableInfoCard = Template.bind({});
ClosableInfoCard.args = {
  type: InfoCardType.Info,
  message: "Info message",
  active: true,
  closable: true,
};

export const SimpleSuccessCard = Template.bind({});
SimpleSuccessCard.args = {
  type: InfoCardType.Success,
  message: "Success message",
  active: true,
  closable: false,
};

export const ClosableSuccessCard = Template.bind({});
ClosableSuccessCard.args = {
  type: InfoCardType.Success,
  message: "Success message",
  active: true,
  closable: true,
};

export const SimpleWarningCard = Template.bind({});
SimpleWarningCard.args = {
  type: InfoCardType.Warning,
  message: "Warning message",
  active: true,
  closable: false,
};

export const ClosableWarningCard = Template.bind({});
ClosableWarningCard.args = {
  type: InfoCardType.Warning,
  message: "Warning message",
  active: true,
  closable: true,
};

export const SimpleErrorCard = Template.bind({});
SimpleErrorCard.args = {
  type: InfoCardType.Error,
  message: "Error message",
  active: true,
  closable: false,
};

export const ClosableErrorCard = Template.bind({});
ClosableErrorCard.args = {
  type: InfoCardType.Error,
  message: "Error message",
  active: true,
  closable: true,
};

export const SimpleLoadingCard = Template.bind({});
SimpleLoadingCard.args = {
  type: InfoCardType.Loading,
  message: "Loading message",
  active: true,
  closable: false,
};

export const ClosableLoadingCard = Template.bind({});
ClosableLoadingCard.args = {
  type: InfoCardType.Loading,
  message: "Loading message",
  active: true,
  closable: true,
};

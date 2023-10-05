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

import { InfoCardsStack } from "./InfoCardsStack";
import { InfoCardsStackProps } from "./InfoCardsStack.types";
import { InfoCard, InfoCardSize } from "../InfoCard";

export default {
  title: "ui-components/common/InfoCardsStack",
  component: InfoCardsStack,
  argTypes: {},
} as Meta<typeof InfoCardsStack>;

const Template: Story<InfoCardsStackProps> = (args) => (
  <InfoCardsStack {...args} />
);

export const SmallStack = Template.bind({});
SmallStack.args = {
  children: [
    <InfoCard message={"Test card"} size={InfoCardSize.Small} />,
    <InfoCard message={"Test card"} size={InfoCardSize.Small} />,
    <InfoCard message={"Test card"} size={InfoCardSize.Small} />,
    <InfoCard message={"Test card"} size={InfoCardSize.Small} />,
  ],
};

export const NormalStack = Template.bind({});
NormalStack.args = {
  children: [
    <InfoCard message={"Test card"} size={InfoCardSize.Normal} />,
    <InfoCard message={"Test card"} size={InfoCardSize.Normal} />,
    <InfoCard message={"Test card"} size={InfoCardSize.Normal} />,
    <InfoCard message={"Test card"} size={InfoCardSize.Normal} />,
  ],
};

export const LargeStack = Template.bind({});
LargeStack.args = {
  children: [
    <InfoCard message={"Test card"} size={InfoCardSize.Large} />,
    <InfoCard message={"Test card"} size={InfoCardSize.Large} />,
    <InfoCard message={"Test card"} size={InfoCardSize.Large} />,
    <InfoCard message={"Test card"} size={InfoCardSize.Large} />,
  ],
};

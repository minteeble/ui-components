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

import InfoBox from "./InfoBox";
import { InfoBoxProps } from "./InfoBox.types";

export default {
  title: "ui-components/widgets/InfoBox",
  component: InfoBox,
  argTypes: {},
} as Meta<typeof InfoBox>;

const Template: Story<InfoBoxProps> = (args) => <InfoBox {...args} />;

export const SimpleInfoBox = Template.bind({});
SimpleInfoBox.args = {
  title: "title",
  value: "20.00",
  subTitle: "sub title",
  buttonText: "submit",
  onButtonClick: () => {
    console.log("click");
  },
};

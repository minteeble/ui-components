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

import PageCard from "./PageCard";
import { PageCardProps } from "./PageCard.types";

export default {
  title: "ui-components/page/PageCard",
  component: PageCard,
  argTypes: {},
} as Meta<typeof PageCard>;

const Template: Story<PageCardProps> = (args) => <PageCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <h2>Test</h2>
    </>
  ),
};

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

import PageRow from "./PageRow";
import { PageRowProps } from "./PageRow.types";
import PageCard from "../PageCard/PageCard";

export default {
  title: "ui-components/page/PageRow",
  component: PageRow,
  argTypes: {},
} as Meta<typeof PageRow>;

const Template: Story<PageRowProps> = (args) => <PageRow {...args} />;

export const SimpleRow = Template.bind({});
SimpleRow.args = {
  children: (
    <>
      <PageCard>
        <h2>Card 1</h2>
      </PageCard>
      <PageCard>
        <h2>Card 2</h2>
      </PageCard>
      <PageCard>
        <h2>Card 3</h2>
      </PageCard>
    </>
  ),
};

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

import PageColumn from "./PageColumn";
import { PageColumnProps } from "./PageColumn.types";
import PageCard from "../PageCard/PageCard";

export default {
  title: "ui-components/page/PageColumn",
  component: PageColumn,
  argTypes: {},
} as Meta<typeof PageColumn>;

const Template: Story<PageColumnProps> = (args) => <PageColumn {...args} />;

export const SimpleColumn = Template.bind({});
SimpleColumn.args = {
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

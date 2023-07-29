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

import PageContent from "./PageContent";
import { PageContentProps } from "./PageContent.types";
import PageCard from "../PageCard/PageCard";
import PageRow from "../PageRow/PageRow";

export default {
  title: "ui-components/page/PageContent",
  component: PageContent,
  argTypes: {},
} as Meta<typeof PageContent>;

const Template: Story<PageContentProps> = (args) => <PageContent {...args} />;

export const SimpleColumn = Template.bind({});
SimpleColumn.args = {
  children: (
    <>
      <PageRow>
        <PageCard>
          <h2>Card 1</h2>
        </PageCard>
        <PageCard>
          <h2>Card 2</h2>
        </PageCard>
        <PageCard>
          <h2>Card 3</h2>
        </PageCard>
      </PageRow>
      <PageRow>
        <PageCard>
          <h2>Card 1</h2>
        </PageCard>
        <PageCard>
          <h2>Card 2</h2>
        </PageCard>
      </PageRow>
    </>
  ),
};

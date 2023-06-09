import React from "react";
import { Story, Meta } from "@storybook/react";

import Footer from "./Footer";
import { FooterProps } from "./Footer.types";

export default {
  title: "ui-components/layout/Footer",
  component: Footer,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Footer>;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const SimpleFooter = Template.bind({});
SimpleFooter.args = {} as FooterProps;

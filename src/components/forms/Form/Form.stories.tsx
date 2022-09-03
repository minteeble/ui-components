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

import Form from "./Form";
import { FormProps } from "./Form.types";

export default {
  title: "ui-components/forms/Form",
  component: Form,
  argTypes: {},
} as Meta<typeof Form>;

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const SimpleForm = Template.bind({});
SimpleForm.args = {
  // text: "SimpleForm",
};

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
import {
  FormFieldType,
  FormProps,
  SelectParams,
  ToggleParams,
} from "./Form.types";

export default {
  title: "ui-components/forms/Form",
  component: Form,
  argTypes: {},
} as Meta<typeof Form>;

const Template: Story<FormProps> = (args) => {
  return (
    <Form
      {...args}
      elements={[
        {
          fieldName: "first-name",
          type: FormFieldType.TextInput,
          label: "First name",
          placeholder: "Enter your first name",
        },
        {
          fieldName: "last-name",
          type: FormFieldType.TextInput,
          label: "Last name",
          placeholder: "Enter your last name",
        },
        {
          fieldName: "option",
          type: FormFieldType.Select,
          label: "Option",
          placeholder: "Select option",
          options: ["Option A", "Option B", "Option C"],
        } as SelectParams,
        {
          fieldName: "enabled",
          type: FormFieldType.Toggle,
          label: "Enabled",
        } as ToggleParams,
      ]}
      onSubmit={(data: Record<string, any>) => {
        console.log(data);
      }}
    />
  );
};

export const SimpleForm = Template.bind({});
SimpleForm.args = {
  // text: "SimpleForm",
};

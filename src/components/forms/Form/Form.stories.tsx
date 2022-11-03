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
  TextInputParams,
  ToggleParams,
} from "./Form.types";
import { TextInputType } from "./TextInput";

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
          required: true,
          label: "First name",
          placeholder: "Enter your first name",
        },
        {
          fieldName: "last-name",
          type: FormFieldType.TextInput,
          label: "Last name",
          required: true,
          placeholder: "Enter your last name",
        },
        {
          fieldName: "email",
          type: FormFieldType.TextInput,
          label: "E-mail",
          required: true,
          placeholder: "Enter your email",
          textInputType: TextInputType.Email,
          isValid: (value: any) => {
            return (
              /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i.test(value) ||
              "Invalid email."
            );
          },
        } as TextInputParams,
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

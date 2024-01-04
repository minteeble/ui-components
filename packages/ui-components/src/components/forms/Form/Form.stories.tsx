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
  DropZoneParams,
  FormFieldType,
  FormProps,
  SelectParams,
  TextAreaParams,
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
  return <Form {...args} />;
};

export const SimpleForm = Template.bind({});
SimpleForm.args = {
  submitEnabled: true,
  elements: [
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
      fieldName: "tel",
      type: FormFieldType.TextInput,
      label: "Telephone",
      required: true,
      sanitize: (val) => {
        let regex = /^[0-9]*$/;

        return regex.test(val);
      },
      placeholder: "Enter your last name",
    },
    {
      fieldName: "gender",
      type: FormFieldType.Select,
      label: "Gender",
      required: true,
      placeholder: "Enter your gender",
      options: ["Male", "Female", "Other"],
    } as SelectParams,
    {
      fieldName: "email",
      type: FormFieldType.TextInput,
      label: "E-mail",
      required: true,
      placeholder: "Enter your email",
      textInputType: TextInputType.Email,
      isValid: (value: any) => {
        return (
          /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i.test(value) || "Invalid email."
        );
      },
    } as TextInputParams,
    {
      fieldName: "info",
      type: FormFieldType.TextArea,
      label: "Info",
      required: true,
      placeholder: "Additional Info",
      resizable: true,
    } as TextAreaParams,
  ],
  onSubmit: (data: Record<string, any>) => {
    console.log(data);
  },
  onError: (errors: Array<string | undefined>) => {
    console.log("Errors");
  },
};

export const EditableForm = Template.bind({});

EditableForm.args = {
  editable: true,
  enableSubmit: true,
  elements: [
    {
      fieldName: "first-name",
      type: FormFieldType.TextInput,
      required: true,
      label: "First name",
      placeholder: "Enter your first name",
    },
  ],
};

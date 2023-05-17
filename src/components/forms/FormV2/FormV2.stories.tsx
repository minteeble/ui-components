/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";

import { FormV2 } from "./FormV2";
import { FormInjectedData, FormV2Props } from "./FormV2.types";
import { useFormV2 } from "./useFormV2";

import {
  CheckboxButtonsFormField,
  RadioButtonsFormField,
  SelectFormField,
  TextAreaFormField,
  TextAreaFormFieldResizeOption,
  TextFormField,
} from "./../FormV2Fields";

export default {
  title: "ui-components/forms/FormV2",
  component: FormV2,
  argTypes: {},
} as Meta<typeof FormV2>;

const Template: Story<FormV2Props> = (args) => {
  const formLogic = useFormV2({});

  useEffect(() => {
    formLogic.addField({
      key: "name",
      value: "John",
      label: "Name",
      transform: (value) => value.toLowerCase(),
      validate: (value) => {
        console.log("Value", value, value.length < 15);
        return value.length < 15;
      },
      placeholder: "Enter name...",
      attributes: {},
      fieldComponent: TextFormField,
    });

    formLogic.addField({
      key: "surname",
      value: "Doe",
      label: "Surname",
      placeholder: "Enter surname",
      fieldComponent: TextFormField,
    });

    formLogic.addField({
      key: "textArea",
      value: "John",
      label: "Text area",
      transform: (value) => value.toLowerCase(),

      placeholder: "Enter name...",
      attributes: {
        enableResize: TextAreaFormFieldResizeOption.None,
      },
      fieldComponent: TextAreaFormField,
    });

    formLogic.addField({
      key: "select",
      value: "",
      label: "Color",

      placeholder: "Select a color...",
      attributes: {
        options: ["blue", "green", "red", "yellow", "brown", "black", "white"],
      },
      fieldComponent: SelectFormField,
    });

    formLogic.addField({
      key: "gender",
      value: "Male",
      label: "Select gender",
      attributes: {
        options: ["Male", "Female", "Other"],
      },
      fieldComponent: RadioButtonsFormField,
    });

    formLogic.addField({
      key: "hobbies",
      value: [],
      label: "Select your hobbies",
      attributes: {
        options: ["Programming", "Music", "Books", "Other"],
      },
      fieldComponent: CheckboxButtonsFormField,
    });

    formLogic.onFieldValueChange("name", (field) => {
      console.log("Name changed", field.value);
    });

    formLogic.onSubmit((formData: FormInjectedData): void => {
      console.log("Click", formData);
    });

    formLogic.setSubmitText("Ok");
  }, []);

  return <FormV2 formLogic={formLogic} />;
};

export const SimpleForm = Template.bind({});
SimpleForm.args = {};

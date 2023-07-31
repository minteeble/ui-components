/**
 * Copyright Minteeble 2023. All Rights Reserved.
 * Node module: @minteeble/ui-components-extra
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import {
  FormV2,
  FormV2Props,
  useFormV2,
  BooleanCheckboxFormField,
  CheckboxButtonsFormField,
  ConfigurableKeyValueFormField,
  DropZoneFormField,
  KeyValueFormField,
  MultiSelectFormField,
  RadioButtonsFormField,
  SelectFormField,
  TextAreaFormField,
  TextAreaFormFieldResizeOption,
  TextFormField,
  FormOnSubmitDataModel,
} from "@minteeble/ui-components";
import { Story, Meta } from "@storybook/react";
import { useEffect, useState } from "react";

import { CodeEditorFormField } from "./FormV2Fields";
import React from "react";

export default {
  title: "ui-components-extra/forms/FormV2",
  component: FormV2,
  argTypes: {},
} as Meta<typeof FormV2>;

const Template: Story<FormV2Props> = (args) => {
  const formLogic = useFormV2({});

  useEffect(() => {
    formLogic.addField({
      key: "name",
      value: "",
      required: true,
      label: "Name",
      transform: (value) => value.toLowerCase(),
      validate: (value) => {
        console.log("Value", value, value.length < 15);
        return value.length < 15;
      },
      displayInvalidValue: true,
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
      transform: (value) => value.toUpperCase(),
      copyable: true,
      required: true,
    });

    formLogic.addField({
      key: "age",
      value: "18",
      label: "Age",
      placeholder: "Enter age...",
      fieldComponent: TextFormField,
      validate: (value) => {
        return /^[0-9]+$/.test(value) || "Age is number";
      },
      required: true,
      displayInvalidValue: true,

      // showLiveError: true,
    });

    formLogic.addField({
      key: "description",
      value: "",
      label: "Description",

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
      required: true,
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
        options: [
          "Male",
          "Female",
          "Other",
          {
            text: "collection",
            value: "address",
          },
        ],
      },
      fieldComponent: RadioButtonsFormField,
    });

    formLogic.addField({
      key: "hobbies",
      value: [],
      label: "Select your hobbies",
      attributes: {
        options: [
          "Programming",
          "Music",
          "Books",
          "Other",
          {
            text: "collection",
            value: "address",
          },
        ],
      },
      fieldComponent: CheckboxButtonsFormField,
    });

    formLogic.addField({
      key: "car",
      value: [],
      label: "Select your Car Brand",
      attributes: {
        options: ["BMW", "Audi", "Mercedes"],
        customSelectEnabled: true,
      },
      fieldComponent: MultiSelectFormField,
      required: true,
    });

    formLogic.addField({
      key: "option",
      value: {
        key: "value",
      },
      fieldComponent: KeyValueFormField,
      label: "Options",
    });

    formLogic.addField({
      key: "agree",
      value: false,
      label: "Accept condition",
      attributes: {
        checkboxText: "Accept our conditions",
      },
      fieldComponent: BooleanCheckboxFormField,
    });

    formLogic.addField({
      key: "code",
      value: "",
      label: "Custom code",
      fieldComponent: CodeEditorFormField,
      placeholder: "// write your code",
    });

    formLogic.onFieldValueChange("name", (field) => {
      console.log("Name changed", field.value);
    });

    formLogic.onSubmit((formData: FormOnSubmitDataModel): void => {
      console.log("Click", formData);
    });

    formLogic.setSubmitText("Ok");
  }, []);

  useEffect(() => {
    console.log("Fields", formLogic.fields);
  }, [formLogic.fields]);

  return <FormV2 formLogic={formLogic} />;
};

export const SimpleForm = Template.bind({});
SimpleForm.args = {};

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
import {
  FormFieldState,
  FormInjectedData,
  FormOnSubmitDataModel,
  FormV2Props,
} from "./FormV2.types";
import { useFormV2 } from "./useFormV2";

import {
  CheckboxButtonsFormField,
  DropZoneFormField,
  MultiSelectFormField,
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
      required: true,
      label: "Name",
      transform: (value) => value.toLowerCase(),
      validate: (value) => {
        console.log("Value", value, value.length < 15);
        return value.length < 15;
      },
      showLiveError: true,
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
      showLiveError: true,
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
        options: ["Programming", "Music", "Books", "Other"],
      },
      fieldComponent: CheckboxButtonsFormField,
    });

    formLogic.addField({
      key: "car",
      value: [],
      label: "Select your Car Brand",
      attributes: {
        options: ["BMW", "Audi", "Mercedes"],
      },
      fieldComponent: MultiSelectFormField,
    });

    // formLogic.addField({
    //   key: "image",
    //   value: [],
    //   label: "Set image",

    //   fieldComponent: DropZoneFormField,
    // });

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

const ReadOnlyTemplate: Story<FormV2Props> = (args) => {
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
      readOnly: true,
      copyable: true,
    });

    formLogic.addField({
      key: "surname",
      value: "Doe",
      label: "Surname",
      placeholder: "Enter surname",
      fieldComponent: TextFormField,
      required: true,
      readOnly: true,
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
      readOnly: true,
    });

    formLogic.addField({
      key: "select",
      value: "green",
      label: "Color",

      placeholder: "Select a color...",
      attributes: {
        options: ["blue", "green", "red", "yellow", "brown", "black", "white"],
      },
      fieldComponent: SelectFormField,
      readOnly: true,
    });

    formLogic.addField({
      key: "gender",
      value: "Male",
      label: "Select gender",
      attributes: {
        options: ["Male", "Female", "Other"],
      },
      fieldComponent: RadioButtonsFormField,
      readOnly: true,
    });

    formLogic.addField({
      key: "hobbies",
      value: ["Music", "Books"],
      label: "Select your hobbies",

      attributes: {
        options: ["Programming", "Music", "Books", "Other"],
      },
      fieldComponent: CheckboxButtonsFormField,
      readOnly: true,
      copyable: true,
    });

    formLogic.onFieldValueChange("name", (field) => {
      console.log("Name changed", field.value);
    });

    // formLogic.onSubmit((formData: FormInjectedData): void => {
    //   console.log("Click", formData);
    // });

    formLogic.setSubmitText("Ok");
  }, []);

  return (
    <FormV2
      onSubmit={() => {
        console.log("HELLO WORLD");
      }}
      formLogic={formLogic}
    />
  );
};

const LongSubmitTemplate: Story<FormV2Props> = (args) => {
  const formLogic = useFormV2({});

  useEffect(() => {
    formLogic.addField({
      key: "name",
      value: "John",
      label: "Name",
      placeholder: "Enter name...",
      attributes: {},
      fieldComponent: TextFormField,
    });
  }, []);

  return (
    <FormV2
      onSubmit={async () => {
        console.log("Triggered submit...");
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            console.log("Submit timeout completed");
            resolve();
          }, 2000);
        });
      }}
      formLogic={formLogic}
    />
  );
};

const FormWithoutSubmitTemplate: Story<FormV2Props> = (args) => {
  const formLogic = useFormV2({});

  useEffect(() => {
    formLogic.addField({
      key: "name",
      value: "John",
      label: "Name",
      placeholder: "Enter name...",
      attributes: {},
      fieldComponent: TextFormField,
    });

    formLogic.enableSubmit(false);
  }, []);

  return <FormV2 formLogic={formLogic} />;
};
const FormDropZoneTemplate: Story<FormV2Props> = (args) => {
  const formLogic = useFormV2({});

  useEffect(() => {
    formLogic.addField({
      key: "image",
      value: "",
      label: "Set image",
      fieldComponent: DropZoneFormField,
    });

    formLogic.onSubmit((formData: FormOnSubmitDataModel) => {
      console.log("DATA", formData);
    });

    formLogic.enableSubmit(true);
  }, []);

  return <FormV2 formLogic={formLogic} />;
};

const ProgressiveFormTemplate: Story<FormV2Props> = (args) => {
  const formLogic = useFormV2({});

  useEffect(() => {
    formLogic.addField({
      key: "name",
      value: "John",
      required: true,
      label: "Name",
      transform: (value) => value.toLowerCase(),
      validate: (value) => {
        console.log("Value", value, value.length < 15);
        return value.length < 15;
      },
      showLiveError: false,
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
      showLiveError: false,
      active: (value: any, formData: FormFieldState[]) => {
        return (
          formData.find((field: FormFieldState) => field.key === "name")?.value
            .length > 15
        );
      },
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
      active: (value: any, formData: FormFieldState[]) => {
        return (
          formData.find((field: FormFieldState) => field.key === "surname")
            ?.value.length > 3
        );
      },
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

const MultiSelectFormTemplate: Story<FormV2Props> = (args) => {
  const formLogic = useFormV2({});

  useEffect(() => {
    formLogic.addField({
      key: "tags",
      value: "",
      label: "Add tags",
      fieldComponent: MultiSelectFormField,
      attributes: {
        options: ["One", "Two", "Three", "Four", "Five"],
        customSelectEnabled: false,
      },
    });

    formLogic.enableSubmit(true);
  }, []);

  return (
    <FormV2
      onSubmit={(formData: FormOnSubmitDataModel) => {
        console.log("DATA", formData.values.tags);
      }}
      formLogic={formLogic}
    />
  );
};

export const SimpleForm = Template.bind({});
SimpleForm.args = {};

export const ReadOnlyForm = ReadOnlyTemplate.bind({});
ReadOnlyForm.args = {};

export const LongSubmitForm = LongSubmitTemplate.bind({});
LongSubmitForm.args = {};

export const WithoutSubmitForm = FormWithoutSubmitTemplate.bind({});
WithoutSubmitForm.args = {};

export const DropZoneForm = FormDropZoneTemplate.bind({});
DropZoneForm.args = {};

export const ProgressiveForm = ProgressiveFormTemplate.bind({});
ProgressiveForm.args = {};

export const MultiSelectForm = MultiSelectFormTemplate.bind({});
MultiSelectForm.args = {};

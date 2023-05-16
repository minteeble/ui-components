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
import { FormV2Props } from "./FormV2.types";
import { useFormV2 } from "./useFormV2";

import { TextFormField } from "../FormV2Fields/TextFormField";

export default {
  title: "ui-components/forms/FormV2",
  component: FormV2,
  argTypes: {},
} as Meta<typeof FormV2>;

const Template: Story<FormV2Props> = (args) => {
  const formLogic = useFormV2({});
  const [testInterval, setTestInterval] = useState<boolean>(true);

  useEffect(() => {
    console.log(testInterval);
  }, [testInterval]);

  useEffect(() => {
    setInterval(() => {
      setTestInterval((v) => !v);
    }, 3000);
    formLogic.addField({
      key: "name",
      value: "John",
      label: "Name",
      transform: (value) => value.toLowerCase(),
      validate: (value) => {
        console.log("Value", value, value.length < 15);
        return value.length < 15;
      },
      active: testInterval,
      placeholder: "Enter name...",
      attributes: {},
      fieldComponent: TextFormField,
    });

    formLogic.addField({
      key: "surname",
      value: "Doe",
      label: "Surname",
      placeholder: "Enter surname",
      attributes: {},
      active: (value, fields) => {
        let nameField = fields.find((field) => field.key === "name");

        return nameField?.value?.length > 10;
      },
      fieldComponent: TextFormField,
    });

    formLogic.onFieldValueChange("name", (field) => {
      console.log("Name changed", field.value);
    });
  }, []);

  return <FormV2 formLogic={formLogic} />;
};

export const SimpleForm = Template.bind({});
SimpleForm.args = {};

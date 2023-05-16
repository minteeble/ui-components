/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import React, { useEffect } from "react";
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

  useEffect(() => {
    formLogic.addField({
      type: "text-input",
      key: "name",
      value: "Samuele",
      fieldComponent: TextFormField,
    });
  }, []);

  return <FormV2 formLogic={formLogic} />;
};

export const SimpleForm = Template.bind({});
SimpleForm.args = {};

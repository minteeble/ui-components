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

import { SteppingWidget } from "./SteppingWidget";
import { SteppingWidgetProps } from "./SteppingWidget.types";
import { useStep } from "./useStep";
import { useSteppingWidget } from "./useSteppingWidget";

export default {
  title: "ui-components/widgets/SteppingWidget",
  component: SteppingWidget,
  argTypes: {},
} as Meta<typeof SteppingWidget>;

const TestStep = () => {
  const step = useStep();

  useEffect(() => {
    step.nextStepReady();
  }, []);

  return (
    <div>
      <p>Step {step.stepIndex}</p>
    </div>
  );
};

const Template: Story<SteppingWidgetProps> = (args) => {
  const logic = useSteppingWidget({});

  return (
    <SteppingWidget {...args} logic={logic}>
      <TestStep />
      <TestStep />
      <TestStep />
    </SteppingWidget>
  );
};

export const SimpleSteppingWidget = Template.bind({});
SimpleSteppingWidget.args = {};

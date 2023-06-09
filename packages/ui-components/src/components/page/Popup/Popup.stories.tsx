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

import Popup from "./Popup";
import { PopupProps } from "./Popup.types";
import { usePopup } from "./usePopup";
import { Button } from "../../forms";

export default {
  title: "ui-components/page/Popup",
  component: Popup,
  argTypes: {},
} as Meta<typeof Popup>;

const Template: Story<PopupProps> = (args) => {
  let popupLogic = usePopup();

  return (
    <>
      <Button text="Open popup" onClick={popupLogic.openPopup} />
      <Popup {...{ ...args, popupLogic }} />
    </>
  );
};

// const popupLogic = usePopup();

export const SimplePopup = Template.bind({});
SimplePopup.args = {
  children: (
    <>
      <h2>Test content</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
        tempora non cum commodi laboriosam nemo explicabo sit accusamus ab
        porro.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        veniam. Dolorem accusamus placeat temporibus laborum provident aliquid
        ducimus tenetur. Eos magnam libero neque molestiae quibusdam est
        consectetur cum nobis dolores, soluta atque ut ea doloribus, dignissimos
        debitis fuga deserunt eaque amet? Dignissimos incidunt officiis iure
        soluta cum unde corporis doloribus.
      </p>
    </>
  ),
};

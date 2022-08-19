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
import LoadingSpinner from "../LoadingSpinner";
import { LoadableComponentProps } from "./LoadableComponent.types";

const LoadableComponent = (props: LoadableComponentProps) => {
  let showCondition = props.showCondition || (() => false);

  return <>{showCondition(props.data) ? props.children : <LoadingSpinner />}</>;
};

export default LoadableComponent;

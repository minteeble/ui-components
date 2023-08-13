/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import { ClassExtensible, ParentComponent } from "../../../models";

export interface LoadableComponentProps
  extends ClassExtensible,
    ParentComponent {
  data?: any;
  showCondition?: (data: any) => boolean;
}
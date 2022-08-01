import { ClassExtensible, ParentComponent } from "../../../models";

export interface LoadableComponentProps
  extends ClassExtensible,
    ParentComponent {
  data?: any;
  showCondition?: (data: any) => boolean;
}

// Types
import { AppValuesContextType } from "../../../../contexts/app-context/types/app-values.context.type";

export type FeedbackReturnHookType = Pick<AppValuesContextType, "day"> & {
  work: boolean | null;
};

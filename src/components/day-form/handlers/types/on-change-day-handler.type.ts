// Types
import { AppValuesContextType } from "../../../../contexts/app-context/types/app-values.context.type";

export type OnChangeDayHandlerType = Pick<AppValuesContextType, "setDay"> & {
  event: React.ChangeEvent<HTMLInputElement>;
};

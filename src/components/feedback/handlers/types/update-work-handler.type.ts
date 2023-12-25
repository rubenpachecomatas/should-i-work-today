// Types
import { AppValuesContextType } from "../../../../contexts/app-context/types/app-values.context.type";

export type UpdateWorkHandlerType = Pick<
  AppValuesContextType,
  "day" | "holidays"
> & {
  setWork: (value: boolean | null) => void;
};

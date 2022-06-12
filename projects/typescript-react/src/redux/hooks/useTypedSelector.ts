import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux_state";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

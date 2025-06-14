import { useContext } from "react";
import { AppErrorsContext } from "../providers/AppErrorsProvider";

export const useAppErrors = () => {
    const context = useContext(AppErrorsContext);
    if (!context) {
        throw new Error("'useApiError' hook must be used within an AppErrorsProvider");
    }
    return context;
};

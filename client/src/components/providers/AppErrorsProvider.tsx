import { createContext, useState } from "react";

type AppErrorsProviderContextValue = {
    errors: Array<string>;
    setErrors: React.Dispatch<React.SetStateAction<Array<string>>>;
};

type AppErrorsProviderProps = {
    children: React.ReactNode;
};

export const AppErrorsContext = createContext<AppErrorsProviderContextValue>({
    errors: [],
    setErrors: () => [],
});

export const AppErrorsProvider = ({ children }: AppErrorsProviderProps) => {
    const [errors, setErrors] = useState<Array<string>>([]);
    const contextValue = { errors, setErrors };

    return <AppErrorsContext.Provider value={contextValue}>{children}</AppErrorsContext.Provider>;
};

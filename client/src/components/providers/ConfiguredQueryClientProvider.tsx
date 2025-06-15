import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAppErrors } from "../../hooks/useAppErrors";
import { useMemo } from "react";

type ConfiguredQueryClientProviderProps = {
    children?: React.ReactNode;
};

export const ConfiguredQueryClientProvider = ({ children }: ConfiguredQueryClientProviderProps) => {
    const { setErrors } = useAppErrors();

    const queryClient = useMemo(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: 0,
                        refetchOnWindowFocus: false,
                    },
                },
                queryCache: new QueryCache({
                    onError: (error) => {
                        setErrors(appendErrors(error));
                    },
                }),
                mutationCache: new MutationCache({
                    onError: (error) => {
                        setErrors(appendErrors(error));
                    },
                }),
            }),
        []
    );

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

const appendErrors = (newError: Error) => (currentMessages: Array<string>) => {
    const { message: newMessage } = newError;

    return currentMessages.filter((curr) => curr !== newMessage).concat(newMessage);
};

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AppErrorsContext } from "./providers/AppErrorsProvider";

type ErrorBoundaryProps = {
    children: ReactNode;
};

type ErrorBoundaryState = {
    error: Error | null;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    static contextType = AppErrorsContext;
    declare context: React.ContextType<typeof AppErrorsContext>;

    state: ErrorBoundaryState = {
        error: null,
    };

    componentDidUpdate(): void {
        const { error } = this.state;
        const { errors, setErrors } = this.context;

        if (error) {
            const errorMessage = `Something went wrong: ${error.message}`;
            const isAlreadyLogged = errors.includes(errorMessage);

            if (!isAlreadyLogged) {
                setErrors((prevErrors) => [...prevErrors, errorMessage]);
            }
        }
    }

    public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.error) {
            return null;
        }

        return this.props.children;
    }
}

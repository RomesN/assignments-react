import { Container } from "./components/Container";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { ConfiguredQueryClientProvider } from "./components/providers/ConfiguredQueryClientProvider";
import { AppErrorsProvider } from "./components/providers/AppErrorsProvider";
import { GlobalErrorsDisplay } from "./components/GlobalErrorsDisplay";
import { ToDoItems } from "./components/ToDoItems";
import { ErrorBoundary } from "./components/ErrorBoundary";

export const App = () => (
    <ThemeProvider>
        <AppErrorsProvider>
            <ConfiguredQueryClientProvider>
                <Container>
                    <GlobalErrorsDisplay />
                    <ErrorBoundary>
                        <ToDoItems />
                    </ErrorBoundary>
                </Container>
            </ConfiguredQueryClientProvider>
        </AppErrorsProvider>
    </ThemeProvider>
);

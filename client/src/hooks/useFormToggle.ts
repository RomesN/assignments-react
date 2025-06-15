import { useState, useCallback } from "react";

export function useFormToggle<T>(onSubmit: (value: T) => void) {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleOpenForm = useCallback(() => setIsFormOpen(true), []);
    const handleCloseForm = useCallback(() => setIsFormOpen(false), []);
    const handleSubmitForm = useCallback(
        (value: T) => {
            onSubmit(value);
            setIsFormOpen(false);
        },
        [onSubmit]
    );

    return {
        isFormOpen,
        handleOpenForm,
        handleCloseForm,
        handleSubmitForm,
    };
}

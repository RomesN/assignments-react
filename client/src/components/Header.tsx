import { useCallback, useState } from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import styled from "styled-components";
import { Form } from "./form";

const StyledDiv = styled.header`
    display: flex;

    gap: 8px;
    align-items: center;

    button {
        all: unset;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 25px;
        height: 25px;

        background-color: ${(props) => props.theme.colors.grass9};
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        border-radius: 50%;

        color: #fff;
    }
`;

type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header = ({ children, onItemAdd }: HeaderProps) => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleAddClick = () => setIsFormOpen(true);
    const handleSubmit = useCallback((label: string) => {
        onItemAdd(label);
        setIsFormOpen(false);
    }, []);
    const handleCancel = useCallback(() => setIsFormOpen(false), []);

    return (
        <StyledDiv>
            <h1>{children}</h1>
            {isFormOpen ? (
                <Form onSubmit={handleSubmit} onCancel={handleCancel} initialValue="" />
            ) : (
                <button aria-label="Add item" onClick={handleAddClick}>
                    <PlusIcon />
                </button>
            )}
        </StyledDiv>
    );
};

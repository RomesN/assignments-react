import { PlusIcon } from "@radix-ui/react-icons";
import styled from "styled-components";
import { Form } from "./form";
import { useFormToggle } from "../hooks/useFormToggle";

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
    const { isFormOpen, handleOpenForm, handleCloseForm, handleSubmitForm } = useFormToggle(onItemAdd);

    return (
        <StyledDiv>
            <h1>{children}</h1>
            {isFormOpen ? (
                <Form onSubmit={handleSubmitForm} onCancel={handleCloseForm} initialValue="" />
            ) : (
                <button aria-label="Add item" onClick={handleOpenForm}>
                    <PlusIcon />
                </button>
            )}
        </StyledDiv>
    );
};

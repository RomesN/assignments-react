import { PlusIcon } from "@radix-ui/react-icons";
import styled from "styled-components";
import { useFormToggle } from "../hooks/useFormToggle";
import { Form } from "./form";
import { Button, getPrimaryButtonStyle } from "./Button";

const StyledDiv = styled.header`
    display: flex;

    gap: 8px;
    align-items: center;

    button {
        ${(props) => getPrimaryButtonStyle(props.theme)}
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
                <Button aria-label="Add item" onClick={handleOpenForm} primary>
                    <PlusIcon />
                </Button>
            )}
        </StyledDiv>
    );
};

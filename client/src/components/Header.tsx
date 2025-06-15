import { PlusIcon } from "@radix-ui/react-icons";
import styled from "styled-components";
import { useFormToggle } from "../hooks/useFormToggle";
import { getPrimaryButtonStyle } from "./Button";
import { ToggleableForm } from "./ToggleableForm";

const StyledDiv = styled.header`
    display: flex;

    gap: 8px;
    align-items: center;
    justify-content: space-between;

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
            <ToggleableForm
                isFormOpen={isFormOpen}
                initialValue={""}
                onClickOpen={handleOpenForm}
                onSubmit={handleSubmitForm}
                onCancel={handleCloseForm}
                ariaLabelOpenButton="Add item"
            >
                <PlusIcon />
            </ToggleableForm>
        </StyledDiv>
    );
};

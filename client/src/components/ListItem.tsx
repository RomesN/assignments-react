import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";
import { Button } from "./Button";
import { ToggleableForm } from "./ToggleableForm";
import { useFormToggle } from "../hooks/useFormToggle";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    label {
        margin-right: auto;
    }

    button:not([type]) {
        visibility: hidden;
    }

    &:hover {
        button:not([type]) {
            visibility: visible;
        }
    }
`;

const Label = styled.label`
    margin-left: 15px;
`;

export type LiteeItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export const ListItem = (props: LiteeItemProp) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;
    const { isFormOpen, handleOpenForm, handleCloseForm, handleSubmitForm } = useFormToggle(onItemLabelEdit);

    return (
        <StyledDiv>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            <Label>{label}</Label>
            <Button onClick={() => onItemDelete()}>
                <TrashIcon />
            </Button>
            <ToggleableForm
                isFormOpen={isFormOpen}
                onClickOpen={handleOpenForm}
                initialValue={label}
                onSubmit={handleSubmitForm}
                onCancel={handleCloseForm}
            >
                <Pencil1Icon />
            </ToggleableForm>
        </StyledDiv>
    );
};

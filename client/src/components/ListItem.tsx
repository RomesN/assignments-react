import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";
import { Form } from "./form";
import { Button } from "./Button";
import { useFormToggle } from "../hooks/useFormToggle";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    label {
        margin-right: auto;
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
            {isFormOpen ? (
                <Form initialValue={props.label} onSubmit={handleSubmitForm} onCancel={handleCloseForm} />
            ) : (
                <Button onClick={handleOpenForm}>
                    <Pencil1Icon />
                </Button>
            )}
        </StyledDiv>
    );
};

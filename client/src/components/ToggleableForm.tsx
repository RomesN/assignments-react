import { Button } from "./Button";
import { Form } from "./form";

type ToggleableFormProps = {
    isFormOpen: boolean;
    onClickOpen: React.ComponentProps<typeof Button>["onClick"];
    children?: React.ReactNode;
    ariaLabelOpenButton?: string;
} & React.ComponentProps<typeof Form>;

export const ToggleableForm = (props: ToggleableFormProps) => {
    return props.isFormOpen ? (
        <Form initialValue={props.initialValue} onSubmit={props.onSubmit} onCancel={props.onCancel} />
    ) : (
        <Button onClick={props.onClickOpen} ariaLabel={props.ariaLabelOpenButton}>
            {props.children}
        </Button>
    );
};

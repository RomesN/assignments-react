import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";

const meta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
    argTypes: {
        onClick: { action: "Button click" },
        children: { control: "text" },
        type: {
            control: "select",
            options: ["submit", "reset", "button", undefined],
        },
    },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        primary: true,
        children: "+",
    },
};

export const Secondary: Story = {
    args: {
        primary: false,
        children: "-",
    },
};

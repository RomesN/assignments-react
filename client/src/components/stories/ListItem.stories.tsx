import { Meta, StoryObj } from "@storybook/react";

import { ListItem } from "../ListItem";

const meta = {
    title: "List Item",
    component: ListItem,
    argTypes: {
        onItemDelete: { action: "removed" },
        onItemLabelEdit: { action: "edited" },
    },
    parameters: {
        docs: {
            description: {
                component:
                    'This component show buttons when the user hovers over it. Check the "Hovered" story to see this state directly.',
            },
        },
    },
} as Meta<typeof ListItem>;
export default meta;
type Story = StoryObj<typeof ListItem>;
export const ToDo: Story = {
    args: {
        label: "Lorem ipsum dolor",
    },
};
export const Done: Story = {
    args: {
        ...ToDo.args,
        isDone: true,
    },
};

export const Hovered: Story = {
    args: {
        label: "Hovered item",
    },
    play: async ({ canvasElement }) => {
        const buttons = canvasElement.querySelectorAll("button");
        buttons.forEach((button) => {
            button.style.visibility = "visible";
        });
    },
};

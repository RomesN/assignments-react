import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { Layout } from "../Layout";
import { Header } from "../Header";
import { List } from "../List";
import { Footer } from "../Footer";
import { ListItem } from "../ListItem";

type Story = StoryObj<typeof Layout>;

const meta = {
    title: "Layout",
    component: Layout,
} satisfies Meta<typeof Layout>;

export default meta;

const getStoryItemHandlers = (i: number) => ({
    onItemLabelEdit: action("Edit label - new label of item " + i),
    onItemDoneToggle: action("Toggle done state - new state of item " + i),
    onItemDelete: action("Remove item " + i),
});

export const Empty: Story = {};

export const Populated: Story = {
    args: {
        children: (
            <>
                <Header onItemAdd={action("Add new item")}>Populated header</Header>
                <List>
                    {Array.from({ length: 3 }, (_, i) => (
                        <ListItem key={i} {...getStoryItemHandlers(i + 1)} label={`Item ${i + 1}`} isDone={i > 1} />
                    ))}
                </List>
                <Footer todoItems={2} />
            </>
        ),
    },
};

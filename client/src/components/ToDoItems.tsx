import styled from "styled-components";
import { Layout } from "./Layout";
import { List } from "./List";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useAddItem, useGetItems } from "./api/items";
import { ListItem } from "./ListItem";

export const LoadingInfo = styled.p`
    margin-top: 1.6rem;
`;

export const ToDoItems = () => {
    const { data: items, isFetching, isSuccess } = useGetItems();
    const { mutate: addItem } = useAddItem();

    return (
        <Layout>
            <Header onItemAdd={addItem}>To Do app</Header>
            {isFetching && <LoadingInfo>Loading data...</LoadingInfo>}
            {isSuccess && (
                <List>
                    {items.map((itm) => (
                        <ListItem
                            key={itm.id}
                            label={itm.label}
                            isDone={itm.isDone}
                            onItemDelete={() => {
                                console.error("Not implemented");
                            }}
                            onItemLabelEdit={(label) => {
                                console.error("Not implemented", label);
                            }}
                            onItemDoneToggle={(isDone) => {
                                console.error("Not implemented", isDone);
                            }}
                        />
                    ))}
                </List>
            )}
            <Footer />
        </Layout>
    );
};

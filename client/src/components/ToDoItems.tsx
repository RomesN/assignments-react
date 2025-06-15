import styled from "styled-components";
import { Layout } from "./Layout";
import { List } from "./List";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useAddItem, useDeleteItem, useEditItem, useGetItems } from "./api/items";
import { ListItem } from "./ListItem";

export const LoadingInfo = styled.p`
    margin-top: 1.6rem;
`;

export const ToDoItems = () => {
    const { data: items, isFetching, isSuccess } = useGetItems();
    const { mutate: addItem } = useAddItem();
    const { mutate: editItem } = useEditItem();
    const { mutate: deleteItem } = useDeleteItem();

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
                            onItemDelete={() => deleteItem(itm.id)}
                            onItemLabelEdit={(label) => editItem({ ...itm, label })}
                            onItemDoneToggle={(isDone) => editItem({ ...itm, isDone })}
                        />
                    ))}
                </List>
            )}
            <Footer />
        </Layout>
    );
};

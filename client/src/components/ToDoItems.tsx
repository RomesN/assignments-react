import styled from "styled-components";
import { Layout } from "./Layout";
import { List } from "./List";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ListItem } from "./ListItem";
import { useAddItem, useDeleteItem, useEditItem, useGetItems, useUpdateIsDone } from "../api/items";
import { getCounts } from "../utils/itemsUtils";

export const LoadingInfo = styled.p`
    margin-top: 1.6rem;
`;

export const ToDoItems = () => {
    const { data: items, isFetching, isSuccess } = useGetItems();
    const { mutate: addItem } = useAddItem();
    const { mutate: editItem } = useEditItem();
    const { mutate: updateIsDone } = useUpdateIsDone();
    const { mutate: deleteItem } = useDeleteItem();
    const counts = getCounts(items);

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
                            onItemDoneToggle={(isDone) => updateIsDone({ ...itm, isDone })}
                        />
                    ))}
                </List>
            )}
            <Footer todoItems={counts.todoItems} doneItems={counts.doneItems} />
        </Layout>
    );
};

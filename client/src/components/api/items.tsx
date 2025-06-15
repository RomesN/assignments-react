import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ToDoItem } from "../types/item";

export const itemsDao = axios.create({
    baseURL: `${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}/items`,
    headers: { "Content-Type": "application/json" },
});

const TODO_LIST_KEY = "TODO_LIST";

export const getItems = async () => {
    return await itemsDao
        .get<Array<ToDoItem>>("/")
        .then((respone) => respone.data)
        .catch((error) => {
            console.error("Error fetching items:", error);
            throw new Error("Unable to retrieve to do items. Please try again later.");
        });
};

export const useGetItems = () => useQuery({ queryKey: [TODO_LIST_KEY], queryFn: getItems });

export const addItem = async (label: string) => {
    return await itemsDao
        .post<ToDoItem>("/", {
            label,
            isDone: false,
        })
        .then((respone) => respone.data)
        .catch((error) => {
            console.error("Error saving item:", error);
            throw new Error("Unable to save item. Please try again later.");
        });
};

export const useAddItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addItem,
        onSuccess: (itm) => queryClient.setQueryData([TODO_LIST_KEY], (items: Array<ToDoItem>) => [...items, itm]),
    });
};

export const editItem = async (editedTodo: ToDoItem) => {
    return await itemsDao
        .patch<ToDoItem>(`/${editedTodo.id}`, editedTodo)
        .then((respone) => respone.data)
        .catch((error) => {
            console.error("Error saving item:", error);
            throw new Error(`Unable to edit item with id ${editedTodo.id}. Please try again later.`);
        });
};

export const useEditItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: editItem,
        onSuccess: (updatedItem) =>
            queryClient.setQueryData([TODO_LIST_KEY], (items: Array<ToDoItem>) =>
                items.map((item) => (item.id === updatedItem.id ? updatedItem : item))
            ),
    });
};

export const deleteItem = async (id: number) => {
    return await itemsDao.delete<ToDoItem>(`/${id}`).catch((error) => {
        console.error("Error deleting item:", error);
        throw new Error(`Unable to delete item with id ${id}. Please try again later.`);
    });
};

export const useDeleteItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteItem(id).then(() => id),
        onSuccess: (id) =>
            queryClient.setQueryData([TODO_LIST_KEY], (items: Array<ToDoItem>) =>
                items.filter((item) => item.id !== id)
            ),
    });
};

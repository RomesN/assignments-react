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

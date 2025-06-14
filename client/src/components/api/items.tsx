import axios from "axios";
import { useQuery } from "@tanstack/react-query";
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

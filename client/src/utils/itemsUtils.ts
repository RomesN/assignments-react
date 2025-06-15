import { ToDoItem } from "../types/item";

export const sortCallback = (itemA: ToDoItem, itemB: ToDoItem) => {
    if (itemA.isDone && !itemB.isDone) {
        return 1;
    }
    if (!itemA.isDone && itemB.isDone) {
        return -1;
    }

    return itemB.createdAt - itemA.createdAt;
};

export const getCounts = (items?: Array<ToDoItem>) => {
    if (!items) {
        return { todoItems: 0, doneItems: 0 };
    }

    const todoItems = items.length;
    const doneItems = items.filter((itm) => itm.isDone).length;

    return { todoItems, doneItems };
};

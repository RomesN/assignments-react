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

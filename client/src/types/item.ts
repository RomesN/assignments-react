export type ToDoItem = {
    id: number;
    label: string;
    isDone: boolean;
    createdAt: number;
    finishedAt?: number;
};

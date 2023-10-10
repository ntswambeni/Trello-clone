export type Action =
  | {
      type: "ADD_TASK";
      payload: { text: string; listId: string };
    }
  | {
      type: "ADD_LIST";
      payload: string;
    };

export const addTask = (text: string, listId: string): Action => ({
  type: "ADD_TASK",
  payload: { text, listId },
});

export const addList = (text: string): Action => ({
  type: "ADD_LIST",
  payload: text,
});

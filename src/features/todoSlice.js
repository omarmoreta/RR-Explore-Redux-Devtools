import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
      return state;
    },
    removeTodo: (state, action) => {
      state.items.pop(action.payload);
      return state;
    },
    clearAll: () => {
      return { items: [] };
    },
  },
});

export const { addTodo, removeTodo, clearAll } = todoSlice.actions;

export default todoSlice.reducer;

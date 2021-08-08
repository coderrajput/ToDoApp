import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNote(state, action) {},
    removeNote(state, action) {},
    editNote(state, action) {}
  }
});

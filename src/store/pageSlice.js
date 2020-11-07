import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "page",
    initialState: 1,
    reducers: {
        setPage: (state, action) => action.payload,
    },
});

const { actions, reducer } = pageSlice;
export const { setPage } = actions;
export default reducer;

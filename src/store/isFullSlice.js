const { createSlice } = require("@reduxjs/toolkit");

const isFullSlice = createSlice({
    name: "isFull",
    initialState: false,
    reducers: {
        setIsFull: (state, action) => action.payload,
    },
});

const { actions, reducer } = isFullSlice;
export const { setIsFull } = actions;
export default reducer;

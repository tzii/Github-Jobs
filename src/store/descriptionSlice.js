const { createSlice } = require("@reduxjs/toolkit");

const descriptionSlice = createSlice({
    name: "description",
    initialState: "",
    reducers: {
        setDescription: (state, action) => action.payload,
    },
});

const { actions, reducer } = descriptionSlice;
export const { setDescription } = actions;
export default reducer;

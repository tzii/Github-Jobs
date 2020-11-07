const { createSlice } = require("@reduxjs/toolkit");

const locationSlice = createSlice({
    name: "location",
    initialState: "",
    reducers: {
        setLocation: (state, action) => action.payload,
    },
});

const { actions, reducer } = locationSlice;
export const { setLocation } = actions;
export default reducer;

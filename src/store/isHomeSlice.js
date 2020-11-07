const { createSlice } = require("@reduxjs/toolkit");

const isHomeSlice = createSlice({
    name: "isHome",
    initialState: true,
    reducers: {
        setIsHome: (state, action) => action.payload,
    },
});

const { actions, reducer } = isHomeSlice;
export const { setIsHome } = actions;
export default reducer;

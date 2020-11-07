const { createSlice } = require("@reduxjs/toolkit");

const jobIdSlice = createSlice({
    name: "jobId",
    initialState: "",
    reducers: {
        setJobId: (state, action) => action.payload,
    },
});

const { actions, reducer } = jobIdSlice;
export const { setJobId } = actions;
export default reducer;

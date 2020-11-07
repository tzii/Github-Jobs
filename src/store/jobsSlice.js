import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getJobs as search } from "../api";

export const getJobs = createAsyncThunk(
    "getJobs",
    async (i, { dispatch, getState }) => {
        let state = getState();
        let jobs = await search(
            state.description,
            state.location,
            state.isFull,
            state.page
        );
        return jobs;
    }
);

const jobsSlice = createSlice({
    name: "jobs",
    initialState: [],
    extraReducers: {
        [getJobs.fulfilled]: (state, action) => action.payload,
    },
});

const { reducer } = jobsSlice;
export default reducer;

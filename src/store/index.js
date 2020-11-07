import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobsSlice";
import isFullReducer from "./isFullSlice";
import locationReducer from "./locationSlice";
import descriptionReducer from "./descriptionSlice";
import pageReducer from "./pageSlice";
import isHomeReducer from "./isHomeSlice";
import jobIdReducer from "./jobIdSlice";

export default configureStore({
    reducer: {
        jobs: jobsReducer,
        isFull: isFullReducer,
        location: locationReducer,
        description: descriptionReducer,
        page: pageReducer,
        idHome: isHomeReducer,
        jobId: jobIdReducer,
    },
});

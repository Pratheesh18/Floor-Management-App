import { configureStore } from "@reduxjs/toolkit";
import tableReducer from '../slices/tableSlice';


export const store = configureStore({
    reducer : {
        tables : tableReducer,
    }
});

export default store;
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { fetchTables,updateTable,toggleTableStatus } from '../api/api';

export const getTables = createAsyncThunk('tables/getTables',async () => {
    const response = await fetchTables();
    return response.data;
});

const tableSlice = createSlice({
    name : 'tables',
    initialState:[],
    reducers:{
        updatePosition : (state,action) => {
            const {id,position} = action.payload;
            const table = state.find((t) => t.id === id);
            if(table){
                table.position = position;
            }
        },
        toggleStatus:(state,action) => {
            const table = state.find((t) => t.id === action.payload);
            if(table){
                table.isActive = !table.isActive;
            }
        },
        extraReducers : (builder) => {
            builder.addCase(getTables.fulfilled,(state,action) => action.payload);
        }
    }
});

export const {updatePosition,toggleStatus} = tableSlice.actions;
export default tableSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


const roomSlice = createSlice({
    name : 'rooms',
    initialState:[],
    reducers : {
        addRoom : (state,action) => {
            state.push(action.payload);
        }
    }
});


export const {addRoom} = roomSlice.actions;
export default roomSlice.reducer;
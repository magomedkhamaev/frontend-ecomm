import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../utils/axios';

export const fetchProdCat = createAsyncThunk ('category/getAll', async () => {
    const { data } = await axios.get('/category/');
    return data;
});


const initialState = {
    items: [],
    status: 'loading',
    
}

const prodCatSlice = createSlice({
    name: 'prodCat',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProdCat.pending]: (state) => {
            state.status = 'loading';
            state.items = null;
         },
         [fetchProdCat.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.items = action.payload;
         },
         [fetchProdCat.rejected]: (state) => {
            state.status = 'error';
            state.items = null;
         },
     },
    
});

export const prodCatReducer = prodCatSlice.reducer;
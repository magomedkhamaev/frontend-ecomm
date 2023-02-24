import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import wish from "../../utils/axios";
export const fetchColor = createAsyncThunk('fetchColor', async () => {
//    const {priceFrom, priceTo} = params;
   const { data } = await wish.get('/color/');
   return data;
})


const initialState = {
    colors: {
        items: [],
        status: 'loading',
    },
   //  tags: {
   //      items: [],
   //      status: 'loading',
   //  }
};

const colorsSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {
   //    setItems(state, action) {
   //       state.items = action.payload;
   //   },
    },
    extraReducers: {
     [fetchColor.pending]: (state) => {
        state.colors.items = [];
        state.colors.status = 'loading';
     },
     [fetchColor.fulfilled]: (state, action) => {
        state.colors.items = action.payload;
        state.colors.status = 'loaded';
     },
     [fetchColor.rejected]: (state) => {
        state.colors.items = [];
        state.colors.status = 'error';
     },

//      [fetchTags.pending]: (state) => {
//         state.tags.items = [];
//         state.tags.status = 'loading';
//      },
//      [fetchTags.fulfilled]: (state, action) => {
//         state.tags.items = action.payload;
//         state.tags.status = 'loaded';
//      },
//      [fetchTags.rejected]: (state) => {
//         state.tags.items = [];
//         state.tags.status = 'error';
//      },

//    [fetchRemovePost.pending]: (state, action) => {
//       state.posts.items = state.posts.items.filter(obj => obj._id !== action.meta.arg);
//    },
    },
})

export const colorReducer = colorsSlice.reducer;
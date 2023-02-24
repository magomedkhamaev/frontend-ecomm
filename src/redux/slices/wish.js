import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import {config} from "../../utils/axios"
import wish from "../../utils/axios"


export const fetchAddProduct = createAsyncThunk('/fetchAddProduct', async (fields) => {
   // const {id} = params;
   const { data } = await wish.put(`/product/wishlist`, fields);
   return data;
})
export const fetchWish = createAsyncThunk('/fetchWishProduct', async () => {
    // const {id} = params;
    const { data } = await wish.get('/user/wishlist');
    return data;
 })
const initialState = {
    productWish: {
        items: [],
        status: 'loading',
    },
   //  tags: {
   //      items: [],
   //      status: 'loading',
   //  }
};

const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
   //    setItems(state, action) {
   //       state.items = action.payload;
   //   },
    },
    extraReducers: {
       [fetchAddProduct.pending]: (state) => {
      state.productWish.items = [];
      state.productWish.status = 'loading';
   },
   [fetchAddProduct.fulfilled]: (state, action) => {
      state.productWish.items = action.payload;
      state.productWish.status = 'loaded';
   },
   [fetchAddProduct.rejected]: (state) => {
      state.productWish.items = [];
      state.productWish.status = 'error';
   },
   [fetchWish.pending]: (state) => {
      state.productWish.items = [];
      state.productWish.status = 'loading';
   },
   [fetchWish.fulfilled]: (state, action) => {
      state.productWish.items= action.payload;
      state.productWish.status = 'loaded';
   },
   [fetchWish.rejected]: (state) => {
      state.productWish.items = [];
      state.productWish.status = 'error';
   },

// //      [fetchTags.pending]: (state) => {
// //         state.tags.items = [];
// //         state.tags.status = 'loading';
// //      },
// //      [fetchTags.fulfilled]: (state, action) => {
// //         state.tags.items = action.payload;
// //         state.tags.status = 'loaded';
// //      },
// //      [fetchTags.rejected]: (state) => {
// //         state.tags.items = [];
// //         state.tags.status = 'error';
// //      },

// //    [fetchRemovePost.pending]: (state, action) => {
// //       state.posts.items = state.posts.items.filter(obj => obj._id !== action.meta.arg);
// //    },
     },
 })

 export const wishReducer = wishSlice.reducer;
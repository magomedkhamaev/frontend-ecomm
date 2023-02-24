import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {config} from "../../utils/axios"
import wish from "../../utils/axios"

export const fetchProducts = createAsyncThunk('/fetchProducts', async (params) => {
   const {priceFrom, priceTo, setColor,fSize,secSize, sortBy} = params;
   const { data } = await wish.get(`/product/?${priceFrom}${priceTo}${setColor}${fSize}${secSize}${sortBy}`);
   return data;
})
// export const fetchAddProduct = createAsyncThunk('/fetchAddProduct', async (fields) => {
//    // const {id} = params;
//    const { data } = await wish.put(`/product/wishlist`, fields);
//    return data;
// })
// export const fetchWish = createAsyncThunk('/fetchWishProduct', async () => {
//    // const {id} = params;
//    const { data } = await wish.get('/user/wishlist');
//    return data;
// })


const initialState = {
    products: {
        items: [],
        status: 'loading',
    },
   //  tags: {
   //      items: [],
   //      status: 'loading',
   //  }
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
   //    addItems(state, action) {
   //       state.items.push(action.payload);
   //   },
    },
    extraReducers: {
     [fetchProducts.pending]: (state) => {
        state.products.items = [];
        state.products.status = 'loading';
     },
     [fetchProducts.fulfilled]: (state, action) => {
        state.products.items = action.payload;
        state.products.status = 'loaded';
     },
     [fetchProducts.rejected]: (state) => {
        state.products.items = [];
        state.products.status = 'error';
     },
   //   [fetchAddProduct.pending]: (state) => {
   //    state.products.items = [];
   //    state.products.status = 'loading';
   // },
   // [fetchAddProduct.fulfilled]: (state, action) => {
   //    state.products.items = action.payload;
   //    state.products.status = 'loaded';
   // },
   // [fetchAddProduct.rejected]: (state) => {
   //    state.products.items = [];
   //    state.products.status = 'error';
   // },
   // [fetchWish.pending]: (state) => {
   //    state.products.items = [];
   //    state.products.status = 'loading';
   // },
   // [fetchWish.fulfilled]: (state, action) => {
   //    state.products.items= action.payload;
   //    state.products.status = 'loaded';
   // },
   // [fetchWish.rejected]: (state) => {
   //    state.products.items = [];
   //    state.products.status = 'error';
   // },

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

export const productsReducer = productsSlice.reducer;
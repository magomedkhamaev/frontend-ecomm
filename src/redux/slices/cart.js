import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {config} from "../../utils/axios"
 import wish from "../../utils/axios"

// export const fetchProducts = createAsyncThunk('/fetchProducts', async (params) => {
//    const {priceFrom, priceTo, setColor,fSize,secSize, sortBy} = params;
//    const { data } = await axios.get(`http://localhost:5000/api/product/?${priceFrom}${priceTo}${setColor}${fSize}${secSize}${sortBy}`);
//    return data;
// })
export const fetchAddToCart = createAsyncThunk('/fetchAddToCart', async (item) => {
   // const {id} = params;
   const { data } = await wish.post(`/user/cart`, item);
   return data;
})
export const fetchCart = createAsyncThunk('/fetchCart', async () => {
   // const {id} = params;
   const { data } = await wish.get('/user/cart');
   return data;
})


const initialState = {
    cart: {
        items: {},
        status: 'loading',
    },
   //  tags: {
   //      items: [],
   //      status: 'loading',
   //  }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
   //    addItems(state, action) {
   //       state.items.push(action.payload);
   //   },
    },
    extraReducers: {
     [fetchAddToCart.pending]: (state) => {
        state.cart.items = [];
        state.cart.status = 'loading';
     },
     [fetchAddToCart.fulfilled]: (state, action) => {
        state.cart.items = action.payload;
        state.cart.status = 'loaded';
     },
     [fetchAddToCart.rejected]: (state) => {
        state.cart.items = [];
        state.cart.status = 'error';
     },
//      [fetchAddProduct.pending]: (state) => {
//       state.cart.items = [];
//       state.cart.status = 'loading';
//    },
//    [fetchAddProduct.fulfilled]: (state, action) => {
//       state.cart.items = action.payload;
//       state.cart.status = 'loaded';
//    },
//    [fetchAddProduct.rejected]: (state) => {
//       state.cart.items = [];
//       state.cart.status = 'error';
//    },
   [fetchCart.pending]: (state) => {
      state.cart.items = [];
      state.cart.status = 'loading';
   },
   [fetchCart.fulfilled]: (state, action) => {
      state.cart.items= action.payload;
      state.cart.status = 'loaded';
   },
   [fetchCart.rejected]: (state) => {
      state.cart.items = [];
      state.cart.status = 'error';
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

export const cartReducer = cartSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {config} from "../../utils/axios"
 import wish from "../../utils/axios"

// export const fetchProducts = createAsyncThunk('/fetchProducts', async (params) => {
//    const {priceFrom, priceTo, setColor,fSize,secSize, sortBy} = params;
//    const { data } = await axios.get(`http://localhost:5000/api/product/?${priceFrom}${priceTo}${setColor}${fSize}${secSize}${sortBy}`);
//    return data;
// })
export const fetchAddComment = createAsyncThunk('/fetchAddComment', async (comItem) => {
   // const {id} = params;
   const { data } = await wish.put(`/product/rating`, comItem);
   return data;
})
export const fetchComments = createAsyncThunk('/fetchComments', async (id) => {
   // const {id} = params;
   const { data } = await wish.get(`/product/all-ratings/${id}`);
   return data;
})


const initialState = {
    comment: {
        items: {},
        status: 'loading',
    },
   //  tags: {
   //      items: [],
   //      status: 'loading',
   //  }
};

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
   //    addItems(state, action) {
   //       state.items.push(action.payload);
   //   },
    },
    extraReducers: {
     [fetchAddComment.pending]: (state) => {
        state.comment.items = [];
        state.comment.status = 'loading';
     },
     [fetchAddComment.fulfilled]: (state, action) => {
        state.comment.items = action.payload;
        state.comment.status = 'loaded';
     },
     [fetchAddComment.rejected]: (state) => {
        state.comment.items = [];
        state.comment.status = 'error';
     },
//      [fetchAddProduct.pending]: (state) => {
//       state.comment.items = [];
//       state.comment.status = 'loading';
//    },
//    [fetchAddProduct.fulfilled]: (state, action) => {
//       state.comment.items = action.payload;
//       state.comment.status = 'loaded';
//    },
//    [fetchAddProduct.rejected]: (state) => {
//       state.comment.items = [];
//       state.comment.status = 'error';
//    },
   [fetchComments.pending]: (state) => {
      state.comment.items = [];
      state.comment.status = 'loading';
   },
   [fetchComments.fulfilled]: (state, action) => {
      state.comment.items= action.payload;
      state.comment.status = 'loaded';
   },
   [fetchComments.rejected]: (state) => {
      state.comment.items = [];
      state.comment.status = 'error';
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

export const commentReducer = commentSlice.reducer;
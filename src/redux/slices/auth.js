import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../utils/axios';

export const fetchAuth = createAsyncThunk ('auth/login', async (params) => {
    const { data } = await axios.post('/user/login', params);
    return data;
});
  
 export const fetchRegister = createAsyncThunk ('auth/register', async (params) => {
   const { data } = await axios.post('/user/register', params);
   return data;
 });

 export const fetchLogout = createAsyncThunk ('auth/fetchLogout', async () => {
   const { data } = await axios.get('/user/logout');
   return data;
 });

 export const fetchMe = createAsyncThunk ('auth/fetchMe', async () => {
   const { data } = await axios.get('/user/me');
   return data;
 });

const initialState = {
    data: null,
    status: 'loading',
    
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      //   logout: (state) => {
      //     state.data = null;
      //   },
      //   setData: (state, action) => {
      //    state.data = action.payload;
      //   },
     },
    extraReducers: {
        [fetchAuth.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
         },
         [fetchAuth.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
         },
         [fetchAuth.rejected]: (state) => {
            state.status = 'error';
            state.data = null;
         },
         [fetchMe.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
         },
         [fetchMe.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
         },
         [fetchMe.rejected]: (state) => {
            state.status = 'error';
            state.data = null;
         },
         [fetchRegister.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
         },
         [fetchRegister.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
         },
         [fetchRegister.rejected]: (state) => {
            state.status = 'error';
            state.data = null;
         },
         [fetchLogout.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
         },
         [fetchLogout.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
         },
         [fetchLogout.rejected]: (state) => {
            state.status = 'error';
            state.data = null;
         },
   
     },
    
}); 

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;
// export const {setData} = authSlice.actions;
// export const {logout} = authSlice.actions;
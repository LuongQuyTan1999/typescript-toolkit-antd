import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginInterfaceComponent, LoginInterfaceServers } from 'data/types';
import { message } from 'antd';
import authService from './authAPI';
import { storeData } from 'utils/local-storage-helper';
import { SMC_AUTH_TOKEN } from 'utils/common';

// Interface
interface AuthInterface {
  entities: LoginInterfaceServers,
}

// Thunk
export const userLogin = createAsyncThunk(
  'auth/login',
  async (params: LoginInterfaceComponent) => {
    const response = await authService.login(params)
    return response.data.data as LoginInterfaceServers
  }
)

// Reducer
const initialState = {
  entities: {},
} as AuthInterface;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      storeData(payload, SMC_AUTH_TOKEN);
      state.entities = payload
    })
    builder.addCase(userLogin.rejected, (state, action) => {
      message.error(action.error.message);
    })
  }
});

// export const { increment, decrement, incrementByAmount } = authSlice.actions;


export default authSlice.reducer;
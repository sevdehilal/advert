// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
  token: null,
  isAdmin: false,
  users: [
    { username: 'user1', password: 'password1', token: 'fake-jwt-token-user1' },
    { username: 'user2', password: 'password2', token: 'fake-jwt-token-user2' }
  ],
  admins: [
    { username: 'admin', password: 'admin123', token: 'fake-jwt-token-admin' }
  ]
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.userInfo = action.payload.userInfo;
      state.token = action.payload.token;
      state.isAdmin = action.payload.isAdmin;
    },
    logout: (state) => {
      state.userInfo = null;
      state.token = null;
      state.isAdmin = false;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    addAdmin: (state, action) => {
      state.admins.push(action.payload);
    },
  },
});

export const { loginSuccess, logout, addUser, addAdmin } = userSlice.actions;

export default userSlice.reducer;

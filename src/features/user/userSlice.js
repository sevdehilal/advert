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
    { username: 'admin1', password: 'admin123', token: 'fake-jwt-token-admin1' },
    { username: 'admin2', password: 'admin123', token: 'fake-jwt-token-admin2' }
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
  },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;

export const selectIsLoggedIn = state => !!state.user.userInfo;
export const selectIsAdmin = state => state.user.isAdmin;

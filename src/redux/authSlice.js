import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = !!action.payload;
      if (action.payload) {
        state.user = {
          uid: action.payload.uid,
          email: action.payload.email,
          displayName: action.payload.displayName,
          // 他の必要なユーザー情報
        };
      } else {
        state.user = null;
      }
    },
    },
  },
);

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
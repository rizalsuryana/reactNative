import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthState, AuthUser } from "../../types/auth.types";

const initialState: AuthState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(
      state,
      action: PayloadAction<{ token: string; customer: AuthUser }>
    ) {
      state.token = action.payload.token;
      state.user = action.payload.customer;

      AsyncStorage.setItem("token", action.payload.token);
      AsyncStorage.setItem("user", JSON.stringify(action.payload.customer));
    },
    logout(state) {
      state.token = null;
      state.user = null;

      AsyncStorage.removeItem("token");
      AsyncStorage.removeItem("user");
    },
    restoreAuth(
      state,
      action: PayloadAction<{ token: string; user: AuthUser }>
    ) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const { loginSuccess, logout, restoreAuth } = authSlice.actions;
export default authSlice.reducer;

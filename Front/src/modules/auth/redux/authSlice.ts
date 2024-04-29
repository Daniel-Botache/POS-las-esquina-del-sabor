import { createSlice } from "@reduxjs/toolkit";

export interface authState {
  userId: string;
  user: string;
  admin: boolean;
}

const initialState: authState = {
  userId: "",
  user: "",
  admin: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      (state.admin = action.payload.admin),
        (state.user = action.payload.user),
        (state.userId = action.payload.userId);
    },
  },
});

export default authSlice.reducer;

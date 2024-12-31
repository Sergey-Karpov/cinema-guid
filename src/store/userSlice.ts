import { UserType } from "@/types/userSchema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: UserType | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType | null>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

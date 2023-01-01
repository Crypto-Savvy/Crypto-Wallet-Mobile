import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: string;
  color: boolean;
};

const initialState: InitialState = {
  value: "0",
  color: false,
};

const buySlice = createSlice({
  name: "buy",
  initialState,
  reducers: {
    concatenate: (state, action: PayloadAction<string>) => {
      if (state.value === "0") {
        state.value = action.payload;
        state.color = true;
      } else {
        state.value += action.payload;
        state.color = true;
      }
    },
    backSpace: (state) => {
      if (state.value.length <= 1) {
        state.value = "0";
        state.color = false;
      } else {
        state.value = state.value.substring(0, state.value.length - 1);
      }
    },
  },
});

export default buySlice.reducer;
export const { concatenate, backSpace } = buySlice.actions;

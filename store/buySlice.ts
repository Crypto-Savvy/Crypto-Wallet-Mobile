import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Coin } from "../types";
import dummyData from "../constants/dummy";

type InitialState = {
  value: string;
  color: boolean;
  exchangeCurrency: string;
  min: string;
  max: string;
  cryptoCode: string;
  isSwap: boolean;
  // code: string
};

export type Swap = InitialState & Coin;

const initialState: InitialState = {
  value: "0",
  color: false,
  exchangeCurrency: "USDT",
  min: "10.00",
  max: "20000.00",
  cryptoCode: "USDC",
  isSwap: false,
  // code: "USD"
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
    changeExchange: (state, action: PayloadAction<Coin>) => {
      state.exchangeCurrency = action.payload.code;
      state.min = action.payload.min;
      state.max = action.payload.max;
    },
    swap: (state, action: PayloadAction<string>) => {
      const returnedData = dummyData.filter(
        (data) => data.code === state.cryptoCode
      );
      state.exchangeCurrency = state.cryptoCode;
      state.min = returnedData[0].min;
      state.max = returnedData[0].max;
      state.cryptoCode = action.payload;
      state.isSwap = !state.isSwap;
    },
  },
});

export default buySlice.reducer;
export const { concatenate, backSpace, changeExchange, swap } =
  buySlice.actions;

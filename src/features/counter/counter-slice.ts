import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    amountAdded(state, actions: PayloadAction<number>) {
      state.value += actions.payload;
    },
  },
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  numOfCakes: number;
};

const initialState: InitialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    order: state => {
      state.numOfCakes--;
    },
    restock: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { order, restock } = cakeSlice.actions;

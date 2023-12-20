import { createSlice } from '@reduxjs/toolkit';

import { CardState } from './types';
import { addRating, getCard } from './thunks';

const cardInitialState: CardState = {
  isCardLoading: false,
  detailCard: null,
  cardError: ''
};

export const cardSlice = createSlice({
  name: 'card',
  initialState: cardInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCard.pending, (state) => {
        state.isCardLoading = true;
        state.cardError = '';
      })

      .addCase(getCard.fulfilled, (state, action) => {
        state.isCardLoading = false;
        if (typeof action.payload === 'string') {
          state.cardError = action.payload;
        }
        else {
          if (action.payload != null) {
            state.detailCard = action.payload;
          }
          state.cardError = '';
        }
      })

      .addCase(getCard.rejected, (state, action) => {
        state.isCardLoading = false;
        if (typeof action.error.message === 'string') state.cardError = action.error.message;
      })

      .addCase(addRating.fulfilled, (state, action) => {
        if (typeof action.payload === 'number' && state.detailCard) {
          state.detailCard.rating = action.payload;
        }
      });
  }
});

export default cardSlice.reducer;


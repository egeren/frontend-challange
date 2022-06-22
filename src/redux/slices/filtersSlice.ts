import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFilterData {
  location: string;
  startingDate: string;
  endingDate: string;
  eventType: string;
  keywords: string;
}

const initialState = {
  location: '',
  startingDate: '',
  endingDate: '',
  eventType: '',
  keywords: '',
};
const { actions, reducer } = createSlice({
  name: 'filtersData',
  initialState: initialState,
  reducers: {
    setFilters(state, action: PayloadAction<IFilterData>) {
      state = action.payload;
      return state;
    },
    clearFilters(state) {
      state = initialState;
      return state;
    },
  },
});

export { actions, reducer };

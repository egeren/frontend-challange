import { configureStore } from '@reduxjs/toolkit';

import {
  actions as filtersActions,
  reducer as filtersReducer,
} from './slices/filtersSlice';

import { actions as uiActions, reducer as uiReducer } from './slices/uiSlice';

const store = configureStore({
  reducer: {
    filtersData: filtersReducer,
    uiData: uiReducer,
  },
});

export default store;
export { filtersActions, uiActions };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

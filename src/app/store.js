import{ configureStore } from '@reduxjs/toolkit';
import eventReducer from '../components/pages/eventSlice';


export const store = configureStore({
  reducer: {
    events: eventReducer,
  },
  devTools: true,
});
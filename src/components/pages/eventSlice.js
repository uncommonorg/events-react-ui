
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api';


const initialState = {
  value: [],
  status: 'empty'
};

export const eventsAsync = createAsyncThunk(
  'events/fetchEvents',
  async () => {
    return await api.fetchAllEvents();
  }
);

export const addEventAsync = createAsyncThunk(
  'events/addEvent',
  async (event) => {
    return await api.addEvent(event);
  }
);

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(eventsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      // eslint-disable-next-line no-undef
      .addCase(addEventAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = [action.payload, ...state.value];
      });
  }
});


export const selectAllEvents = state => state.events.value;

export const selectEventById = (state, id) => {
  return state.events.value.find(item => item.eventId === id);
}


export default eventSlice.reducer;
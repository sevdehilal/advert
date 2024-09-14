// src/features/listings/listingsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  listings: [],
  selectedSectors: [],   // Seçilen sektörler
  selectedJobTypes: [],   // Seçilen iş türleri
};

const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    addListing: (state, action) => {
      state.listings.unshift({
        id: uuidv4(),
        ...action.payload,
        admin: action.payload.admin,
      });
    },
    deleteListing: (state, action) => {
      state.listings = state.listings.filter((listing) => listing.id !== action.payload);
    },
    setSelectedSectors: (state, action) => {
      state.selectedSectors = action.payload; // Seçilen sektörler güncelleniyor
    },
    setSelectedJobTypes: (state, action) => {
      state.selectedJobTypes = action.payload; // Seçilen iş türleri güncelleniyor
    },
  },
});

export const { addListing, deleteListing, setSelectedSectors, setSelectedJobTypes } = listingsSlice.actions;

export default listingsSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import listingsReducer from '../features/listings/listingsSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('listings');
    if (serializedState === null) {
      return undefined;
    }
    return { listings: JSON.parse(serializedState) };
  } catch (err) {
    console.error("LocalStorage'dan veriler alınamadı:", err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.listings);
    localStorage.setItem('listings', serializedState);
  } catch (err) {
    console.error("Veriler LocalStorage'a kaydedilemedi:", err);
  }
};

const preloadedState = loadState() || {
  listings: [],
  sectors: ['Teknoloji', 'Tasarım', 'Pazarlama', 'Finans'],
  selectedSectors: [],
  jobTypes: ['Full-Time', 'Part-Time'],
  selectedJobTypes: []
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    listings: listingsReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

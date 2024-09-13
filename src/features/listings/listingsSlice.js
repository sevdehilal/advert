import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; // UUID modülünü ekleyin

const initialState = {
  listings: [
    { 
      id: uuidv4(), // UUID ile benzersiz ID oluştur
      title: "Frontend Developer", 
      company: "x", 
      location: "New York", 
      description: "React ve Redux bilgisine sahip frontend geliştirici arıyoruz.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Ant_Design_Logo.svg", 
      sector: "Teknoloji",
      jobType: "Full-Time"
    },
    { 
      id: uuidv4(), // UUID ile benzersiz ID oluştur
      title: "Backend Developer", 
      company: "Innovate Ltd.", 
      location: "San Francisco", 
      description: "Node.js ve MongoDB deneyimi olan backend geliştirici arıyoruz.",
      logo: "https://example.com/logo2.png", 
      sector: "Teknoloji",
      jobType: "Part-Time"
    },
    { 
      id: uuidv4(), // UUID ile benzersiz ID oluştur
      title: "UI/UX Designer", 
      company: "DesignPro", 
      location: "Los Angeles", 
      description: "Kullanıcı odaklı arayüz tasarımları yapabilecek tasarımcı arıyoruz.",
      logo: "https://example.com/logo3.png", 
      sector: "Tasarım",
      jobType: "Full-Time"
    },
    { 
      id: uuidv4(), // UUID ile benzersiz ID oluştur
      title: "Designer", 
      company: "nPro", 
      location: "Angeles", 
      description: "Kullanıcı odaklı arayüz tasarımları yapabilecek tasarımcı arıyoruz.",
      logo: "https://example.com/logo3.png", 
      sector: "Pazarlama",
      jobType: "Part-Time"
    },
  ],
  sectors: ['Yazılım', 'Teknoloji' , 'Tasarım', 'Pazarlama', 'Finans'],
  selectedSectors: [],
  jobTypes: ['Full-Time', 'Part-Time'],
  selectedJobTypes: []
};

const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    setListings: (state, action) => {
      state.listings = action.payload;
    },
    addListing: (state, action) => {
      state.listings.push({
        id: uuidv4(), // Yeni ilan için benzersiz ID oluştur
        ...action.payload,
      });
    },
    deleteListing: (state, action) => {
      state.listings = state.listings.filter((listing) => listing.id !== action.payload);
    },
    setSectors: (state, action) => {
      state.sectors = action.payload;
    },
    setSelectedSectors: (state, action) => {
      state.selectedSectors = action.payload;
    },
    setJobTypes: (state, action) => {
      state.jobTypes = action.payload;
    },
    setSelectedJobTypes: (state, action) => {
      state.selectedJobTypes = action.payload;
    }
  },
});

export const { 
  setListings, 
  addListing, 
  deleteListing,
  setSectors, 
  setSelectedSectors, 
  setJobTypes, 
  setSelectedJobTypes 
} = listingsSlice.actions;

export default listingsSlice.reducer;

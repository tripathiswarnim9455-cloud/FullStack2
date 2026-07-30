import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Twitter",
    limit: 280,
  },
  {
    id: 2,
    name: "Facebook",
    limit: 5000,
  },
  {
    id: 3,
    name: "Instagram",
    limit: 2200,
  },
];

const platformsSlice = createSlice({
  name: "platforms",
  initialState,
  reducers: {},
});

export default platformsSlice.reducer;

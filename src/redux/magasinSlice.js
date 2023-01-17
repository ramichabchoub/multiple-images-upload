import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createMagasin = createAsyncThunk(
  "magasin/createMagasin",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:7000/api/v1/magasins",
      formData
    );
    return response.data;
  }
);

const magasinSlice = createSlice({
  name: "magasin",
  initialState: {
    magasins: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createMagasin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createMagasin.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.magasins.push(action.payload);
      })
      .addCase(createMagasin.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export default magasinSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDocuments = createAsyncThunk(
    "documents/fetchDocuments",
    async () => {
        const response = await axios.get("http://localhost:5000/documents");
        return response.data;
    }
);

const documentSlice = createSlice({
    name: "documents",
    initialState: { items: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDocuments.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDocuments.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchDocuments.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to fetch data!";
            });
    },
});

export default documentSlice.reducer;
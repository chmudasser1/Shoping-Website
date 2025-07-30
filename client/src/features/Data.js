import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Async thunk for fetching items
export const ItemsDataFetch = createAsyncThunk('ItemsDataFetch', async () => {
    const response = await fetch('http://localhost:8000/store/get', {
        method: 'GET'
    });

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
        throw new Error('Error while fetching data'); // Throw an error to trigger the rejected case
    }

    // Await the response to get the JSON data
    const data = await response.json();
    console.log("data", data)
    return data;
});

// Create slice for items
export const ItemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        loading: false,
        error: null // Change to null to store error messages
    },
    extraReducers: (builder) => {
        builder
            .addCase(ItemsDataFetch.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error on new fetch
            })
            .addCase(ItemsDataFetch.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(ItemsDataFetch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Store error message
            });
    }
});

// Export the reducer
export default ItemsSlice.reducer;

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
    return data;
});

//Get item by id
export const getItemById = createAsyncThunk('getItemById', async (id) => {
    const response = await fetch(`http://localhost:8000/store/item/${id}`, {
        method: 'GET'
    });

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
        throw new Error('Error while fetching item by ID');
    }

    // Await the response to get the JSON data
    const data = await response.json();
    return data;
}
);

export const handleSignin = createAsyncThunk('handleSignin', async (formData) => {
    const response = await fetch('http://localhost:8000/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    if (!response.ok) {
        console.log('Error while signing in:', response.statusText);
        throw new Error('Error while signing in');
    }
    const data = await response.json();
    console.log("User signed in successfully:", data);
    return data;
}
);

export const handleLoginin = createAsyncThunk('handleLoginin', async (formData1) => {
    const response = await fetch('http://localhost:8000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData1)
    });
    if (!response.ok) {
        console.log('Error while logging in:', response.statusText);
        throw new Error('Error while logging in');
    }
    const data = await response.json();
    console.log("User logged in successfully:", data);
    return data;
}
);

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
            })
            .addCase(getItemById.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error on new fetch
            }
            )
            .addCase(getItemById.fulfilled, (state, action) => {
                state.loading = false;
                // Assuming you want to store the item by ID in the state
                const item = action.payload;
                const existingItemIndex = state.items.findIndex(i => i._id === item._id);
                if (existingItemIndex >= 0) {
                    state.items[existingItemIndex] = item; // Update existing item
                } else {
                    state.items.push(item); // Add new item if it doesn't exist
                }
            }
            )
            .addCase(getItemById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Store error message
            }
            )
            .addCase(handleSignin.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error on new fetch
            }
            )
            .addCase(handleSignin.fulfilled, (state, action) => {
                state.loading = false;
                // Assuming you want to store the user data in the state
                const userData = action.payload;
                // You can store it in a specific part of the state, e.g., state.user
                state.user = userData; // Adjust according to your state structure
            }
            )
            .addCase(handleSignin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Store error message
            }
            )
            .addCase(handleLoginin.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error on new fetch
            }
            )
            .addCase(handleLoginin.fulfilled, (state, action) => {
                state.loading = false;
                // Assuming you want to store the user data in the state
                const userData = action.payload;
                // You can store it in a specific part of the state, e.g., state.user
                state.user = userData; // Adjust according to your state structure
            }
            )
            .addCase(handleLoginin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Store error message
            }
            );

    }
});
// ...existing code...


export const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => { state.value += 1; }
    }
});

export const { increment } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

// ...existing code...

// Export the reducer
export default ItemsSlice.reducer;

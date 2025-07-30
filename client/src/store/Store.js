import { configureStore } from "@reduxjs/toolkit";

import ItemsSlice from '../features/Data'

const store = configureStore({
    reducer: {
        items: ItemsSlice
    },
});

export default store;


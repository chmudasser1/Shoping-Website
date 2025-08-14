import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from '../features/Data.js';

import ItemsSlice from '../features/Data'

const store = configureStore({
    reducer: {
        items: ItemsSlice,
        counter: counterReducer
    },
});

export default store;


import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../projects/simpleCounter/simpleCounterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})
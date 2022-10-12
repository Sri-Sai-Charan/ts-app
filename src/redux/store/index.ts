import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../slice/todoSlice";
export const store = configureStore({   
    reducer: {
        reducer: todoSlice.reducer
    }
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;

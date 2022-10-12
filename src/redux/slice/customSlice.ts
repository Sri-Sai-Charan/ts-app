import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModelInterface } from '../../types';

const initialState: ModelInterface[] = [];

export const createCustomSlice = (name: string) => {
    const {
        actions: {add, remove, update},
        reducer } = createSlice({
        name,
        initialState,
        reducers: {
            add: (state, action: PayloadAction<ModelInterface>) => {
                state.push(action.payload);
            },
            remove: (state, action: PayloadAction<string>) => {
                return state.filter((item) => item.id !== action.payload);
            
            },
            update: (state, action: PayloadAction<ModelInterface>) => {
                const index = state.findIndex((item) => item.id === action.payload.id);
                state[index] = action.payload;
            }
        }
    });
    return {add, remove, update, reducer};
        
}
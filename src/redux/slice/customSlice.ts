import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModelInterface } from '../../types';
import { v4 as uuidv4 } from 'uuid';

const initialState: ModelInterface[] = [];

export const createCustomSlice = (name: string) => {
    const {
        actions: {add, remove, update},
        reducer } = createSlice({
        name,
        initialState,
        reducers: {
            add:{
                reducer: (state, action: PayloadAction<ModelInterface>) => {
                    state.push(action.payload);
                    
                },
                prepare: (text: string) => ({
                    payload: {
                      id: uuidv4(),
                      text,
                      isFinished: false,
                    } as ModelInterface,
                  }),
            }, 
            remove: (state, action: PayloadAction<string>) => {
                const index = state.findIndex(({ id }) => id === action.payload);
                state.splice(index, 1);
            
            },
            update: (state, action: PayloadAction<ModelInterface>) => {
                const index = state.findIndex((item) => item.id === action.payload.id);
                state[index] = action.payload;
            }
        }
    });
    return {actions: {add, remove, update}, reducer};
        
}
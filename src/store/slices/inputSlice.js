import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name: 'input',
    initialState: {
        text: ''
    },
    reducers: {
        onClearInput(state, action) {
            state.text = ''
        },
        setText(state, action) {
            state.text = action.payload
        }

    }
})

export const inputReducer = inputSlice.reducer
export const { onClearInput,setText } = inputSlice.actions
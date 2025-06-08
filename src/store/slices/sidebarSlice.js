import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        value: false,
        data: ''
    },
    reducers: {
        updateSidebar(state, action) {
            state.value = action.payload.value;
            state.data = action.payload.data
        }
    }
})

export const sidebarReducer = sidebarSlice.reducer
export const { updateSidebar } = sidebarSlice.actions
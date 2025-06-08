import { createSlice } from "@reduxjs/toolkit";

const routeSlice = createSlice({
    name: 'route',
    initialState: {
        currentPath: window.location.pathname
    },
    reducers: {
        navigate(state, action) {
            window.history.pushState({}, '', action.payload)
            state.currentPath = action.payload
        },
        setCurrentPath(state,action){
            state.currentPath = action.payload
        }
    }
})

export const routeReducer = routeSlice.reducer
export const { navigate ,setCurrentPath} = routeSlice.actions
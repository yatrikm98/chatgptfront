import { createSlice } from "@reduxjs/toolkit";

const addPauseSlice = createSlice({
    name: 'pause',
    initialState: {
        addPause: false
    },
    reducers: {
        setPauseTrue(state,action){
            state.addPause = true           
        },
        setPauseFalse(state,action){
            state.addPause = false           
        }

    }
})

export const pauseReducer = addPauseSlice.reducer
export const { setPauseFalse,setPauseTrue} = addPauseSlice.actions
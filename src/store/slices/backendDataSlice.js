import { createSlice } from "@reduxjs/toolkit";
import { setCurrentPath } from "./routeSlice";
const backendData = createSlice({
    name: 'backenddata',
    initialState: {
        sendDataToBackEnd:false
    },
    reducers: {
            dataToSendBackend(state,action){
                state.sendDataToBackEnd=action.payload
            }

    },
    extraReducers(builder){
        builder.addCase(setCurrentPath,(state,action)=>{
            state.sendDataToBackEnd = false
        })
    }
})

export const backendReducer = backendData.reducer
export const { dataToSendBackend } = backendData.actions
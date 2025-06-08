import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        chatGptDrawer: false,
        threeDotsDrawer: false,
        modal: false,
        profileIconDrawer: false
    },
    reducers: {
        openchatgptDivDrawer(state, action) {
            state.chatGptDrawer = !state.chatGptDrawer
            state.threeDotsDrawer = false
            state.modal = false
            state.profileIconDrawer = false
        },
        openModal(state, action) {
            state.chatGptDrawer = false
            state.threeDotsDrawer = false
            state.modal = !state.modal
            state.profileIconDrawer = false
        },
        openDotsDrawer(state, action) {
            state.chatGptDrawer = false
            state.threeDotsDrawer = !state.threeDotsDrawer
            state.modal = false
            state.profileIconDrawer = false
        },
        openProfileDrawer(state, action) {
            state.chatGptDrawer = false
            state.threeDotsDrawer = false
            state.modal = false
            state.profileIconDrawer = !state.profileIconDrawer
        }
    }
})

export const navbarReducer = navbarSlice.reducer
export const { openchatgptDivDrawer, openDotsDrawer, openModal, openProfileDrawer } = navbarSlice.actions
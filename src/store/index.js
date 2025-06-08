import { configureStore } from '@reduxjs/toolkit';
import { navbarReducer, openchatgptDivDrawer, openDotsDrawer, openModal, openProfileDrawer } from './slices/navbarSlice';
import { routeReducer, navigate ,setCurrentPath} from './slices/routeSlice';
import { onClearInput, inputReducer, setText } from './slices/inputSlice';
import { pauseReducer, setPauseFalse, setPauseTrue } from './slices/addPauseSlice';
import { sidebarReducer,updateSidebar } from './slices/sidebarSlice';
import { backendReducer,dataToSendBackend } from './slices/backendDataSlice';


const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        route: routeReducer,
        input: inputReducer,
        pause: pauseReducer,
        sidebar:sidebarReducer,
        backend:backendReducer
    }
})

export {
    store,
    openchatgptDivDrawer, openDotsDrawer, openModal, openProfileDrawer,
    navigate,setCurrentPath,
    onClearInput, setText,
    setPauseFalse, setPauseTrue,
    updateSidebar,
    dataToSendBackend
}
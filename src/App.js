import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Homepage from './components/Homepage/Homepage';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setCurrentPath } from './store';


const App = () => {

    const [openSidebar, setOpenSidebar] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const handler = () => {
            // dispatch(dataToSendBackend(false))
            dispatch(setCurrentPath(window.location.pathname))
        }

        window.addEventListener('popstate', handler)

        return () => {
            window.removeEventListener('popstate', handler)
        }
    }, [dispatch])

    return (
        <div className='mainappdiv'>
            {openSidebar && <Sidebar onClose={() => setOpenSidebar(false)} />}
            <Homepage openSidebar={openSidebar} onOpen={() => setOpenSidebar(true)} onClose={() => setOpenSidebar(false)} />
        </div>
    )
}

export default App;

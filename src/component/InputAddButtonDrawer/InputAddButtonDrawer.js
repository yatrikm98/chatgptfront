import { useEffect, useRef } from 'react'
import './InputAddButtonDrawer.css'
import Drive from '../images/drive.png'
import Computer from '../images/computer.png'
import Connect from '../images/connect.png'



const InputAddButtonDrawer = ({ onClose, addButtonRef }) => {

    const inputAddButtonDrawer = useRef()
    useEffect(() => {

        const handler = (event) => {
            if (inputAddButtonDrawer.current.contains(event.target)) {
              
                event.stopPropagation()
                return;
            }

            if (addButtonRef.current.contains(event.target)) {
               
                return;
            }

            if (!inputAddButtonDrawer.current.contains(event.target)) {
             
                event.stopPropagation()
                onClose()
            }
        }

        window.addEventListener('click', handler, true)

        return () => window.removeEventListener('click', handler, true)

    }, [onClose, addButtonRef])

    return (
        <div className='maindivbuttondrawer' ref={inputAddButtonDrawer}>
            <div className='commoncssbuttondrawer'>
                <img src={Drive} className='commonimagebuttondrawer' alt='No Pic' />
                <div>Connect to Google Drive</div>
            </div>
            <div className='commoncssbuttondrawer'>
                <img src={Connect} className='commonimagebuttondrawer' alt='No Pic' />
                <div>Connect to Microsoft OneDrive</div>
            </div>
            <div className='divforborder'></div>
            <div className='commoncssbuttondrawer'>
                <img src={Computer} className='commonimagebuttondrawer' alt='No Pic' />
                <div>Connect to Google Drive</div>
            </div>
        </div>
    )
}

export default InputAddButtonDrawer
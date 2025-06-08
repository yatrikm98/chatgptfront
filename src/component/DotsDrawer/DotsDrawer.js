import { useEffect, useRef } from 'react'
import './DotsDrawer.css'
import { RiArchive2Line } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { openDotsDrawer } from '../../store';
import { useDispatch } from 'react-redux'
const DotsDrawer = ({ threeDotsButtonRef }) => {

    const threedotsdrawer = useRef()
    const dispatch = useDispatch()
    useEffect(() => {

        const handler = (event) => {
            if (threedotsdrawer.current.contains(event.target)) {
                event.stopPropagation()
                return;
            }
            if (threeDotsButtonRef.current.contains(event.target)) {
                return;
            }

            if (!threedotsdrawer.current.contains(event.target)) {
                dispatch(openDotsDrawer())
                return;
            }
        }
        window.addEventListener('click', handler, true)

        return () => window.removeEventListener('click', handler, true)
    }, [dispatch,threeDotsButtonRef])
    return (
        <div className='maindivdotsdrawer' ref={threedotsdrawer}>
            <div className='archievediv'>
                <RiArchive2Line />
                Archive
            </div>
            <div className='delete'>
                <RiDeleteBinLine />
                <span> Delete</span>
            </div>
        </div>
    )
}

export default DotsDrawer
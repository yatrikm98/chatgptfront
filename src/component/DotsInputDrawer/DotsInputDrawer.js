import { useRef, useEffect } from 'react'
import './DotsInputDrawer.css'
import Pencil from '../images/Pencil.png'
import CreateImage from '../images/CreateImage.png'



const DotsInputDrawer = ({ onClose, dotsButtonRef }) => {


    const dotsinputdrawer = useRef()
    useEffect(() => {
        const handler = (event) => {

            if (dotsinputdrawer.current.contains(event.target)) {

                event.stopPropagation()
                return;
            }
            if (dotsButtonRef.current.contains(event.target)) {
                // event.stopPropagation()
                return;
            }
           
            if (!dotsinputdrawer.current.contains(event.target)) {
                event.stopPropagation()
                onClose()
            }
        }

        window.addEventListener('click', handler, true)

        return () => window.removeEventListener('click', handler, true)

    }, [onClose, dotsButtonRef])



    return (
        <div className='maindivdotsinputdrawer' ref={dotsinputdrawer}>
            <div className='commoncssdotsinputdrawer'>
                <img src={CreateImage} alt='No Pic' className='commonimagedotsinputdrawer' />
                <div className='information'>
                    <div className='upperlinediv'>
                        <div>Create image</div>
                        <div className='updateddotsinputdrawer'>Updated</div>
                    </div>
                    <div className='lowerlinediv'>Visualize Ideas and Concepts</div>
                </div>
            </div>
            <div className='commoncssdotsinputdrawer secondivdotsinputdrawer'>
                <img src={Pencil} alt='No Pic' className='commonimagedotsinputdrawer' />
                <div className='information'>
                    <div className='upperlinediv'>
                        <div>Canvas</div>
                    </div>
                    <div className='lowerlinediv'>Collaborate on writing and code</div>
                </div>
            </div>
        </div>
    )
}

export default DotsInputDrawer
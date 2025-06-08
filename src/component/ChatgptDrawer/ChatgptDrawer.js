import { useEffect, useRef } from 'react'
import './ChatgptDrawer.css'
import Star from '../images/Star.svg'
import Tick from '../images/Tick.png'
import Icon from '../images/Icon.png'
import { openchatgptDivDrawer } from '../../store'
import { useDispatch } from 'react-redux'

const ChatgptDrawer = ({ chatgptDivRef }) => {

    const chatgptdrawerref = useRef()
    const dispatch = useDispatch()

    useEffect(() => {

        const handler = (event) => {
            if (chatgptdrawerref.current.contains(event.target)) {
                console.log('Inside Drawer')
                event.stopPropagation()
                return;
            }
            if (chatgptDivRef.current.contains(event.target)) {
                // console.log('Here')
                return;
            }

            if (!chatgptdrawerref.current.contains(event.target)) {
                // console.log('Not Inside ChatgPtDrawer')
                dispatch(openchatgptDivDrawer())
                return;
            }
        }

        window.addEventListener('click', handler, true)

        return () => window.removeEventListener('click', handler, true)

    }, [dispatch,chatgptDivRef])


    return (
        <div className='maindivchatgptdrawer' ref={chatgptdrawerref}>
            <div className='commoncsschatgptdrawer'>
                <div className='imagestardiv'>
                    <img src={Star} className='starimage' alt='No Pic' />
                </div>
                <div className='commondetails'>
                    <div>
                        <div className='chatgptplus'>
                            ChatGPT Plus
                        </div>
                        <div className='commoncsssecondtitle'>Our Smartest model & more</div>
                    </div>
                    <button>Upgrade</button>
                </div>
            </div>
            <div className='commoncsschatgptdrawer'>
                <div className='imagestardiv'>
                    <img src={Icon} className='starimage' alt='No Pic' />
                </div>
                <div className='commondetails'>
                    <div>
                        <div className='chatgpttitle'>
                            ChatGPT
                        </div>
                        <div className='commoncsssecondtitle'>Great for everyday Task</div>
                    </div>
                    <img src={Tick} alt='No Tic' className='tickimage' />
                </div>
            </div>
        </div>
    )
}

export default ChatgptDrawer
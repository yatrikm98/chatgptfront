import './ProfileDrawer.css'
import Customize from '../images/Customize.png'
import ExploreGptIcon from '../images/ExploreGptIcon.png'
import Settings from '../images/Settings.png'
import Logout from '../images/Logout.png'
import SearchExtension from '../images/SearchExtension.png'
import Upgrade from '../images/Upgrade.png'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { openProfileDrawer } from '../../store'

const ProfileDrawer = ({ profileDivRef }) => {

    const iconDrawerRef = useRef()
    const dispatch = useDispatch()
    useEffect(() => {

        const handler = (event) => {
            if (iconDrawerRef.current.contains(event.target)) {
                event.stopPropagation()
                return;
            }
            if (profileDivRef.current.contains(event.target)) {
                return;
            }
            if (!iconDrawerRef.current.contains(event.target)) {
                dispatch(openProfileDrawer())
                return;
            }
        }


        window.addEventListener('click', handler, true)

        return () => window.removeEventListener('click', handler, true)
    }, [dispatch,profileDivRef])

    return (
        <div className="maindivicondrawer" ref={iconDrawerRef}>
            <div className='commoncssforicondrawer'>
                <div className='commonicondiv'>
                    <img src={ExploreGptIcon} className='commoniconimage' alt='No Pic' />
                </div>
                <div>Explore GPTs</div>
            </div>
            <div className='commoncssforicondrawer'>
                <div className='commonicondiv'>
                    <img src={Customize} className='commoniconimage' alt='No Pic' />
                </div>
                <div>Customize ChatGPT</div>
            </div>
            <div className='commoncssforicondrawer'>
                <div className='commonicondiv'>
                    <img src={Settings} className='commoniconimage' alt='No Pic' />
                </div>
                <div>Settings</div>
            </div>
            <div className='commoncssforicondrawer'>
                <div className='commonicondiv'>
                    <img src={Upgrade} className='commoniconimage' alt='No Pic' />
                </div>
                <div>Upgrade Plan</div>
            </div>
            <div className='commoncssforicondrawer'>
                <div className='commonicondiv'>
                    <img src={SearchExtension} className='commoniconimage' alt='No Pic' />
                </div>
                <div>Get ChatGPT search extension</div>
            </div>
            <div className='commoncssforicondrawer'>
                <div className='commonicondiv'>
                    <img src={Logout} className='commoniconimage' alt='No Pic' />
                </div>
                <div>Logout</div>
            </div>
        </div>
    )
}

export default ProfileDrawer;
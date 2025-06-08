import './Input.css'
import { useRef, useState } from 'react';
import InputAddButtonDrawer from '../InputAddButtonDrawer/InputAddButtonDrawer';
import DotsInputDrawer from '../DotsInputDrawer/DotsInputDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { onClearInput, setText } from '../../store';

const Input = ({ openSidebar, onSubmit }) => {

    const dispatch = useDispatch()

    const { text } = useSelector((state) => {
        return state.input
    })


    const [openAddButtonDrawer, setOpenAddButtonDrawer] = useState(false)
    const [searchButton, setSearchButton] = useState(false)
    const [reasonButton, setReasonButton] = useState(false)
    const [openDotsInputDrawer, setOpenDotsInputDrawer] = useState(false)




    const handleInput = (e) => {
        // console.log(e.target)
        dispatch(setText((e.target.innerText).trim()));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (e.shiftKey) {
                // Allow default behavior → insert line break
                // console.log('Allow Line break')
                return;
            } else {
                e.preventDefault();
                // console.log('Submit:', text);
                onSubmit(text)
                dispatch(onClearInput()) 
                e.target.innerText = ''; 
            }
        }
    };

    const addButton = useRef()
    const dotsInputDrawer = useRef()

    return (
        <div className={openSidebar ? 'formdiv formdivone' : 'formdiv formdivtwo'}>
            <div
                contentEditable
                className="divform"
                onInput={handleInput}
                onKeyDown={handleKeyDown}
                style={{ padding: "8px", paddingLeft: '10px' }}
            >
            </div>
            {text.length === 0 && <span className='spanInput' ></span>}
            <div className='iconsformdiv'>
                <div className='leftsideicons'>
                    <button
                        className='addiconform'
                        ref={addButton}
                        onClick={() => setOpenAddButtonDrawer(!openAddButtonDrawer)}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" color='#5d5d5d' xmlns="http://www.w3.org/2000/svg" aria-label="" className="h-[18px] w-[18px]"><path fillRule="evenodd" clipRule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4L13 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L13 13L13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20L11 13L4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11L11 11L11 4C11 3.44772 11.4477 3 12 3Z" fill="currentColor"></path></svg>
                        {openAddButtonDrawer &&
                            <InputAddButtonDrawer
                                onClose={() => setOpenAddButtonDrawer(false)}
                                addButtonRef={addButton}
                            />}
                    </button>
                    <button className={searchButton ? 'searchicon blue' : 'searchicon'} onClick={() => setSearchButton(!searchButton)}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" color='#5d5d5d' xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]"><path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9851 4.00291C11.9933 4.00046 11.9982 4.00006 11.9996 4C12.001 4.00006 12.0067 4.00046 12.0149 4.00291C12.0256 4.00615 12.047 4.01416 12.079 4.03356C12.2092 4.11248 12.4258 4.32444 12.675 4.77696C12.9161 5.21453 13.1479 5.8046 13.3486 6.53263C13.6852 7.75315 13.9156 9.29169 13.981 11H10.019C10.0844 9.29169 10.3148 7.75315 10.6514 6.53263C10.8521 5.8046 11.0839 5.21453 11.325 4.77696C11.5742 4.32444 11.7908 4.11248 11.921 4.03356C11.953 4.01416 11.9744 4.00615 11.9851 4.00291ZM8.01766 11C8.08396 9.13314 8.33431 7.41167 8.72334 6.00094C8.87366 5.45584 9.04762 4.94639 9.24523 4.48694C6.48462 5.49946 4.43722 7.9901 4.06189 11H8.01766ZM4.06189 13H8.01766C8.09487 15.1737 8.42177 17.1555 8.93 18.6802C9.02641 18.9694 9.13134 19.2483 9.24522 19.5131C6.48461 18.5005 4.43722 16.0099 4.06189 13ZM10.019 13H13.981C13.9045 14.9972 13.6027 16.7574 13.1726 18.0477C12.9206 18.8038 12.6425 19.3436 12.3823 19.6737C12.2545 19.8359 12.1506 19.9225 12.0814 19.9649C12.0485 19.9852 12.0264 19.9935 12.0153 19.9969C12.0049 20.0001 11.9999 20 11.9999 20C11.9999 20 11.9948 20 11.9847 19.9969C11.9736 19.9935 11.9515 19.9852 11.9186 19.9649C11.8494 19.9225 11.7455 19.8359 11.6177 19.6737C11.3575 19.3436 11.0794 18.8038 10.8274 18.0477C10.3973 16.7574 10.0955 14.9972 10.019 13ZM15.9823 13C15.9051 15.1737 15.5782 17.1555 15.07 18.6802C14.9736 18.9694 14.8687 19.2483 14.7548 19.5131C17.5154 18.5005 19.5628 16.0099 19.9381 13H15.9823ZM19.9381 11C19.5628 7.99009 17.5154 5.49946 14.7548 4.48694C14.9524 4.94639 15.1263 5.45584 15.2767 6.00094C15.6657 7.41167 15.916 9.13314 15.9823 11H19.9381Z" fill="currentColor"></path></svg>
                        <span>Search</span>
                    </button>
                    <button className={reasonButton ? 'bulbicon blue' : 'bulbicon'} onClick={() => setReasonButton(!reasonButton)}>
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" color='#5d5d5d' xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]"><path d="m12 3c-3.585 0-6.5 2.9225-6.5 6.5385 0 2.2826 1.162 4.2913 2.9248 5.4615h7.1504c1.7628-1.1702 2.9248-3.1789 2.9248-5.4615 0-3.6159-2.915-6.5385-6.5-6.5385zm2.8653 14h-5.7306v1h5.7306v-1zm-1.1329 3h-3.4648c0.3458 0.5978 0.9921 1 1.7324 1s1.3866-0.4022 1.7324-1zm-5.6064 0c0.44403 1.7252 2.0101 3 3.874 3s3.43-1.2748 3.874-3c0.5483-0.0047 0.9913-0.4506 0.9913-1v-2.4593c2.1969-1.5431 3.6347-4.1045 3.6347-7.0022 0-4.7108-3.8008-8.5385-8.5-8.5385-4.6992 0-8.5 3.8276-8.5 8.5385 0 2.8977 1.4378 5.4591 3.6347 7.0022v2.4593c0 0.5494 0.44301 0.9953 0.99128 1z" clipRule="evenodd" fill="currentColor" fillRule="evenodd"></path></svg>
                        <span>Reason</span>
                    </button>
                    <button
                        className='threedotsicon'
                        ref={dotsInputDrawer}
                        onClick={() => setOpenDotsInputDrawer(!openDotsInputDrawer)}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none h-5 w-5"><path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z" fill="currentColor"></path></svg>
                        {openDotsInputDrawer && <DotsInputDrawer
                            onClose={() => setOpenDotsInputDrawer(false)}
                            dotsButtonRef={dotsInputDrawer}
                        />}
                    </button>
                </div>
                <div className='rightsideicons'>
                    <button className='voiceicon'>
                        <svg width="28" height="28" color="white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 4C8.67157 4 8 4.67157 8 5.5V18.5C8 19.3284 8.67157 20 9.5 20C10.3284 20 11 19.3284 11 18.5V5.5C11 4.67157 10.3284 4 9.5 4Z" fill="currentColor"></path><path d="M13 8.5C13 7.67157 13.6716 7 14.5 7C15.3284 7 16 7.67157 16 8.5V15.5C16 16.3284 15.3284 17 14.5 17C13.6716 17 13 16.3284 13 15.5V8.5Z" fill="currentColor"></path><path d="M4.5 9C3.67157 9 3 9.67157 3 10.5V13.5C3 14.3284 3.67157 15 4.5 15C5.32843 15 6 14.3284 6 13.5V10.5C6 9.67157 5.32843 9 4.5 9Z" fill="currentColor"></path><path d="M19.5 9C18.6716 9 18 9.67157 18 10.5V13.5C18 14.3284 18.6716 15 19.5 15C20.3284 15 21 14.3284 21 13.5V10.5C21 9.67157 20.3284 9 19.5 9Z" fill="currentColor"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}



// <form onSubmit={handleSubmit} className='form'>
//                 <input onChange={handleInputChange} value={text} className='input' placeholder='Ask Anything' />
//             </form>

export default Input;
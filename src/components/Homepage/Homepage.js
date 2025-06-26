import './Homepage.css'
import Input from '../Input/Input';
import Navbar from '../Navbar/Navbar';
import { useState, useRef, useEffect } from 'react';
import MessageListItem from '../MessageListItem/MessageListItem';
import geminiResponse from '../../GeminiApi';
import { useDispatch, useSelector } from 'react-redux';
import { navigate, setPauseFalse, setPauseTrue, updateSidebar, dataToSendBackend } from '../../store';
import createConversation from '../../createConversation';
import { createSelector } from '@reduxjs/toolkit';

const Homepage = ({ openSidebar, onOpen, onClose }) => {
    const API_URL = process.env.REACT_APP_API_URL;
    const dispatch = useDispatch()

    // const { currentPath, addPause, sendDataToBackEnd } = useSelector((state) => {
    //     return {
    //         currentPath: state.route.currentPath,
    //         addPause: state.pause.addPause,
    //         sendDataToBackEnd: state.backend.sendDataToBackEnd
    //     }
    // })

    const selectCurrentPath = (state) => state.route.currentPath;
    const selectAddPause = (state) => state.pause.addPause;
    const selectSendDataToBackEnd = (state) => state.backend.sendDataToBackEnd;

    const selectCombinedState = createSelector(
        [selectCurrentPath, selectAddPause, selectSendDataToBackEnd],
        (currentPath, addPause, sendDataToBackEnd) => ({
            currentPath,
            addPause,
            sendDataToBackEnd
        })
    );


    const { currentPath, addPause, sendDataToBackEnd } = useSelector(selectCombinedState);



    const [messages, setMessages] = useState([])
    const renderDataRef = useRef(null);
    const containerRef = useRef(null);
    const [conversationId, setConversationId] = useState('')
    // console.log(conversationId, 'ConversationId')

    console.log(messages, "Messages")
    console.log('Home page is being rendered')

    const renderedData = messages.map((data, index) => {
        return <MessageListItem data={data} index={index} key={index} messages={messages} />
    })

    useEffect(() => {
        if (renderDataRef.current && containerRef.current && addPause) {
            const height = renderDataRef.current.offsetHeight;
            if (height !== 0) {
                containerRef.current.scrollBy({
                    top: height,
                    behavior: 'smooth'
                });
            }
        }
    }, [messages, addPause]);


    const handleInputSubmit = async (textFromInput) => {
        if (textFromInput !== '') {
            console.log('Inside if of text input !== "')
            let conversationIdReceivedFromBackEnd;
            dispatch(dataToSendBackend(true))
            setMessages([...messages, { question: textFromInput, answer: '' }])
            dispatch(setPauseTrue())
            if (currentPath === '/') {
                console.log("Inside current Path === /")
                const { conversationId } = await createConversation(textFromInput)
                dispatch(navigate('/' + conversationId))
                setConversationId(conversationId)
                conversationIdReceivedFromBackEnd = conversationId
                console.log("At the end of Inside current Path === /")
            }


            console.log("Set Messages when gemini response is empty ")
            // console.log('Before Response')
            const response = await geminiResponse(textFromInput)
            // console.log(response, 'Response From Gemini')
            // console.log(conversationId, 'ConversationId After Pause True')
            setMessages(prev => [
                ...prev.slice(0, -1),
                {
                    question: textFromInput,
                    answer: response,
                    conversationId: conversationId || conversationIdReceivedFromBackEnd
                }
            ]);
            dispatch(setPauseFalse())
            console.log('After Response')
        }
    }

    useEffect(() => {
        if (messages.length !== 0 && sendDataToBackEnd && !addPause) {
            const sendResponse = async () => {
                console.log('Sending data to back end')
                const res = await fetch(`${API_URL}/create/message`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(messages[messages.length - 1])
                })
                const data = await res.json()
                // console.log(data, 'Data Came from back end')
                if (data.success === false) {
                    console.log(data.message)
                }
                if (messages.length === 1) {

                    const fetchConversation = async () => {
                        console.log("Inside fatch conversation")
                        const res = await fetch(`${API_URL}/conversation/getconversation/${conversationId}`)
                        const data = await res.json()
                        // console.log(data,'One Conversation when length ===1')
                        dispatch(updateSidebar({
                            value: true,
                            data
                        }))
                    }
                    fetchConversation()
                }
            }
            sendResponse()
        }
        // eslint-disable-next-line
    }, [messages, sendDataToBackEnd, addPause, dispatch])

    useEffect(() => {
        if (currentPath === '/') {
            setMessages([])
            setConversationId('')
            return;
        }

        if (currentPath !== '/' && !sendDataToBackEnd) {
            const fetchPageAsPerRoute = async () => {
                console.log(currentPath, 'Current Path in current pAth UseEffecct')
                let pathId = currentPath.replace('/', '')
                const res = await fetch(`${API_URL}/conversation/get/${pathId}`)
                const data = await res.json()
                // console.log(data, 'Data from changed url from back end')
                if (data.success === false) {
                    console.log(data.message)
                }
                setMessages(data)
                setConversationId(data[0].conversationId)
            }
            fetchPageAsPerRoute()
        }
        // eslint-disable-next-line
    }, [currentPath])

    return (
        <div className='mainhomepagediv'>
            {openSidebar && <div className='modaltypediv' onClick={onClose}></div>}
            <Navbar openSidebar={openSidebar} onOpen={onOpen} />
            <div ref={containerRef}
                className={openSidebar ? 'maindivfordatadisplaysidebaropen' : 'maindivfordatadisplaysidebarclose'}>
                <div className={openSidebar ? 'centralmaindivsidebaropen' : 'centralmaindivsiebarclose'}>
                    <div className='renderdatadiv' ref={renderDataRef}>{renderedData}</div>
                </div>
            </div>
            <Input openSidebar={openSidebar} onSubmit={handleInputSubmit} />
        </div>
    )
}

export default Homepage
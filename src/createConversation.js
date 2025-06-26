const API_URL = process.env.REACT_APP_API_URL;

const createConversation = async (textFromInput) => {

    const response = await fetch(`${API_URL}/create/message`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titleToDisplay: textFromInput.length > 20 ? textFromInput.slice(0, 21) + '...' : textFromInput
        })
    })
    const data = await response.json()
    // console.log(data, 'Data of createdConversation')
    return {
        conversationId: data.conversation._id
    }
}




export default createConversation;
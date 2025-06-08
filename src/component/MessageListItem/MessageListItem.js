import './MessageListItem.css'
import { useSelector } from 'react-redux';
import AnswerDisplay from '../AnswerDisplay/AnswerDisplay';


const MessageListItem = ({ data, index, messages }) => {

  const { addPause } = useSelector((state) => {
    return state.pause
  })

  return (
    <div key={index} className='overallrenderdatadiv'>
      <div className='inputtext'><span>{data.question}</span></div>
      {addPause && messages.length - 1 === index ? (
        <div className="spinner-dot">
        </div>
      ) : (
        data.answer && <AnswerDisplay answerToDisplay={data.answer} />)}
    </div>
  )
}


export default MessageListItem
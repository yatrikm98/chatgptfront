import ReactDOM from 'react-dom'
import './Modal.css'
import {  useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { openModal } from '../../store';
import { useDispatch } from 'react-redux';
const Modal = () => {

    const [text, setText] = useState('')
const dispatch = useDispatch()
return ReactDOM.createPortal(
    <div
      className='mainDivPortal'
      onClick={(e) => {
        console.log('Clicked on Gray area');
        e.stopPropagation(); // Prevent bubbling up to parent
      }}
    >
      <div className='outergraydiv'></div>
      
      <div
        className='innerDiv'
        onClick={(e) => {
          e.stopPropagation(); // Prevent click from closing when clicking inside modal
        }}
      >
        <div className='upperpartdivmodal'>
          <div>Share public link to chat</div>
          <IoCloseOutline
            className='closeiconmodal'
            onClick={() => dispatch(openModal())}
          />
        </div>
  
        <div className='formelements'>
          <div className='upperpartformelements'>
            <p>
              <span>
                Your name, custom instructions, and any messages you add after
                sharing stay private.{' '}
                <a href='https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq'>
                  Learn more
                </a>
              </span>
            </p>
          </div>
          <div className='inputdivmodal'>
            <input
              onChange={(e) => setText(e.target.value)}
              value={text}
              placeholder='https://chatgpt.com/share/'
              className='inputmodal'
            />
            <button>Create link</button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
  
}

export default Modal;
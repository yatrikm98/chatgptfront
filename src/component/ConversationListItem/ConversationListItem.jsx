import './ConversationListItem.css'

import { useSelector } from 'react-redux';
const ConversationListItem = ({ data, onRouteChange }) => {

    const [date, items] = data
    const { currentPath } = useSelector((state) => {
        return state.route
    })

    return (
        <div className='datewisedata'>
            <strong className='date'><h3>{date}</h3></strong>
                {items.map((item, innerIndex) => {
                    return (
                        <div
                            key={innerIndex}
                            className={currentPath === '/' + item._id ? 'commondivsidebar clickedDiv' : 'commondivsidebar'}
                            onClick={() => onRouteChange(item._id)}
                        >
                            {item.titleToDisplay}
                        </div>
                    );
                })}
        </div>
    )
}

export default ConversationListItem
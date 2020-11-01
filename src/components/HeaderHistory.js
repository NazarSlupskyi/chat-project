import React from 'react';

const HeaderHistory = ({choosedContact = {}}) => {
    const startValue = {name: 'Select contact to start chating !', icon:'/images/counting.png'}
    
    return (
        <div className="headerConteiner">
            <img className="historyIcon" src={choosedContact.icon || startValue.icon} alt="icon"/>
            <div className="historyContactName">{choosedContact.name || startValue.name}</div>
        </div>
    )
}

export default HeaderHistory;
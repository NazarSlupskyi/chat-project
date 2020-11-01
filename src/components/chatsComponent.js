import React from 'react';

const ChatsComponent = ({contacts, hendlerSerch, hendlerChooseContact, searchStr}) => {
    const filteredContacts = searchStr === '' 
            ? contacts.sort((a, b) => b.history[b.history.length - 1].sort - a.history[a.history.length - 1].sort)
            : contacts.filter((contact) => contact.name.toLowerCase().includes(searchStr.toLowerCase()))    
    return (
        <>
            <div className="leftSidebar">
                <img className="userImg" src="images/profileIcon/myIcon.png"  alt="user"/>
                <input className="searchInput" type="text" placeholder="Search or start new chat" onChange={hendlerSerch} value={searchStr}/>
                <img className="searchIcon" src="images/search.png" alt="Search Icon"/>
                <div className="chats">
                    <div className="row">Chats</div>
                    <ul>
                        {filteredContacts.map((contact) => {
                        const {history} = contact
                        const lastMassage = history[history.length - 1] 
                        return (
                            <li key = {contact.id} className = "contact" onClick = {hendlerChooseContact}>
                                <img className="contactPic" src="images/profileIcon/myIcon.png" alt="Contact Pic"/>
                                <div className="date">{lastMassage.date}</div>
                                <p className="contactName">{contact.name}</p>
                                <div className="contactMassage">{lastMassage.massage}</div>
                            </li> )}
                        )} 
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ChatsComponent;
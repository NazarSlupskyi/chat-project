import React from 'react';

const HistoryComponent = ({choosedContact = {}}) => (
    <div className="sectionHistory"> 
            {(choosedContact.history || []).map((massageElement) => (
                massageElement.massageFromMe === false 
                    ? (
                        <div className="massageConteiner">
                            <div className="userMassage">
                                <img className="userMassagePic" src={choosedContact.icon} alt="profile"/>
                                <div className="textOfMassage">{massageElement.massage}</div>
                            </div>
                            <div className="massageDate">{massageElement.time}</div>
                        </div>
                    ) : (
                        <div className="myMassageConteiner">
                            <div className="myMassageBlock">  
                                <div className="myTextMassage">{massageElement.massage}</div>
                                <div className="myMassageDate">{massageElement.time}</div>
                            </div>  
                        </div>
                    )
            ))}
        </div>
    )


export default HistoryComponent;
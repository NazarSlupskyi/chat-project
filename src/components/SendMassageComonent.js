import React, {useEffect} from 'react';

const SendMassageComponent = ({sendMassage, getDateAndTime, getMassage, contacts, hendlerSendMassage}) => {

    
    useEffect(() => {
        document.addEventListener("keydown", ({target, code}) =>{
            const sendMassageInput = document.querySelector(".inputSendMassage")
    
            if (sendMassageInput.value === '') return;
            
            if (code === 'Enter') {
                const prevChoosedContact = contacts.find((contact) => contact.active === true)
                
                sendMassage({
                    massage: sendMassageInput.value, 
                    time: getDateAndTime()[0],
                    date: getDateAndTime()[1],
                    sort: getDateAndTime()[2],
                    massageFromMe: true
                })
                sendMassageInput.value = ''
                setTimeout(() => getMassage(prevChoosedContact), 10000)
            }
        }) 
    }, []) 

    return (
        <div className="sectionInput">
            <input className="inputSendMassage" type="text" placeholder="Type your massage"></input>
            <button onClick={hendlerSendMassage} className="sendButton"><img className="sendIcon" src="/images/profileIcon/mySend.png" alt="Send Icon"/></button>
        </div>
    )
}

export default SendMassageComponent;
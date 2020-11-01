import React, {useState, useEffect} from 'react';
import ChatsComponent from './components/chatsComponent';
import HeaderHistory from './components/HeaderHistory';
import HistoryComponent from './components/HistoryComponent';
import SendMassageComponent from './components/SendMassageComonent';
import {DEFAULT_CONTACTS, URL, CONTACTS} from './constans/constans'

const App = () => {
  
  const [contacts, setContacts] = useState(DEFAULT_CONTACTS)
  const [searchStr, setSearchStr] = useState('')
  
  useEffect(() => {
    getLocalStorage()
  }, [])

  const setLocalStorage = (contactList) => {
    localStorage.setItem(CONTACTS, JSON.stringify(contactList));
  }

  const getLocalStorage = () => {
    const contactsFromLockalStorage = JSON.parse(localStorage.getItem(CONTACTS));
    
    setContacts(null || DEFAULT_CONTACTS) // Коли в SetContacts замість null пердаю contactsFromLockalStorage
    // то useState починає себе дуже дивно вести - він постійно заново створюється так як він спрацьовує перед першим рендером, 
    //я гуглив про це і намагався зрозуміти чому він так дивно себе веде але так і не знайшов ніякої інформації з цього приводу.
    
  }

  const hendlerSerch = (event) => {
    setSearchStr(event.target.value)
    
    if (event.target.value === '') {
      setContacts(DEFAULT_CONTACTS)
    }
  }

  const hendlerSendMassage = (event) =>{
    const sendMassageInput = document.querySelector(".inputSendMassage")
    
    if (sendMassageInput.value === '') return;
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

  const getDateAndTime = () => {
    const date = new Date ()
    const min = date.getMinutes()
    const minForSroting = date.getMinutes() * 60 + date.getSeconds()
    const monthInShortStr = date.toLocaleDateString("en-US", { month: 'short' })
    const month = date.getMonth() + 1
    const dateOfMassage = `${monthInShortStr} ${date.getDate()}`
    const timeAndDateOfMassage = `${month < 10 ? '0' + month : month}/${date.getDate()}/${date.getFullYear()} 
    ${date.getHours()}:${min < 10 ? '0' + min : min}`

    return [timeAndDateOfMassage, dateOfMassage, minForSroting]
  }

  const hendlerChooseContact = (event) => {
    let targetContactName = event.currentTarget.childNodes[2].innerHTML
    let contact = contacts.find((contact) => contact.name === targetContactName)
    const activeUser = contacts.find((contact) => contact.active === true)
    
    if (activeUser) {
      activeUser.active = false
    }

    setSearchStr('')
    contact.active = true
    setContacts([...contacts])
  }

  const sendMassage = (massage) => {
    const activUser = contacts.find((contact) => contact.active === true)
    
    activUser && activUser.history.push(massage)

    setLocalStorage(contacts)
    setContacts([...contacts])
  }

  const getMassageFromUser = (massage, prevChoosedContact) => {
    prevChoosedContact && prevChoosedContact.history.push(massage)

    setLocalStorage(contacts)
    setContacts([...contacts])
  }

  const getMassage = async (prevChoosedContact) => {
    const promise = await fetch(URL)
    const massageFromServer = await promise.json()
    const massageFromUser = {massage: massageFromServer.value, date: getDateAndTime()[1], time: getDateAndTime()[0], sort:getDateAndTime()[2], massageFromMe: false}
    
    
    getMassageFromUser(massageFromUser, prevChoosedContact)
  }

  const activUser = contacts.find((contact) => contact.active === true)
  
  return (
    <div className="mainConteiner">
      <ChatsComponent searchStr={searchStr} hendlerChooseContact={hendlerChooseContact} contacts={contacts} hendlerSerch={hendlerSerch} />
      <div className="headerHistory">
        <HeaderHistory choosedContact={activUser} />
        <HistoryComponent choosedContact={activUser} />
        <SendMassageComponent sendMassage={sendMassage} hendlerSendMassage={hendlerSendMassage} getDateAndTime={getDateAndTime} getMassage={getMassage} contacts={contacts}/>
      </div>
    </div>
  )
}

export default App;

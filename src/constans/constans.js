

export const DEFAULT_CONTACTS = [
  {name: 'Alic Freeman', id: 1, active: false, icon:"images/profileIcon/myIcon.png" , history: [{massage:'Hi!', date:'Oct 29', time: '10/29/2020 23:50', sort: '1', massageFromMe: false},{massage:'Hi!', date:'Oct 29', time: '10/29/2020 23:50',sort: '2', massageFromMe: true}]}, 
  {name:'John', id: 0, active: false, icon:"images/profileIcon/myIcon.png", history: [{massage:'Where are you ?', date:'Oct 29', time: '10/29/2020 23:50', sort: '3', massageFromMe: false}]}, 
  {name:'Barrera', id: 2, active: false, icon:"images/profileIcon/myIcon.png", history: [{massage: 'We lost money!!', date:'Oct 29', time: '10/29/2020 23:50', sort: '4', massageFromMe: false}]}, 
  {name:'Chuck', id: 3, active: false, icon:"images/profileIcon/myIcon.png", history: [{massage: 'we lost money!!', date:'Oct 29', time: '10/29/2020 23:50', sort: '5', massageFromMe: false}]}
];

export const CONTACTS = 'CONTACTS';

export const URL = 'https://api.chucknorris.io/jokes/random'
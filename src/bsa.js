import {useState, useEffect} from 'react';
import Header from './components/Header.tsx';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import mockData from './mockData';
import API from './helpers/API';

function Chat({className, url}) {
  const [usersCount, setUsersCount] = useState(20);
  const [msg, setMsg] = useState("");
  const [msgData, setMsgData] = useState(mockData);
  console.log(msgData)
  function handleMsgInput (e) {
    setMsg(e.target.value);
  }

  // useEffect(() => {
  //   use with real beckend data
  //   const getChat = async () => {
  //     const data = await API.get();
  //   }
  // })

  function handleFormSubmit (e) {
    e?.preventDefault();
    setMsgData(
      [...msgData, {
    "id": "80f08600-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    "avatar": "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    "user": "Ruth",
    "text": msg,
    "createdAt": (new Date().toString()).substring(0, 24),
    "editedAt": "",
    "ownMsg": true
    }])
    setMsg("");
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
}

function handleMessageEdit(id) {
  // setMsgData(msgData.map((each, index) => {
  //   if(each === id) {
  //     return {each, edited: true, "createdAt": (new Date().toString()).substring(0, 24), "ownMsg": true}
  //   }
  //   return each
  // }))
  // setMsg(id.text);
  }

  function handleMsgDelete(id) {
    setMsgData(msgData.map(msg => {
      if(msg.createdAt === id) {
        return {msg, text: "message deleted", "createdAt": (new Date().toString()).substring(0, 24), "ownMsg": true}
      }
    return msg
    }))
  }
  return (
    <div className={className} url={url}>
      <Header className="header" usersCount={usersCount} mockData={msgData}>Hello</Header>
      <MessageList className="message-list" mockData={msgData} onMsgEdit={handleMessageEdit} onMsgDelete={handleMsgDelete}/>
      <MessageInput className="message-input" msg={msg} onMsgInput={handleMsgInput} onFormSubmit={handleFormSubmit}/>
    </div>
  );
}

export default Chat;

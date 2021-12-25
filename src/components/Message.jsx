import {useState} from 'react';
import './Message.css';
import { ReactComponent as Heart } from '../assets/images/heart.svg';

function Message({className, msgInfo}) {
  const [like, setLike] = useState(false)
  function handleActiveToggle() {
    if (like) {
      return setLike(false)
    }
    setLike(true);
  }

    return ( <div className={className} key={msgInfo.createdAt}>
         <img className="message-user-avatar" src={msgInfo.avatar} alt="avatar" />
         <div className="message-info">
         <p className="message-user-name">{msgInfo.user}</p>
         <p className="message-text">{msgInfo.text}</p>
         <p className="message-time">{msgInfo.createdAt}</p>
         </div>
         <button className={like ?  "message-like-active" : "message-like"} onClick={handleActiveToggle}><Heart className="message-like-icon" /></button>
    </div>
    )
  }
  
  export default Message;
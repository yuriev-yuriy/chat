import './OwnMessage.css';
import { ReactComponent as Bin } from '../assets/images/bin.svg';
import { ReactComponent as Pen } from '../assets/images/pen.svg';

function OwnMessage({className, msgInfo, onMsgEdit, onMsgDelete}) {
      return ( <div className={className}>
        <div className="message-info">
           <p className="message-text">{msgInfo.text}</p>
           <p className="message-time">{msgInfo.createdAt}</p>
           <div className="btn-wrapper">
           <button className="message-edit" onClick={()=>onMsgEdit(msgInfo)}>
            <Pen className="message-edit-icon"/>
           </button>
           {/* <Bin className="message-delete-icon"/> */}
           <button className="message-delete" onClick={()=>onMsgDelete(msgInfo.createdAt)}>
             <Bin className="message-delete-icon"/>
           </button>
           </div>
           </div>
          </div>
      )
    }
    
    export default OwnMessage;
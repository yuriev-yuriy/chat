import Message from './Message';
import './MessageList.css';
import OwnMessage from './OwnMessage';

function MessageList({className, mockData, onMsgEdit, onMsgDelete}) {
    return (
      <>
        <div className={className}>
      {mockData.map(msg => {return <li key={mockData.createdAt}>
        {msg.ownMsg ? <OwnMessage className="own-message" msgInfo={msg} onMsgEdit={onMsgEdit} onMsgDelete={onMsgDelete}></OwnMessage> : <Message className="message" msgInfo={msg} />}
        </li>})}
          {/* <p className="messages-divider">Monday, 17 June</p> */}
        </div>
      </>
    );
  }
  
  export default MessageList;
import "./MessageInput.css";

function MessageInput({className, msg, onMsgInput, onFormSubmit}) {
    return (
        <form className={className} onSubmit={onFormSubmit}>
          <input className="message-input-text" type="text" name="message" value={msg} onChange={onMsgInput}></input>
          <button className="message-input-button">"Send"</button>
        </form>
    );
  }
  
  export default MessageInput;
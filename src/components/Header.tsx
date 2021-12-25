
import './Header.css';

function Header({className, usersCount, mockData, children}) {
    const lastMsgDate = mockData[mockData.length -1].createdAt;
  return (
    <div className="App">
      <header className={className}>
        <h1 className="header-title">{children}</h1>
        <div className="header-info">
        <p className="header-users-count">users-{usersCount}</p>
        <p className="header-messages-count">total Msgs -{mockData.length}</p>
        <p className="header-last-message -date">{lastMsgDate}</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
import { useState, useEffect } from 'react';
import './App.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import { ChatListItem, ChatIntro, ChatWindow } from './components';

export interface ChatList {
  chatId: number;
  name: string;
  img: string;
}

function App(): JSX.Element {
  const [chatList, setChatList] = useState<ChatList[]>([
    {
      chatId: 1,
      name: 'Leandro sena',
      img: 'https://www.w3schools.com/howto/img_avatar.png',
    },
    {
      chatId: 2,
      name: 'Maria',
      img: 'https://www.w3schools.com/w3images/avatar6.png',
    },
    {
      chatId: 3,
      name: 'Julia',
      img: 'https://www.w3schools.com/w3images/avatar6.png',
    },
  ]);
  const [activeChat, setActiveChat] = useState<ChatList | null>(null);

  const getChatArea = () => {
    if (activeChat && activeChat.chatId !== undefined) {
      return <ChatWindow />;
    }

    return <ChatIntro />;
  };

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            className="header-avatar"
          />
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div className="header-btn">
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className="header-btn">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search-input">
            <SearchIcon fontSize="small" style={{ color: '#919191' }} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>
        <div className="chatlist">
          {chatList.map((chatItem, key) => (
            <ChatListItem
              key={key}
              active={!!activeChat && activeChat.chatId === chatList[key].chatId}
              onClick={() => setActiveChat(chatList[key])}
              data={chatList[key]}
            />
          ))}
        </div>
      </div>
      <div className="content-area">{getChatArea()}</div>
    </div>
  );
}

export default App;

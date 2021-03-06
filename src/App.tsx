import {useState, useEffect} from 'react';
import './App.css';
import avatar from './img/img_avatar.png'; // Tell webpack this JS file uses this image
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { ChatListItem } from './components';


function App(): JSX.Element {

  const [chatList, setChatList] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},])

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img src={avatar} alt="avatar" className="header-avatar"/>
          <div className="header-buttons">
             <div className="header-btn">
                  <DonutLargeIcon style={{color: '#919191'}} />
             </div>
             <div className="header-btn">
                  <ChatIcon style={{color: '#919191'}} />
             </div>
             <div className="header-btn">
                  <MoreVertIcon style={{color: '#919191'}} />
             </div>
          </div>
        </header>
        <div className="search">
            <div className="search-input">
              <SearchIcon font-size="small" style={{color: '#919191'}} />
              <input type="search" placeholder="Procurar ou começar uma nova conversa"/>
            </div>
        </div>
        <div className="chatlist">
          {chatList.map((chatItem, key) => <ChatListItem key={key} />)}
        </div>
      </div>
      <div className="content-area"> ... </div>
    </div>
  );
}

export default App;

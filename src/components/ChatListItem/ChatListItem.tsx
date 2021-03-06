import './ChatListItem.css';
import avatar from '../../img/img_avatar.png'; // Tell webpack this JS file uses this image


export function ChatListItem(): JSX.Element {
  return(
    <div className="chatListItem">
      <img className="chatListItem-avatar" src={avatar} alt=""/>
      <div className="chatListItem-lines">
        <div className="chatListItem-line">
            <div className="chatListItem-name"> Leandro sena</div>
            <div className="chatListItem-date"> 19:00</div>
        </div>
        <div className="chatListItem-line">
            <div className="chatListItem-last-msg"> <p>Olá, boa tarde </p> </div>
        </div>
      </div>
    </div>
  )
}
import './ChatListItem.css';
import { ChatList } from '../../App';

export interface ChatListItemProps {
  onClick(): void;
  active: boolean;
  data: ChatList;
}

export function ChatListItem({ onClick, active, data }: ChatListItemProps): JSX.Element {
  const isActive = (): string => {
    return active ? 'active' : '';
  };

  return (
    <div className={`chatListItem ${isActive()}`} onClick={onClick} onKeyDown={onClick}>
      <img className="chatListItem-avatar" src={data.img} alt="" />
      <div className="chatListItem-lines">
        <div className="chatListItem-line">
          <div className="chatListItem-name"> {data.name}</div>
          <div className="chatListItem-date"> 19:00</div>
        </div>
        <div className="chatListItem-line">
          <div className="chatListItem-last-msg">
            {' '}
            <p>Olá, boa tarde </p>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

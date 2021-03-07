import './ChatWindow.scss';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVerIcon from '@material-ui/icons/MoreVert';

export function ChatWindow(): JSX.Element {
  return (
    <div className="chatWindow">
      <div className="chatWindow-header">
        <div className="chatWindow-header-info">
          <img
            className="chatWindow-header-avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div className="chatWindow-header-name">Leandro Sena</div>
        </div>
        <div className="chatWindow-header-buttons">
          <div className="chatWindow-header-buttons-btn">
            <SearchIcon style={{ color: '#919191' }} />
          </div>
          <div className="chatWindow-header-buttons-btn">
            <AttachFileIcon style={{ color: '#919191' }} />
          </div>
          <div className="chatWindow-header-buttons-btn">
            <MoreVerIcon style={{ color: '#919191' }} />
          </div>
        </div>
      </div>

      <div className="chatWindow-body">
        <div className="chatWindow-body-image" />
      </div>

      <div className="chatWindow-footer">...</div>
    </div>
  );
}

import './ChatIntro.css';
import whatsAppLogo from '../../img/whatsapp-intro.jpg'

export function ChatIntro() {
  return (
    <div className="chatIntro">
      <img src={whatsAppLogo} alt=""/>
      <h1>WhatsApp Clone</h1>
      <h2> Projeto de clone do whatsapp com ReactJs e Firebase </h2>
    </div>
  )

}
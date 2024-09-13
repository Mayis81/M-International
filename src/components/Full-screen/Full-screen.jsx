import  React  from 'react';
import "./fullScreen.css"
import Video from '../Video/Video';
import Button from '../Button/Button';
import FullScreenTitle from '../fullScreenTitle.css/FullScreenTitle';
import FullScreenText from '../fullScreenText/FullScreenText';


export default function FullScreen() {
    return (
      <div className="full-screen">
        <div className="full-screen__body ">

          <FullScreenTitle text = "M INTERNATIONAL"/>
          <FullScreenText text = "Растительная Стволовая Клетка:"/>
          <FullScreenText text = "Как малые шаги приводят к большим изменениям!"/>

          <div className="button">
            <Button btnClassName = {"button__telegram"} link = "https://t.me/m_int_onlai" text = "Telegram"/>
            <Button btnClassName = {"button__whatsapp"} link = "https://wa.me/79284733973" text = "Whatsapp"/>
          </div>
        </div>

        <Video link = "video/welcome4.webm" type = "video/webm"/>

      </div>
    )
}




import React from "react";
import "./ItemFooterButtons.css"
import ItemFooterButton from "../ItemFooterButton/ItemFooterButton";

export default function ItemFooterButtons() {
    return(
        <div className="item__footer-buttons">
        <ItemFooterButton aClassName = {"item__footer-telegram"} btnClassName={"item__footer-btnTelegram"} link={"https://t.me/m_int_onlain"} text={"Telegram"}/>
        <ItemFooterButton aClassName = {"item__footer-whatsapp"} btnClassName={"item__footer-btnWhatsapp"} link={"https://wa.me/79284733973"} text={"Whatsapp"}/>
        <ItemFooterButton aClassName = {"item__button"} btnClassName={"item__button-close"} text={"Закрыть"}/>
      </div>
    )
}
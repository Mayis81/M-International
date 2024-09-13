import  React  from 'react';
import "./fullScreenText.css";

export default function FullScreenText(props) {
    return (
        <div className="full-screen__text">{props.text}</div>
    )
}
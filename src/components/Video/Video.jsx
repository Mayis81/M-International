import  React  from 'react';
import "./video.css"

export default function Video(props) {
    return(
        <video autoPlay muted loop className="full-screen__video">
        <source  src={props.link} type={props.type}/>
      </video>
    )
}
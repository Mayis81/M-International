import  React  from 'react';
import "./video.css"
// import "./welcome4.webm"

export default function Video({link, type}) {
    return(
        <video autoPlay muted loop className="full-screen__video">
        <source  src={link} type={type}/>
      </video>
    )
}
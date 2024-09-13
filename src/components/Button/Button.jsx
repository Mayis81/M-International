import  React  from 'react';
// import "./../../style.css"
import "./button.css"


export default function Button({link, text, btnClassName}) {
return(
    <a href={link}  target="blank">
        <div className={btnClassName}>{text}</div>
    </a>
    
        
    
)
}
import React from "react";

export default function ItemFooterButton({aClassName, btnClassName, link, text}) {
    return(
        <a className={aClassName} href={link} target="blank">
          <div className={btnClassName}>{text}</div>
        </a>
    )
}
import React from "react";

export default function ItemImage({classname, link, alt=""}) {
    return(
        <div class={classname}>
            <img src={link} alt={alt}/>
        </div>
    )
}
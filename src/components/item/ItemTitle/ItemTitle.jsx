import React from "react";

export default function ItemTitle({classname, ttext}){
    return(
        <div class={classname}>
            {ttext}
         {<small><small>{ttext}</small></small>}
        </div>
    )
}
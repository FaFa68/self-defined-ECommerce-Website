import React from "react";


export default function MessageBox(probs) {

    return(
        <div className={`alet alert-${probs.variant || 'Info'}`}>
            {probs.children}
        </div>
    )
}
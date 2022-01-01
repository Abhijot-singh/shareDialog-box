import React, { useState } from "react";
import {ReactComponent as Copyicon} from "../icons/copyIcon.svg"

function CopyIcon() {
    const [setCopied] = useState(false);
    function copyiconHandler(){
    const el = document.createElement("input");
    el.value = window.location.href;
    console.log(el.value)
    document.body.appendChild(el);
    el.select();
     document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    }
    return (
        <div>
            <Copyicon onClick={copyiconHandler}></Copyicon>
        </div>
    );
}

export default CopyIcon;
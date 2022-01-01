import React, { useState } from "react";
import {ReactComponent as Copytext} from "../icons/copyText.svg"
function CopyText() {
    const [setCopied] = useState(false);
    function copytextHandler(){
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
       <Copytext onClick={copytextHandler}></Copytext>
        {/* {(!copied ?" ":<div style={{fontSize:"15px"}}>link copied!</div>)} */}
         </div>
    );
}

export default CopyText;
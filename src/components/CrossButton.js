import React from "react";
import {ReactComponent as Closebutton} from "../icons/crossbutton.svg"
function CrossButton({Open, setOpen}) {
  function handleCross(){
    if(Open === true){
      setOpen(false)
    }
    else{
      setOpen(true)
    }
  }
  return (       
      <div  onClick={handleCross} >
         <Closebutton/>
      </div>
  )
}
export default CrossButton;
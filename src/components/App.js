import React, { useState, useEffect, useRef } from "react";
import "../styles/App.css"; 
import Container from "./Container"
import { GrShareOption } from "react-icons/gr";

function App() {
  const [Open,setOpen]=useState(false)
  function handler(){
    setOpen(true)
    if(Open === true){
      setOpen(false)
    }
  }
const ref = useRef();
console.log(ref);
  useEffect(()=>{
    const clickoutside = (e) => {
      if(Open && ref.current && !ref.current.contains(e.target)){
         setOpen(false); 
         console.log("hello");         
      } 
    };
    document.addEventListener("click", clickoutside)
    return () => {document.removeEventListener("click", clickoutside)};
  }, [Open])
  
  return (
    <div className="flex" >
        <GrShareOption className="share-button"
         onClick={handler}/>
         <div ref={ref}>
         <Container Open={Open} setOpen={setOpen}/>
         </div>
    </div>

  );
}

export default App;

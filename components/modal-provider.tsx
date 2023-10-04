"use client"
import { useEffect, useState } from "react";
import ProModal from "./pro-modal";

 export function ModalProvider() {

    const [ismounted,setIsMounted]=useState(false);

   useEffect(() => {
    setIsMounted(true);
   }, [])
   if(!ismounted){
    return null;
   }
    
  return (
    <>
        <ProModal/>
    
    </>
  )
}
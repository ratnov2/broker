import { useRef } from "react"

export const useRefScroll = (ref:any)=>{
  const myRef = useRef(ref)
  return myRef
}
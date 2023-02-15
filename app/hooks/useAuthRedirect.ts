import { useRouter } from "next/router"
import { useEffect } from "react"

import { useGetProfile } from "./useGetProfile"


export const useAuthRedirect = ()=>{
  
  const user = useGetProfile()
  
  const router = useRouter()
  
  useEffect(()=>{
    if(user.data?.data) router.push('/')
  },[user])
  return {}
}
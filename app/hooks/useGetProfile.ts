import { ProfileService } from "@/services/card/bank-account.service"
import { useQuery } from "@tanstack/react-query"


export const useGetProfile = () =>{
  const {data} = useQuery(['get-user'],()=>ProfileService.getProfile())
  return data?.data.name
}
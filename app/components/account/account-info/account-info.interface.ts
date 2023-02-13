import { UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export interface PropsAccountInfo {
  user: UseQueryResult<AxiosResponse<any, any>, unknown>,
  paymentHandler:()=>void
}
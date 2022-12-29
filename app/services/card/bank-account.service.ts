import { instance } from "@/api/interceptors";
import { getAccountsUrl } from "@/config/api.config";
import { IUserCard } from "@/shared/types/bank-accounts.interface";


export const BankAccount = {
  getAllBankAccounts:()=>instance.get(getAccountsUrl('')),
	getAllUserCards:()=>instance.get<IUserCard[]>(getAccountsUrl('/get-user-cards')),
	createBankAccount:(data:any)=>instance.post(getAccountsUrl(''),data),
	createCard:()=>instance.post(getAccountsUrl('/create-card')),
	updateTopUp:(data:any)=>instance.patch(getAccountsUrl('/balance/top-up')),
	updateWithdrawal:(data:any)=>instance.patch(getAccountsUrl('/balance/withdrawal')),
	
}
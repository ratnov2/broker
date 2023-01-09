const BANK_ACCOUNT = 'bank-accounts'

export const getCardsUrl = () => `/${BANK_ACCOUNT}/get-user-cards`
export const getTransferUrl = () => `/${BANK_ACCOUNT}/transfer-money`
export const getBankAccountUrl = (id: number) => `/${BANK_ACCOUNT}/${id}`

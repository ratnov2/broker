export interface ITransactionSelect {
    clientId: string
    project: string
    date: string
}

export interface ITransactionDetail {
    id: number
    recipientAvatar: string
    recipient: string
    email: string
    subtotal: number
    tax: number
    total: number
    project: string
    paymentType: string
    note: string
    invTable: ITransactionTableDetail[]
}


export interface ITransactionTableDetail {
    id: number
    date: string
    description: string
    duration: string
    rate: string
    amount: number
}

export interface IClientData {
    image: boolean
    styleH: string
    description0: string
    style0: string
    description1: string
    style1: string
}

export interface ICol {
	name: string
	desc: string
}



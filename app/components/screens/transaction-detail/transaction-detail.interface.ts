export interface ITransactionSelect {
    id: string
}

export interface ITransactionDetail {
    id: number,
    createdAt: string,
    updatedAt: string,
    amount: number,
    senderId: number,
    recipientId: number,
    items: ITransactionDetailItems[]
    recipient: {
        email: string,
        id: number,
        name: string,
        avatarPath: string,
        address: string
    },
    sender: {
        email: string,
        id: number,
        name: string,
        avatarPath: string,
        address: string
    }

}

export interface ITransactionDetailItems {
    id: number,
    name: string,
    duration: number,
    rate: number,
    amount: number,
    invoiceId: number
}

export interface IClientData {
    avatar: boolean
    styleH: string
    description0: string
    style0: string
    description1?: string
    style1?: string
    avatarPath?: string
}

export interface ICol {
    name: string
    desc: string
}



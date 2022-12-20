export interface ITransactionSelect {
    clientId: string
    project: string
    date: Date
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
    payTable: ITransactionTableDetail[]
}


export interface ITransactionTableDetail {
    id: number
    date: string
    description: string
    duration: string
    rate: string
    amount: number
}


export const EmptyITransactionDetail = {

    id: 0,
    recipientAvatar: 'string',
    recipient: 'string',
    email: 'string',
    subtotal: 0,
    tax: 0,
    total: 0,
    project: 'string',
    paymentType: 'string',
    note: 'string',
    payTable: [
        {
            id: 0,
            date: 'string',
            description: 'string',
            duration: 'string',
            rate: 'string',
            amount: 0
        }]

}


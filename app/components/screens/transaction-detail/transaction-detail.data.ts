import { ITransactionDetail } from "@/screens/transaction-detail/transaction-detail.interface";

export const mockDataTransactionDetail: ITransactionDetail =
{
    id: 1,
    recipientAvatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1140.jpg',
    recipient: 'Samanta William',
    email: 'samantha@mail.com',
    subtotal: 17883,
    tax: 2,
    total: 17883,
    project: 'Project #1',
    paymentType: 'Paypal',
    note: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    payTable: [
        { id: 1, date: '2022-12-01', description: 'Wireframing', duration: '64', rate: '60.00', amount: 360 },
        { id: 2, date: '2022-12-01', description: 'App UI Design Phase 1', duration: '441', rate: '35.00', amount: 15435 },
        { id: 3, date: '2022-12-01', description: 'Desgin System', duration: '12', rate: '75.00', amount: 900 },
        { id: 4, date: '2022-12-01', description: 'UX Writing', duration: '54', rate: '22.00', amount: 1188 }
    ]

}
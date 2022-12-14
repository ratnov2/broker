export type SavingsData = {
    id: number,
    name: string,
    amount: number,
    topUp: number,
    currency: string,
    purpose: number,
    color: string,
    bColor: string,
}

export let savingsData: SavingsData[] = [
    {
        id:1234,
        name:'Healthcare',
        amount: 50000,
        topUp: 1000,
        purpose: 100000,
        currency: '$',
        color: '#54C5EB',
        bColor:'#fff',
    },
    {
        id:1235,
        name:'Healthcare 2',
        amount: 50000,
        topUp: 1000,
        purpose: 100000,
        currency: '$',
        color: '#6160DC',
        bColor:'#fff',
    },
    {
        id:123555,
        name:'Healthcare 3',
        amount: 54000,
        topUp: 10040,
        purpose: 1040000,
        currency: '$',
        color: '#FFB74A',
        bColor:'#fff',
    }
]
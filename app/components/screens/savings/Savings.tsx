import { FC } from 'react'

import Layout from '@/layout/Layout'
import SavingsForm from "@/screens/savings/form/SavingsForm";
import SavingsTable from "@/screens/savings/table/SavingsTable";


const Savings: FC = () => {
    return (
        <Layout title='Savings'>
            <div className='flex justify-left items-center mt-5 mb-5'>
                <h1 className='text-4xl font-bold'>Savings</h1>
            </div>
            <div className='flex justify-between h-screen' >
                <SavingsTable ></SavingsTable>
                <SavingsForm ></SavingsForm>
            </div>
        </Layout>
    )
}

export default Savings

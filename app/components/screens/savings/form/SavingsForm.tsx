import {FC, useState} from 'react'
import SavingsButton from "@/screens/savings/button/SavingsButton";
import SavingsInput from "@/screens/savings/input/SavingsInput";
import styles from "@/screens/savings/form/SavingsForm.module.scss"
import {SavingsData} from "@/screens/savings/data/savings";

const SavingsForm: FC = () => {

    const [saving, SetSaving] = useState(  {
        id:1234,
        name:'Healthcare',
        amount: 50000,
        topUp: 1000,
        purpose: 100000,
        currency: '$',
        color: '#54C5EB',
        bColor:'#fff',
    })

    return (
        <div className='flex w-1/4 box-border'>
            <div className={styles.wrapper}>
                <form className={styles.form}>
                    <div className=' w-full justify-center items-center '>
                        <h2 className='font-bold'>New saving</h2>
                    </div>
                    <SavingsInput label={'Name'} placeholder={'Name'} type={'text'}></SavingsInput>
                    <SavingsInput label={'Saving Target'} placeholder={'1000'} type={'text'}></SavingsInput>
                    <SavingsInput label={'Saving Purpose'} placeholder={'1000'} type={'text'}></SavingsInput>
                    <SavingsInput label={'First Top-Up'} placeholder={'1000'} type={'text'}></SavingsInput>


                    <SavingsButton
                        color={'#6160dc'}
                        text={'Add'}
                        height={'h-12'}
                        width={'w-full'}
                    ></SavingsButton>

                </form>
            </div>
        </div>
    )
}

export default SavingsForm

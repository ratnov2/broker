import {FC} from 'react'
import SavingsRow from "@/screens/savings/row/SavingsRow";
import {savingsData} from '@/screens/savings/data/savings';
import styles from './SavingsTable.module.scss'

const SavingsTable: FC = () => {
    const backgrounds = [
        '#fff',
        '#F5F5F5'
    ];
    let backGroundFlag = true;

    return (
        <div className={styles.wrapper}>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className='flex justify-left items-center'>
                        <h3 className='text-xl font-bold pl-7 pt-2 pb-5'>Savings List</h3>
                    </div>
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <tbody>
                            {
                                savingsData.map(saving => {
                                    backGroundFlag = !backGroundFlag;
                                    const bColor = backgrounds[+ backGroundFlag];

                                    return <SavingsRow
                                        id={saving.id}
                                        name={saving.name}
                                        amount={saving.amount}
                                        topUp={saving.topUp}
                                        currency={saving.currency}
                                        purpose={saving.purpose}
                                        color={saving.color}
                                        bColor={bColor}
                                    ></SavingsRow>
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavingsTable



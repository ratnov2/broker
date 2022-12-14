import { FC } from 'react'

type inputProps = {
    label: string,
    placeholder: string,
    type: string,

}
const SavingsInput: FC<inputProps> = ({label, placeholder, type}:inputProps) => {
    return (
        <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
                {label}
            </label>
            <input
                className="text-sm shadow appearance-none border border-red-500 rounded-3xl w-full py-4 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="top-up" type={type} placeholder={placeholder}/>
        </div>
    )
}

export default SavingsInput;
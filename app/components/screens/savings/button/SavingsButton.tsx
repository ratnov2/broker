import { FC } from 'react'

type buttonProps = {
    color: string,
    text: string,
    height: string,
    width: string,
}

const SavingsButton: FC<buttonProps> = ({color, text, height, width}:buttonProps) => {

    let className = `${width} ${height} inline-block px-6 py-2.5 bg-blue-600 
                text-white font-medium text-xs leading-tight uppercase rounded-3xl
                shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
                focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
                transition duration-150 ease-in-out`;
    return (
        <button type="button"
                className={className}
                style={{backgroundColor: color}}
        >
            {text}
        </button>
    )
}

export default SavingsButton;
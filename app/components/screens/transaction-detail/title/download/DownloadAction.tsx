import { FC, useState } from 'react'
import Select from 'react-select'
import type { SingleValue } from 'react-select'

interface ISelect {
	value: string
	label: string
}

const options:ISelect[] = [
	{
		value: 'download-as',
		label: 'Download as'
	},
	{
		value: 'pdf',
		label: '*.pdf'
	},
	{
		value: 'excel',
		label: '*.xls'
	},
	{
		value: 'word',
		label: '*.doc'
	}
]

const DownloadAction: FC = () => {
	const [valueDownload, setValueDownload] = useState<SingleValue<ISelect>>(options[0])

	const handleChange = (option: SingleValue<ISelect>) => {
		setValueDownload(option)
	  };
	  
	return (
		<>
			<Select
				classNamePrefix={'download-custom-select'}
				options={options}
				value={valueDownload}
				onChange={handleChange}
				hideSelectedOptions={true}
				styles={{
					control: styles => ({
						...styles,
						cursor: 'pointer'
					})
				}}
			/>
		</>
	)
}

export default DownloadAction

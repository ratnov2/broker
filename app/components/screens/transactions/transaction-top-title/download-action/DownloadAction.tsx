import { FC, useState } from 'react';
import Select from 'react-select';


const options = [
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

const DownloadAction: FC = ({}) => {

	const onChange = (newValue: any) => {
		alert("Downloaded as " + newValue.label)
	}

	return (
		<div>
			<Select
				classNamePrefix={'download-custom-select'}
				options={options}
				value={options[0]}
				onChange={onChange}
				hideSelectedOptions={true}
				styles={{
					control: (styles) => ({
						...styles,
						cursor: 'pointer',
					})
				}}
			/>
		</div>
	)
}

export default DownloadAction
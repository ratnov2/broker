import cn from 'clsx'
import Image from 'next/image'
import { CSSProperties, FC } from 'react'
import { FieldError } from 'react-hook-form'

import styles from './UploadField.module.scss'
import { useUpload } from './useUpload'

interface IUploadField {
	folder?: string
	image?: string
	onChange: (...event: any[]) => void
	placeholder: string
	error?: FieldError
	style?: CSSProperties
	isNoImage?: boolean
}

const UploadField: FC<IUploadField> = ({
	placeholder,
	error,
	style,
	image,
	folder,
	onChange,
	isNoImage = false
}) => {
	const { uploadImage, isLoading } = useUpload(onChange, folder)

	return (
		<div className={cn(styles.field, styles.uploadField)} style={style}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type='file' onChange={uploadImage} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<div>Loading...</div>
						) : (
							image && <Image src={image} alt='' fill={true} unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default UploadField

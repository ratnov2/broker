import Head from 'next/head'
import NextProgressBar from 'nextjs-progressbar'
import { FC, ReactNode } from 'react'
import favicon from '@/assets/images/favicon.ico'
export interface PropsHeadProvider {
	children: ReactNode
}

const HeadProvider: FC<PropsHeadProvider> = ({ children }) => {
	return (
		<>
			<NextProgressBar
				color='red'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<meta charSet='UTF-8' />
				<meta
					name='viewport'
					content='width-device-width, initial-scale=1, maximum-scale=1.0'
				/>
				<meta name='theme-color' content='white' />
				<meta name='msapplication-navbutton-color' content='white' />
				<meta
					name='apple-mobile-web-app-status-bar-style'
					content='white'
				/>
            <link rel="icon" href={favicon.src} />

			</Head>
            {children}
		</>
	)
}
export default HeadProvider
